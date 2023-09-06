import axios from "axios"

export const getAllQuestions = async() => {
    try {
        const questions = await axios.get('/quiz')
        console.log(questions.data)

        return questions.data
    } catch (error) {
        console.error(error)
    }
}

export const updatePoints = async (user, adjustment) => {
    try {
        const updated = await axios.put('/quiz', {user, adjustment})
        console.log(updated)
    } catch (error) {
        console.error(error)
    }
}