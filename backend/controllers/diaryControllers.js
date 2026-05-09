const Diary = require('../model/Diary');
 
 
// CREATE

const createDiary = async (req, res) => {

    try {
 
        const diary = await Diary.create(req.body);
 
        res.status(201).json(diary);
 
    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
 
 
// READ ALL

const getDiaries = async (req, res) => {

    try {
 
        const diaries = await Diary.find();
 
        res.json(diaries);
 
    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
 
 
// READ SINGLE

const getDiaryById = async (req, res) => {

    try {
 
        const diary = await Diary.findById(req.params.id);
 
        if (!diary) {

            return res.status(404).json({

                message: 'Diary not found'

            });

        }
 
        res.json(diary);
 
    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
 
 
// UPDATE

const updateDiary = async (req, res) => {

    try {
 
        const diary = await Diary.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );
 
        if (!diary) {

            return res.status(404).json({

                message: 'Diary not found'

            });

        }
 
        res.json(diary);
 
    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
 
 
// DELETE

const deleteDiary = async (req, res) => {

    try {
 
        const diary = await Diary.findByIdAndDelete(req.params.id);
 
        if (!diary) {

            return res.status(404).json({

                message: 'Diary not found'

            });

        }
 
        res.json({

            message: 'Diary deleted successfully'

        });
 
    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
 
module.exports = { createDiary, getDiaries, getDiaryById, updateDiary, deleteDiary };
 
 
module.exports = {

    createDiary,

    getDiaries,

    getDiaryById,

    updateDiary,

    deleteDiary

};