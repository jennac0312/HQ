import axios from "axios"

export const sendMessage = async (note, user) => {
    try {
        const res = await axios.post('/safehouse', {user, note}, {
            headers: "application.json"
        })
    
        console.log(res)
        return res
    } catch (error) {
        console.error(error)
    }
}

export const getAllMessages = async (user) => {
    try {
        const res = await axios.get(`/safehouse/${user._id}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteMessage = async (message) => {

    try {
        await axios.delete(`/safehouse/${message._id}`)
        console.log('post deleted')
    } catch (error) {
        console.error(error)
    }

}