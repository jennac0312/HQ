import axios from "axios";

export const sendPost = async (post, user) => {
    const postReq = await axios.post('/hq', {user, post}, {
        headers: "application.json"
    })

    console.log(postReq)
}

export const getAllPosts = async() => {
    try {
        const allPosts = await axios.get('/hq', {
            headers: "application/json"
        })
        console.log(allPosts)
        return allPosts.data
    } catch (error) {
        console.error(error)
    }
}



export const deletePost = async (post) => {
    try {
        console.log(post)
        const deletedPost = await axios.delete('/hq', {
            headers: {
                "Content-Type" : 'application/json'
            },
            data : { id: post._id }
        })
        // const deletedPost = await axios.delete(`/hq/${post._id}`) // works
        console.log(deletedPost)
    } catch (error) {
        console.error(error)
    }
}