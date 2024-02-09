import React from 'react'
import './GamesTile.css'
import game1Prev from '../assets/logoTitle.png'

const GamesTile = () => {
  return (
    <div id='GamesTile'>
        <span>Available Games</span>
        <div className='gameBox'>
          <img src={game1Prev} className='gamePrevImg'></img>
          <div>Practice</div>
        </div>
    </div>
  )
}

export default GamesTile