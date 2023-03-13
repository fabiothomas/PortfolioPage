import { Suspense, useState } from 'react'
import waveSVG from './assets/wave2.svg'
import { RingLoader } from 'react-spinners'
import './App.css'

import Scene from './Scene/Scene'

function Loading() {
  return (
    <>
      <div className="loading">
        <RingLoader color={"#82AEB1"} loading={true} size={100}/>
      </div>
    </>
  )
}

function App() {

  return (
    <div className="container">
      <Suspense fallback={Loading()}>
        <Scene />
        <img className="wave" src={waveSVG} alt="Wave" />
      </Suspense>
    </div>
  )
}

export default App
