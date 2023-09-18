import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './loading.css'
import { getUser } from '../../utilities/users-service';
import { AppContext } from '../../contexts/app_context';


const Loading = () => {

  const { user, setUser } = useContext(AppContext)


  const navigate = useNavigate()
    // redirect to login/sign up || welcome after 5 secs based on user
    useEffect(() => {
      // setUser( getUser() )
      setTimeout(() => {
        if( !user ){
          navigate('/authorize')
        } else {
          navigate('/welcome')
        }
      }, 1500);
    }, [])


  return (
    <div className='loading'>
      <div className="abs">
        <h1>{'< HQ />'}</h1>
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
      </div>
    </div>
  )
}

export default Loading
