import React from 'react'
import './popUp.css'

const PopUp = ({ message }) => {
  return (
    <div className='popUp'>
        <h3>{message}</h3>
        <p>Click to Confirm</p>
        <button className="yes">OKAY</button>
        <button className="no">CANCEL</button>
    </div>
  )
}

export default PopUp
