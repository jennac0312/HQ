import React, { useContext } from 'react'
// import './popUp.css'
import './popUp.css'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'

const PopUp = ({ message, post }) => {

    const { setShowPopUp } = useContext(AppContext)

    const handleDelete = async () => {
        console.log(post)
        try {
            await hq.deletePost(post)
            console.log('post deleted')
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='popUp'>
        <p>delete:</p>
        <h3>{message}</h3>
        <p>Click to Confirm</p>
        <button className="yes" onClick={() => handleDelete()}>OKAY</button>
        <button className="no" onClick={() => setShowPopUp(false)}>CANCEL</button>
    </div>
  )
}

export default PopUp
