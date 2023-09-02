import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const Intelligence = () => {

  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("intelligence")

  return (
    <div>
        <Header />
        <main>
            <h1>intelligence</h1>
        </main>
        <Footer />
      
    </div>
  )
}

export default Intelligence
