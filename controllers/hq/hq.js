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
            // user: user._id, // trying to ref...
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
        const allPosts = await Post.find({category: "headquarters"})
        res.send(allPosts)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updatePost = async ( req, res ) => {
    // console.log(req.body)
    // await res.send("updating post")
    const id = req.body.post._id
    console.log('ID',id)
    const updated = await Post.findByIdAndUpdate(id, req.body.post, { new: true})
    console.log(updated)
    res.send(updated)
}

// using body
// const deletePost = async ( req, res ) => {
//     // const { post } = req.body // undefined cant grab post from body for some reason. its just a nameless object (or the name is req.body)
//     try {
//         console.log('REQ BODY',req.body) // object with id prop
//         const deletedPost = await Post.findByIdAndDelete(req.body.id)
//         res.send(deletedPost)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// using params
const deletePost = async ( req, res ) => {
    try {
        // console.log('REQ BODY',req.body) // empty
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
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