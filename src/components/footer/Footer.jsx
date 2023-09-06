import React, { useContext } from 'react'
import './footer.css'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'
import * as intel from '../../utilities/intelligence'
import * as sh from '../../utilities/safehouse'

const Footer = ({ input, setInput }) => {

    const { user, setShowNav, currentPage } = useContext( AppContext )

    const handleChange = (e) => {
      setInput(() => e.target.value)
      console.log(input)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      // send input to hq posts
      // send user to hq posts
      console.log( input )
      console.log( user )

      let res 
      
      if(currentPage === "headquarters"){
        res = await hq.sendPost(input, user)
      }
      if(currentPage === "intelligence"){
        res = await intel.sendPost(input, user)
      }
      if(currentPage === "safehouse"){
        res = await sh.sendPost(input, user)
      }
      console.log(res)

      setInput('')
    }

  return (
    <footer onClick={() => setShowNav(false)}>
      {/* <h1>FOOTER</h1> */}
      <form action="" onSubmit={handleSubmit}>
        <textarea 
          type="text" 
          value={input}
          onChange={handleChange}
        />
        <input type='submit'></input>
      </form>
    </footer>
  )
}

export default Footer
