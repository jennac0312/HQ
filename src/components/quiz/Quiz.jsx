import React, { useContext, useEffect, useState } from 'react'
import './quiz.css'
import Question from '../question/Question'
import { AppContext } from '../../contexts/app_context'
import Results from '../results/Results'

const Quiz = ({ questions }) => {

    // const [ quizCount, setQuizCount ] = useContext(AppContext)
    console.log(questions)

    const [ count, setCount ] = useState(0)
    const [ isEnd, setIsEnd ] = useState(false)
    const [ quizResults, setQuizResults ] = useState({
        correctQuestions: [],
        incorrectQuestions: [],
        correctNumber: 0,
        incorrectNumber: 0,
        answers: [],
        incorrectAnswers: []
    })

    const checkForEnd = () => {
        if( questions.length === count ) setIsEnd(true)
        console.log('QUIZ IS END:', isEnd)
    }

    useEffect(() => { checkForEnd() }, [count])

  return (
    <div className='quiz'>
        {
            !isEnd ?
            <h3>{questions[0]?.category} QUIZ</h3>
            :
            <div className="results">
                <h3>{questions[0]?.category} QUIZ RESULTS</h3>
                <Results question={questions[count]} quizResults={quizResults}/>
            </div>
        }
      
      {/* questions container */}
      {/* <div className='questionsContainer'>
        {
            questions.map((question) => {
                return <Question question={question}/>
            })
        }
      </div> */}
      { // only show is questions exist
        questions &&
        <Question question={questions[count]} count={count} setCount={setCount} isEnd={isEnd} quizResults={quizResults} setQuizResults={setQuizResults}/>
      }
    </div>
  )
}

export default Quiz
