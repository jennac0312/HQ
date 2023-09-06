require('dotenv').config();
require('../database');
const mongoose = require('mongoose');

const User = require('../../models/User'); // model
const users = require("./users/users"); //seed data
// need ; when immediately invoked function for some reason

const Quiz = require("../../models/Quiz");
const htmlQuestions = require("./quiz/html");

(
    async function() {
        // USERS
        // await User.deleteMany({}) //delete all users
        const allUsers = await User.create(users)

        // User.insertMany(users)
        // .then(() => {
        //     console.log('Seed data inserted successfully.');
        // })
        // .catch((error) => {
        //     console.error('Error inserting seed data:', error);
        // })
        // .finally(() => {
        //     mongoose.disconnect(); // Close the MongoDB connection
        // })

        // INTELLIGENCE POSTS

        // QUIZ QUESTIONS
        await Quiz.deleteMany({})
        const htmlQs = await Quiz.create(htmlQuestions)

        console.log( allUsers )
        console.log( htmlQs )
        process.exit()
    }
)()