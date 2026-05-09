const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');
 
const connectDB = require('./config/db');
 
dotenv.config();
 
connectDB();
 
const app = express();
 
app.use(cors());

app.use(express.json());
 
app.use('/api/diaries', require('./routes/diaryRoutes'));
 
const PORT = process.env.PORT;
 
app.listen(PORT, () => {

    console.log(`Server running on port http://localhost:${PORT} ✅`);

});