import React, { useContext, useEffect, useState } from 'react'
import './results.css'
import { AppContext } from '../../contexts/app_context'
import { Link, useSearchParams } from 'react-router-dom'
import * as quiz from '../../utilities/quiz'

const Results = ({ question, quizResults }) => {
    const { user } = useContext(AppContext)

    console.log(quizResults)
    const correct = quizResults.correctQuestions?.length
    const incorrect = quizResults.incorrectQuestions?.length
    const totalQuestions = correct + incorrect
    const score = correct/totalQuestions
    console.log(score)
    console.log(totalQuestions)

    const [ adjustment, setAdjustment ] = useState(0)

    const checkScore = () => {
        if(score === 1) setAdjustment(20)
        if(score < 1 && score > .49) setAdjustment(2)
        if(score < .5) setAdjustment(-10)
    }

    useEffect(() => {
        checkScore()
        const adjustRankPoints = async () => {
            try {
                await quiz.updatePoints(user, adjustment)
            } catch (error) {
                console.error(error)
            }
        }

        adjustRankPoints()
    }, [adjustment])

    return (
        <>
        <div className='resultsContainer'>
        <div className="right">
            <h3>CORRECT:</h3>
            {
                quizResults.correctQuestions?.map((question, index) => {
                    return (
                        <div key={index}>
                            <p className='italic bold'>{question.question}</p>
                            <p className='green'>{question.choices[question.correctIndex]}</p>
                        </div>
                    )
                })
            }
        </div>
      <div className="wrong">
        <h3>INCORRECT:</h3>
        {
            quizResults.incorrectQuestions?.map((question, index) => {
                const correctAnswer = question.choices[question.correctIndex]
                return (
                    <div key={index}>
                        <p className='italic bold'>{question.question}</p>
                        <p className="red">{quizResults.incorrectAnswers[index]}</p>
                        <p className='green'>{correctAnswer}</p>
                    </div>
                )
            })
        }
      </div>
        </div>

        <div>
            { 
                score === 1 && 
                <>
                    <h1 className=''>A PERFECT SCORE!</h1>
                    <h3>Enjoy 10 additional rank points for your hard work agent {user.name.toUpperCase()}!</h3>
                </>
            }
            {
                score < 1 && score > .49  && 
                <>
                    <h1>You scored {score * 100}%</h1>
                    <h3>Enjoy 2 additional rank points for participation agent {user.name.toUpperCase()}</h3>
                </>
            }
            {
                score < .5 && 
                <>
                    <h1>You scored {score * 100}%</h1>
                    <h3>Do better agent {user.name.toUpperCase()}. Deducting 10 rank points!</h3>
                </>
            }
            <button>
                <Link to='/ranks'>
                    view rank
                </Link>
            </button>
        </div>
        </>
  )
}

export default Results
