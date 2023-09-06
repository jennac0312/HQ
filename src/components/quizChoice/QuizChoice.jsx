import React, { useContext } from 'react'
import './quizChoice.css'
import { AppContext } from '../../contexts/app_context'

const QuizChoice = ({ choice, count, setCount }) => {

    // const { quizCount, setQuizCount } = useContext(AppContext)

  return (
    <div className='choice' onClick={() => setCount((prev) => prev + 1)}>
        <p>{choice}</p>
      {/* answers: {choice} */}
    </div>
  )
}

export default QuizChoice
