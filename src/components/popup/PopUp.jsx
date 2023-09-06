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
        <h2 className='delete'>DELETE</h2>
        <p className='content'>{message}</p>
        <h3 className='confirm'>Click to Confirm</h3>
        <div className="buttons">
            <button className="yes" onClick={() => handleDelete()}>OKAY</button>
            <button className="no" onClick={() => setShowPopUp(false)}>CANCEL</button>
        </div>
    </div>
  )
}

export default PopUp
