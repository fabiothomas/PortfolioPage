import { useState } from 'react'
import planetSVG from './assets/planet.svg'
import waveSVG from './assets/wave2.svg'
import './App.css'

import Scene from './Scene/Scene'

function App() {

  return (
    <div className="container">
      <Scene />
      <img className="wave" src={waveSVG} alt="Wave" />
      {/* <img className="planet" src={planetSVG} alt="Planet" /> */}
    </div>
  )
}

export default App
