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
      <Header title="missions"/>
      <main>
        <h1>missions coming soon</h1>
        <p>
            battle among other agents for
            <br /> 
            <span className="bold">ALL OR NOTHING</span> 
            <br />
            rank points
        </p>
      </main>
      {/* <Footer /> */}
      <footer></footer>
    </div>
  )
}

export default Missions
