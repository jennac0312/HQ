import React from 'react'
import './results.css'

const Results = ({ quizResults }) => {
    
    console.log(quizResults)
  return (
    <div className='resultsContainer'>
      <div className="right"></div>
      <div className="wrong"></div>
    </div>
  )
}

export default Results
