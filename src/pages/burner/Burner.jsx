import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import './burner.css'
import { AppContext } from '../../contexts/app_context'
import Footer from '../../components/footer/Footer'
// import Message from '../../components/message/Message'
// import SendMessage from '../../components/circle/Circle'

const Burner = () => {

  const { setShowNav } = useContext( AppContext )

  return (
    <div className='burner'>
      {/* <SendMessage /> */}
      <Header page="burner"/>

      <main onClick={() => setShowNav(false)}>
        <h1>burner phone coming soon</h1>
        <p>
            battle among other agents for
            <br /> 
            <span className="bold">ALL OR NOTHING</span> 
            <br />
            rank points
        </p>
        {/* <Message />
        <Message />
        <Message />
        <Message /> */}
      </main>
        {/* <Footer /> */}
        <footer></footer>
    </div>
  )
}

export default Burner
