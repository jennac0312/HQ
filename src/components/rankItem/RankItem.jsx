import React from 'react'
import './rankItem.css'

const RankItem = ({ person, isMe }) => {

    
  return (
    <div className='rankItem' style={{ backgroundColor: isMe ? "#5d3c18a9" : null }}>

      <div className="ranking">
          <span className="bold rank">RANK</span>
          <br />
          <span className="rankNumber">
            {person.rank}
          </span>
      </div>

      <div className="userDeets">
        <img src={person.image} alt="" className='avi'/>
        <div className="names">
          {/* <p>{person.name}</p> */}
          <p>@{person.username}</p>
        </div>
      </div>

      <div className="message">
        <p>"{person.rankMessage}"</p>
        <p className="signature">- {person.role} {person.name}</p>
      </div>
    </div>
  )
}

export default RankItem
