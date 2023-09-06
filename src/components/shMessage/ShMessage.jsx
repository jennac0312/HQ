import React, { useContext, useEffect } from 'react'
import './shMessage.css'
import { AppContext } from '../../contexts/app_context'
import * as sh from '../../utilities/safehouse'

const ShMessage = ({ message }) => {

    const { normalizeTimeStamp, count, setCount } = useContext(AppContext)

    const time = normalizeTimeStamp(message.createdAt)
    console.log(time)

    const handleDelete = async () => {
        setCount(prev => prev + 1)
        try {
            await sh.deleteMessage(message)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='shMessage'>
        <p className="delete hover icon-10" onClick={handleDelete}>❌</p>
        <div className="top">
            <p className="time">
                {time.hours}:{time.minutes} 
            </p>
            <p className="date">{time.month}/{time.day}/{time.year}</p>
        </div>
        <p className='message'>{message.message}</p>
    </div>
  )
}

export default ShMessage
