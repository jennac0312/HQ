import React from 'react'
import './rankItem.css'

const RankItem = ({ user }) => {

    
  return (
    <div className='rankItem'>

      <div className="ranking">
        <p>RANK: {user.rank}</p>
      </div>

      <img src="" alt="" className='avi'/>

      <div className="userDeets">
        <p>{user.name}</p>
        <p>@{user.username}</p>
      </div>

      <div className="message">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatem ut nesciunt qui.</p>
      </div>
    </div>
  )
}

export default RankItem
