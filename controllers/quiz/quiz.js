const Quiz = require('../../models/Quiz')

const getAllQuestions = async ( req, res ) => {
    try {
        const allQuestions = await Quiz.find({})
        console.log(allQuestions)
        res.send(allQuestions)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllQuestions,

}