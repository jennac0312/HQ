import React, { useContext } from 'react'
import './footer.css'
import { AppContext } from '../../contexts/app_context'

const Footer = () => {

    const { setShowNav } = useContext( AppContext )

  return (
    <footer onClick={() => setShowNav(false)}>
      {/* <h1>FOOTER</h1> */}
      <textarea type="text" />
      <button>send</button>
    </footer>
  )
}

export default Footer
