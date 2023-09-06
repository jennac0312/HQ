import React, { useContext, useEffect, useState } from 'react'
import './operations.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as quiz from '../../utilities/quiz'
import Quiz from '../../components/quiz/Quiz'

const Operations = () => {

  const { updateCurrentPage, quizQuestions, setQuizQuestions } = useContext(AppContext)
  updateCurrentPage("operations")
  
  const [ currentCategory, setCurrentCategory ] = useState("")

  useEffect(() => {
    // setCurrentCategory("")
    const getAllQuestions = async () => {
      const questions = await quiz.getAllQuestions()
      console.log(questions)

      setQuizQuestions(questions)
    }

    getAllQuestions()

    return() => {
      setCurrentCategory("")
    }
  }, [])

  const filterAllQuestions = (by) => {
    if(!currentCategory) return 
    const filtered = quizQuestions.filter((question) => { 
      // question.category.includes(by) 
      // console.log(question.category.includes(by))
      return question.category.includes(by)
    })

    console.log(filtered)
    setQuizQuestions(filtered)
  }

  useEffect(() => {
    filterAllQuestions(currentCategory)
  }, [currentCategory])


  return (
    <div className='operations'>
      <Header />
      <main>
        <h1>operation get a job</h1>
        <h4>choose a topic, answer some questions</h4>
        <div className="tabs">
          <p className="hover" onClick={() => setCurrentCategory("HTML")}>HTML</p>
          <p className="hover" onClick={() => setCurrentCategory("CSS")}>CSS</p>
          <p className="hover" onClick={() => setCurrentCategory("JS")}>JS</p>
          <p className="hover" onClick={() => setCurrentCategory("REACT")}>REACT</p>
        </div>
        {
          currentCategory &&
          <Quiz questions={quizQuestions}/>
        }
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Operations
