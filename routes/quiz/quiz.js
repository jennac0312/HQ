const express = require("express")
const router = express.Router()
const quizCtrl = require('../../controllers/quiz/quiz')

router.get('/', quizCtrl.getAllQuestions)

module.exports = router