import React, { useContext } from 'react'
import './shMessage.css'
import { AppContext } from '../../contexts/app_context'
import * as sh from '../../utilities/safehouse'

const ShMessage = ({ message }) => {

    const { normalizeTimeStamp } = useContext(AppContext)

    const time = normalizeTimeStamp(message.createdAt)

    const handleDelete = async () => {
        try {
            await sh.deleteMessage(message)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='shMessage'>
        <div className="top">
            <p className="time">
                {time.hours}:{time.minutes}{ time.hours >= 10 ? 'pm' : 'am' } 
            </p>
            <p className="delete hover" onClick={handleDelete}>❌</p>
        </div>
        <p>{message.message}</p>
    </div>
  )
}

export default ShMessage
