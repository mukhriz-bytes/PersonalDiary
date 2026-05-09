const mongoose = require('mongoose');
 
const diarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
 
    content: {
        type: String,
        required: true
    },
 
    mood: {
        type: String,
        default: 'Happy'
    }
 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Diary', diarySchema);