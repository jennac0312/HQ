const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    user: { type: Object, required: true },
    message: { type: String, required: true },
    date: {
        type: Date,
        required: true,
        default: Date.now
      },
}, { timestamps: true })

const Note = mongoose.model( 'Note', NoteSchema )

module.exports = Note
