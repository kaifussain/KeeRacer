import React, { useState } from 'react'
import './Home.css'
import game1Prev from '../assets/logoTitle.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const GamesTile = () => {
  return (
    <>
      <Header/>
      <div id='GamesTile'>

          <span>Available Games</span>

          <Link 
            to="/practice-page" 
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='gameBox pop'>
            <img src={game1Prev} className='gamePrevImg'></img>
            <div>Practice</div>
          </div>
          </Link>

      </div>
    </>
  )
}

export default GamesTile