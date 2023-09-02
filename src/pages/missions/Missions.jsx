import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const Missions = () => {

  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("missions")

  return (
    <div>
      <Header />
      <main>
        <h1>missions</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Missions
