import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Loading = ({user, setUser }) => {

  const navigate = useNavigate()
    // redirect to login/sign up || welcome after 5 secs based on user
    useEffect(() => {
      setTimeout(() => {
        if( !user ) navigate('/authorize')
        navigate('/welcome')
      }, 3000);
    }, [])
  return (
    <div>
      <h1>LOADING PAGE</h1>
      <p>insert hq logo</p>
    </div>
  )
}

export default Loading
