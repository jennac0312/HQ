import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../contexts/app_context'
import './welcome.css'

const Welcome = () => {

  // redirect to home page after 5 secs
    const { user, navigate } = useContext( AppContext )

    useEffect(() => {
      setTimeout(() => {
        navigate('/headquarters')
      }, 6500);
    })

    const text = `Welcome to < HQ /> agent ${(user.name)?.toUpperCase()}`

    const [ displayText, setDisplayText ] = useState("")
    const [ index, setIndex ] = useState(0) // increment through string
    const flash = useRef(null)
    const [ runTime, setRunTime ] = useState(0)

    useEffect(() => {
      const typeWriter = setInterval(() => {
        if( index < text.length ){
          setDisplayText((prev) => prev + text[index])
          setIndex((prev) => prev + 1)
        } else {
          clearInterval(typeWriter)
          flash.current.classList.add('flash') // add flash when done typing
          // console.log('TYPEWRITER', typeWriter)
          setRunTime(typeWriter)
        }
      }, 100);
      return () => {
        clearInterval(typeWriter)
      }
    }, [index, displayText])


  // console.log(flash)
  
  return (
    <div className='welcome'>
      <h1 ref={flash}>{displayText}</h1>
    </div>
  )
}

export default Welcome
