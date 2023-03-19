import { Suspense, useState } from 'react'
import waveSVG from './assets/wave2.svg'
import { RingLoader } from 'react-spinners'
import './App.css'

import Scene from './Scene/Scene'

import Aboutme from './Pages/Aboutme'

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
        {/* <img className="wave" src={waveSVG} alt="Wave" /> */}
        <div className="page">
          <Aboutme />
        </div>
        <div className="title">
          <h1>fabiothomas</h1>
        </div>
      </Suspense>
    </div>
  )
}

export default App
