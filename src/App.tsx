import { useState } from 'react'
import planetSVG from './assets/planet.svg'
import './App.css'

import Scene from './Scene/Scene'

function App() {

  return (
    <div className="container">
      <Scene />
      {/* <img className="planet" src={planetSVG} alt="Planet" /> */}
    </div>
  )
}

export default App
