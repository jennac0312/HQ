import React from 'react'
import './shMessage.css'

const ShMessage = ({ message }) => {
  return (
    <div className='shMessage'>
        <div className="top">
            {message.createdAt}
        </div>
        <p>{message.message}</p>
    </div>
  )
}

export default ShMessage
