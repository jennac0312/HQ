import React, { useContext, useEffect, useState } from 'react'
import './operations.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as quiz from '../../utilities/quiz'
import Quiz from '../../components/quiz/Quiz'

const Operations = () => {

  const { updateCurrentPage, quizQuestions, setQuizQuestions, quizCategory, setQuizCategory } = useContext(AppContext)
  updateCurrentPage("operations")
  
  // const [ currentCategory, setCurrentCategory ] = useState(null)
  const [ filteredQuestions, setFilteredQuestions ] = useState([])

  useEffect(() => {
    // setCurrentCategory("")
    const getAllQuestions = async () => {
      const questions = await quiz.getAllQuestions()
      console.log(questions)

      setQuizQuestions(questions)
    }

    getAllQuestions()

    return() => {
      // setCurrentCategory("")
    }
  }, [quizCategory])

  const filterAllQuestions = (by) => {
    console.log('FILTER BY',by)
    if(!quizCategory) return 
    const filtered = quizQuestions.filter((question) => { 
      // question.category.includes(by) 
      // console.log(question.category.includes(by))
      return question.category.includes(by)
    })

    console.log(filtered)
    setQuizQuestions(filtered)
    console.log('QUIZ QUESTIONS',filtered)
    console.log('QUIZ QUESTIONS',quizQuestions)

    setFilteredQuestions(filtered)
  }

  useEffect(() => {
    filterAllQuestions(quizCategory)
  }, [quizCategory])


  return (
    <div className='operations'>
      <Header />
      <main>
        <h1>operation get a job</h1>
        <h4>choose a topic, answer some questions</h4>
        <div className="tabs">
          <p className="hover" onClick={() => setQuizCategory("HTML")}>HTML</p>
          <p className="hover" onClick={() => setQuizCategory("CSS")}>CSS</p>
          <p className="hover" onClick={() => setQuizCategory("JavaScript")}>JS</p>
          <p className="hover" onClick={() => setQuizCategory("React")}>REACT</p>
        </div>
        {
          quizCategory &&
          <Quiz questions={filteredQuestions}/>
        }
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Operations
