import React, { useContext, useEffect, useState } from 'react'
import './quiz.css'
import Question from '../question/Question'
import { AppContext } from '../../contexts/app_context'
import Results from '../results/Results'

const Quiz = ({ questions }) => {

    // const [ quizCount, setQuizCount ] = useContext(AppContext)
    const { quizCategory } = useContext(AppContext)
    console.log('QUIZ QUESTIONS',questions)

    const [ quizCount, setQuizCount ] = useState(0)
    const [ isEnd, setIsEnd ] = useState(false)
    console.log('END',isEnd)
    const [ quizResults, setQuizResults ] = useState({
        correctQuestions: [],
        incorrectQuestions: [],
        correctNumber: 0,
        incorrectNumber: 0,
        answers: [],
        incorrectAnswers: []
    })

    const checkForEnd = () => {
      console.log(questions?.length)
      console.log(quizCount)
        // if( questions.length !== quizCount){
        //   setIsEnd(false)
        // } else {
        //   setIsEnd(true)
        // }

        const questionsLeft = questions?.length - quizCount
        if( questionsLeft === 0){
          console.log('QUESTIONS OVER', questions?.length - quizCount)
          setIsEnd(true)
        } else {
          console.log('QUESTIONS LEFT', questions?.length - quizCount)
          setIsEnd(false)
        }

        console.log('QUIZ IS END:', isEnd)
    }

    useEffect(() => { checkForEnd() }, [quizCount, questions])
    useEffect(() => { 
      setQuizCount(0)
      setQuizResults({
        correctQuestions: [],
        incorrectQuestions: [],
        correctNumber: 0,
        incorrectNumber: 0,
        answers: [],
        incorrectAnswers: []
    }) 
    }, [quizCategory]) // reset

  return (
    <div className='quiz'>
      {/* { isEnd ? <p>END TRUE</p> : <p>end false</p> } */}
        {
            !isEnd ?
            <h3>{questions[0]?.category} QUIZ</h3>
            :
            <div className="results">
                <h3>{questions[0]?.category} QUIZ RESULTS</h3>
                <Results question={questions[quizCount]} quizResults={quizResults}/>
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
        <Question question={questions[quizCount]} quizCount={quizCount} setQuizCount={setQuizCount} isEnd={isEnd} quizResults={quizResults} setQuizResults={setQuizResults}/>
      }
    </div>
  )
}

export default Quiz
