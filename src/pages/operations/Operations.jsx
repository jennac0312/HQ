import React, { useContext, useEffect } from 'react'
import './operations.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as quiz from '../../utilities/quiz'

const Operations = () => {

  const { updateCurrentPage, quizQuestions, setQuizQuestions } = useContext(AppContext)
  updateCurrentPage("operations")

  useEffect(() => {
    const getAllQuestions = async () => {
      const questions = await quiz.getAllQuestions()
      console.log(questions)
    }

    getAllQuestions()
  })

  const filterAllQuestions = (by) => {
    const filtered = quizQuestions.filter((question) => { question.category.matches(by)})

    console.log(filtered)
  }


  return (
    <div className='operations'>
      <Header />
      <main>
        <h1>operation get a job</h1>
        <h4>choose a topic, answer some questions</h4>
        <div className="tabs">
          <p className="hover">HTML</p>
          <p className="hover">CSS</p>
          <p className="hover">JS</p>
          <p className="hover">REACT</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Operations
