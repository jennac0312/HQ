require('dotenv').config();
require('../database');
const mongoose = require('mongoose');

const User = require('../../models/User'); // model
const users = require("./users/users"); //seed data
// need ; when immediately invoked function for some reason

(
    async function() {
        await User.deleteMany({}) //delete all users
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

        console.log( allUsers )
        process.exit()
    }
)()