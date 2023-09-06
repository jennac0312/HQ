import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import './missions.css'

const Missions = () => {

  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("missions")

  return (
    <div className='missions'>
      <Header />
      <main>
        <h1>missions coming soon</h1>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Missions
