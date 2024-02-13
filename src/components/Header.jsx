import React from 'react'
import logo from '../assets/logoTitle.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='Header'>

    <div id='logoDiv'>
    <Link to={'/'}>
        <img id='logoTitle' src={logo} alt=''></img>
    </Link>
        KeeRacer
    </div>
    </div>
  )
}

export default Header