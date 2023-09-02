import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/app_context'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  // redirect to home page after 5 secs
    const { user, navigate } = useContext( AppContext )

    useEffect(() => {
      setTimeout(() => {
        navigate('/headquarters')
      }, 3000);
    })

  return (
    <div>
      <h1>Welcome to {'<HQ />'} agent, {user.name}</h1>
    </div>
  )
}

export default Welcome
