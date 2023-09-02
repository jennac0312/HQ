import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const Headquarters = () => {
  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("headquarters")
  return (
    <div>
        <Header />
        <main>
            <h1>headquarters</h1>
            <p>render posts from hq channel</p>
            <p>general posts</p>
        </main>
        <Footer />
      
    </div>
  )
}

export default Headquarters
