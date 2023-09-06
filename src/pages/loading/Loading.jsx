import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './loading.css'

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
    <div className='loading'>
      <h1>{'< HQ />'}</h1>
      <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
    </div>
  )
}

export default Loading
