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
    await res.send('deleting post...')
}

module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}