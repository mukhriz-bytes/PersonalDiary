const express = require('express');
 
const router = express.Router();
 
const {
    registerUser,
    loginUser,
    verifyToken
} = require('../controllers/authController');
 
const { protect } = require('../middleware/authMiddleware');
 
 
// REGISTER
router.post('/register', registerUser);
 
// LOGIN
router.post('/login', loginUser);
 
// VERIFY TOKEN
router.get('/verify', protect, verifyToken);
 
module.exports = router;