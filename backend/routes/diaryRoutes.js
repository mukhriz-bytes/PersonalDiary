const express = require('express');
const { createDiary, getDiaries, getDiaryById, updateDiary, deleteDiary } = require('../controllers/diaryControllers');

const router = express.Router();

// Route for creating a new diary entry and getting all diary entries
router.route('/')
  .get(getDiaries)
  .post(createDiary);

// Individual method calls
// Route for getting, updating, and deleting a diary entry by ID  
router.get('/:id', getDiaryById);
router.put('/:id', updateDiary);
router.delete('/:id', deleteDiary);

module.exports = router;