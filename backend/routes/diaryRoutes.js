const express = require('express');
const { createDiary, getDiaries, getDiaryById, updateDiary, deleteDiary } = require('../controllers/diaryControllers');

const router = express.Router();

router.route('/')
  .get(getDiaries)
  .post(createDiary);

router.route('/:id')
  .get(getDiaryById)
  .put(updateDiary)
  .delete(deleteDiary);

module.exports = router;