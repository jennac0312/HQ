import React, { useContext } from 'react'
import './quizChoice.css'
import { AppContext } from '../../contexts/app_context'

const QuizChoice = ({ question, choice, count, setCount, quizResults, setQuizResults}) => {

    // const { quizCount, setQuizCount } = useContext(AppContext)
    
    const handleClick = (e) => {
        const clickedAnswer = e.target.innerText
        console.log(clickedAnswer)
        const indexOfClickedAnswer = question.choices.indexOf(e.target.innerText)
        console.log(indexOfClickedAnswer)
        console.log(question.correctIndex)

        checkAnswer(indexOfClickedAnswer, question.correctIndex)
        goToNextQuestion()
    }
    // correctQuestions: [],
    // incorrectQuestions: [],
    // correctNumber: 0
    const corrects = [...quizResults.correctQuestions] // shallow copy
    const incorrects = [...quizResults.incorrectQuestions] // shallow copy
    const checkAnswer = (selected, correct) => {
        if( selected === correct ){
            console.log('correct!', question)
            corrects.push(question)
            setQuizResults({
                ...quizResults,
                correctQuestions : corrects,
                correctNumber: quizResults.correctNumber++,
                selected: question.choices[selected],
                answers: [...quizResults.answers, question.choices[selected]]
            })
            console.log('QUIZ RESULTS',quizResults)
        } else {
            console.log('wrong!')
            incorrects.push(question)
            setQuizResults({
                ...quizResults,
                incorrectQuestions : incorrects,
                selected: question.choices[selected],
                incorrectNumber: quizResults.incorrectNumber++,
                answers: [...quizResults.answers, question.choices[selected]],
                incorrectAnswers: [...quizResults.incorrectAnswers, question.choices[selected]]
            })
            console.log('QUIZ RESULTS',quizResults)
        }
    }

    const goToNextQuestion = () => {
        setCount(prev => prev + 1)
    }

  return (
    <div className='choice hover' >
        <p onClick={(e) => handleClick(e)}>{choice}</p>
        {/* answers: {choice} */}
    </div>

  )
}

export default QuizChoice
