import React, { useContext } from 'react'
import './editSample.css'
import { AppContext } from '../../contexts/app_context'

const EditSample = ({ formData }) => {

    const { user } = useContext(AppContext)

  return (
    <>
        <h3 className='title'>{formData.name.toUpperCase()} ID CARD</h3>
        <div className='sampleEdit'>
        <div className="left">
            <img src={formData.image} alt="" className='avi'/>
            <div className="">
                <p className="name">{formData.name}</p>
                <p className="username">@{formData.username}</p>
                <p><span className='bold'>RANK:</span>{user.rank}</p>
            </div>
        </div>

        <div className="right">
            <p>{formData.rankMessage}</p>
        </div>
        </div>
    </>
  )
}

export default EditSample
