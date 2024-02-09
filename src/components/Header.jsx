import React from 'react'
import logo from '../assets/logoTitle.png'
import './Header.css'

const Header = () => {
  return (
    <div id='Header'>

    <div id='logoDiv'>
        <img id='logoTitle' src={logo} alt=''></img>
        KeeRacer
    </div>
    </div>
  )
}

export default Header