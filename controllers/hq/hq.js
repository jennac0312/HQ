const Post = require('../../models/Post')
const User = require('../../models/User')

const populate = () => {

}

const createPost = async ( req, res ) => {
    const { user, post } = req.body
    
    // await res.send('creating post')

    try {
        // const userObject = await User.findById(user)
        const newPost = await Post.create({
            user, 
            content: post,
            category: 'headquarters'
        })
        console.log(newPost)
    
        // res.send("post created")
        res.redirect('/') // doesnt work
    } catch (error) {
        res.status(500).send(error)
    }
}
const getAllPosts = async ( req, res ) => {
    // await res.send("getting all posts")

    try {
        const allPosts = await Post.find({})
        res.send(allPosts)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updatePost = async ( req, res ) => {
    await res.send("updating post")
}

const deletePost = async ( req, res ) => {
    // await res.send('deleting post...')
    // await Post.deleteMany({})
    // res.send('deleted all')
    // const { post } = req.body // undefined cant grab post from body for some reason. its just a nameless object (or the name is req.body)
    try {
        console.log('REQ BODY',req.body)
        // console.log('POST', post)
        // const foundPost = await Post.findById(req.body._id)
        // const deletedPost = await Post.findByIdAndDelete(req.params.id)
        const deletedPost = await Post.findByIdAndDelete(req.body.id)
        res.send(deletedPost)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}