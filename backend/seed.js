const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Diary = require('./model/Diary');
 
dotenv.config();
 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
 
const seedData = [
    {
        title: 'My First Day',
        content: 'Today was an amazing day. I started my new job and everything went smoothly.',
        mood: 'Excited'
    },
    {
        title: 'Weekend Reflections',
        content: 'Spent the weekend with family. It was relaxing and rejuvenating.',
        mood: 'Peaceful'
    },
    {
        title: 'Learning New Things',
        content: 'Started learning React today. It\'s challenging but fun!',
        mood: 'Motivated'
    },
    {
        title: 'A Tough Day',
        content: 'Had a rough day at work. Need to take some time to recharge.',
        mood: 'Tired'
    },
    {
        title: 'Grateful Moment',
        content: 'Feeling grateful for all the good things in my life. Health, family, friends.',
        mood: 'Grateful'
    }
];
 
const importData = async () => {
    try {
        await connectDB();
 
        // Clear existing data
        await Diary.deleteMany();
 
        // Insert seed data
        await Diary.insertMany(seedData);
 
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
 
const destroyData = async () => {
    try {
        await connectDB();
 
        await Diary.deleteMany();
 
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
 
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}