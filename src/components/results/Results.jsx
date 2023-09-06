import React from 'react'
import './results.css'

const Results = ({ question, quizResults }) => {
    
    console.log(quizResults)
    return (
        <div className='resultsContainer'>
        <div className="right">
            <h3>CORRECT:</h3>
            {
                quizResults.correctQuestions.map((question) => {
                    return (
                        <div>
                            <p className='italic bold'>{question.question}</p>
                            <p className='green'>{quizResults.selected}</p>
                        </div>
                    )
                })
            }
        </div>
      <div className="wrong">
        <h3>INCORRECT:</h3>
        {
            quizResults.incorrectQuestions.map((question) => {
                const correctAnswer = question.choices[question.correctIndex]
                return (
                    <div>
                        <p className='italic bold'>{question.question}</p>
                        <p className='green'>{correctAnswer}</p>
                        <p className="red">{quizResults.selected}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Results
