import React, { useContext } from 'react'
import './question.css'
import QuizChoice from '../quizChoice/QuizChoice'
import { AppContext } from '../../contexts/app_context'
import Results from '../results/Results'

const Question = ({ question, quizCount, setQuizCount, isEnd, quizResults, setQuizResults}) => {
    console.log(question)
    console.log(quizCount)

    // const { quizCount, setQuizCount } = useContext(AppContext)

  return (
    <div className='questionBox'>
      {/* QUESTION: {question?.question} */}


        <h3 className='question'>{question?.question}</h3>
        

        {
            !isEnd &&
            <div className="choices">
        {
            question?.choices?.map((choice) => {
                return <QuizChoice question={question} choice={choice} quizCount={quizCount} setQuizCount={setQuizCount} isEnd={isEnd} quizResults={quizResults} setQuizResults={setQuizResults}/>
            })
        }
        </div>
        }
    </div>
  )
}

export default Question
