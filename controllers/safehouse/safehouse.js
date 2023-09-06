const Note = require('../../models/Note')

const createNote = async (req, res) => {
    try {
        const { user, note } = req.body
        const newPost = await Note.create({ user, message: note})
        console.log(newPost)
        res.send(newPost)
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    createNote
}