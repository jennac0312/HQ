const express = require("express")
const mongoose = require("mongoose")

const QuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    choices: { type: Array, required: true },
    correctIndex: { type: Number, required: true },
    category: { type: String, required: true }
})

const Quiz = mongoose.model("Quiz", QuizSchema)

module.exports = Quiz