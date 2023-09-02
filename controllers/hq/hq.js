const Post = require('../../models/Post')

const createPost = async ( req, res ) => {
    await res.send('creating post')
}
const getAllPosts = async ( req, res ) => {
    await res.send("getting all posts")
}

const updatePost = async ( req, res ) => {
    await res.send("updating post")
}

const deletePost = async ( req, res ) => {
    await res.send('deleting post...')
}

module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}