import { useState } from 'react'
import planet from './assets/planet.svg'
import './App.css'

function App() {

  return (
    <div className="container">
      <img className="planet" src={planet} alt="Planet" />
    </div>
  )
}

export default App
