const Quiz = require('../../models/Quiz')
const User = require('../../models/User')

const getAllQuestions = async ( req, res ) => {
    try {
        const allQuestions = await Quiz.find({})
        console.log(allQuestions)
        res.send(allQuestions)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateRank = async ( req, res ) => {
    try {
        const { user, adjustment } = req.body
        const newRank = user.rank + adjustment
        console.log(adjustment)
        const updated = await User.findByIdAndUpdate( user._id, { rank: newRank }, {new: true})
        // const updated = await User.findById(user._id)
        console.log(updated)
        res.send(updated)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    getAllQuestions,
    updateRank,
}