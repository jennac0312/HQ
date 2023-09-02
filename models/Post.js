const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    category: { type: String, required: true }

}, { timestamps: true })

const Post = mongoose.model( 'Post', PostSchema )

module.exports = Post