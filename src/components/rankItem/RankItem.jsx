import React from 'react'
import './rankItem.css'

const RankItem = ({ user }) => {

    
  return (
    <div className='rankItem'>

      <div className="ranking">
        <p>RANK: {user.rank}</p>
      </div>

      <img src={user.image} alt="" className='avi'/>

      <div className="userDeets">
        <p>{user.name}</p>
        <p>@{user.username}</p>
      </div>

      <div className="message">
        <p>{user.rankMessage}</p>
        <p className="signature">-{user.name}</p>
      </div>
    </div>
  )
}

export default RankItem
