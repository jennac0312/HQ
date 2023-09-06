import React from 'react'
import './rankItem.css'

const RankItem = ({ person, isMe }) => {

    
  return (
    <div className='rankItem' style={{ backgroundColor: isMe ? "#5d3c18a9" : null }}>

      <div className="ranking">
        <p>RANK: {person.rank}</p>
      </div>

      <img src={person.image} alt="" className='avi'/>

      <div className="userDeets">
        <p>{person.name}</p>
        <p>@{person.username}</p>
      </div>

      <div className="message">
        <p>{person.rankMessage}</p>
        <p className="signature">-{person.name}</p>
      </div>
    </div>
  )
}

export default RankItem
