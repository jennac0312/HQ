const mongoose = require("mongoose")
require('./User')

const PostSchema = new mongoose.Schema({
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user: { type: Object, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: { type: Array },

}, { timestamps: true })

const Post = mongoose.model( 'Post', PostSchema )

module.exports = Post
