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

const getNotes = async (req, res) => {
    try {
        const { id } = req.params
        console.log('ID', id)
        const allNotes = await Note.find({})
        console.log(allNotes)

        const filtered = filterNotes(allNotes, id)
        console.log(filtered)
        res.send(filtered)

    } catch (error) {
        res.status(500).send(error)
    }
}

const filterNotes = (what, id) => {
    const filtered = what.filter((each) => {
        return each.user._id === id
    })

    return filtered
}

const deleteNote = async (req, res) => {
    try {
        const id = req.params.id
        await Note.findByIdAndDelete(id)
        res.send('success, note deleted')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createNote,
    getNotes,
    deleteNote,
}