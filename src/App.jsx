import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import GamesTile from './components/GamesTile'

function App() {

  return (
    <>
      <Header/>
      <div id='midBody'>
        <GamesTile/>
      </div>
    </>
  )
}

export default App
