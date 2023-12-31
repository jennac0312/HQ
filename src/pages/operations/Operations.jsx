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

  const [ isCategoryClicked, setIsCategoryClicked ] = useState(false)
  
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
    setIsCategoryClicked( quizCategory !== "" )
  }, [quizCategory])


  return (
    <div className='operations'>
      <Header title="operations"/>
      <main>
        <div className="explanation" style={{ display: isCategoryClicked ? "none" : null }}>
          <h1>operation <span className='italic'>get a job</span></h1>
          <h4>choose a topic, answer some questions</h4>
        </div>
        <div className="tabs">
          <p className="hover" onClick={() => setQuizCategory("HTML")}>HTML</p>
          <p className="hover" onClick={() => setQuizCategory("CSS")}>CSS</p>
          <p className="hover" onClick={() => setQuizCategory("JavaScript")}>JS</p>
          <p className="hover" onClick={() => setQuizCategory("React")}>REACT</p>
        </div>
        {
          quizCategory &&
          <Quiz questions={filteredQuestions} setIsCategoryClicked={setIsCategoryClicked}/>
        }
      </main>
      {/* <Footer /> */}
      <footer></footer>
    </div>
  )
}

export default Operations
