const express = require('express');
 
const router = express.Router();
 
const {createDiary, getDiaries, getDiaryById, updateDiary, deleteDiary} = require('../controllers/diaryControllers');
 
const { protect } = require('../middleware/authMiddleware');
 
 
// PROTECTED ROUTES
router.post('/', protect, createDiary);
router.get('/', protect, getDiaries);
router.get('/:id', protect, getDiaryById);
router.put('/:id', protect, updateDiary);
router.delete('/:id', protect, deleteDiary);

module.exports = router;