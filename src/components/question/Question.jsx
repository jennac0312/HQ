import React, { useContext } from 'react'
import './question.css'
import QuizChoice from '../quizChoice/QuizChoice'
import { AppContext } from '../../contexts/app_context'

const Question = ({ question, count, setCount}) => {
    console.log(question)

    // const { quizCount, setQuizCount } = useContext(AppContext)

  return (
    <div className='questionBox'>
      {/* QUESTION: {question?.question} */}

      <h3 className='question'>{question?.question}</h3>

      <div className="choices">
        {
            question?.choices?.map((choice) => {
                return <QuizChoice choice={choice} count={count} setCount={setCount}/>
            })
        }
      </div>
    </div>
  )
}

export default Question
