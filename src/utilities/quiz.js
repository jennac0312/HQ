import axios from "axios"

export const getAllQuestions = async() => {
    try {
        const questions = await axios.get('/quiz')
        console.log(questions)
    } catch (error) {
        console.error(error)
    }
}