import { Suspense, useState, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import svg from './assets/blob1.svg'
import { RingLoader } from 'react-spinners'

import './App.css'

import Scene from './Scene/Scene'
import * as springs from './SpringManager'

import Navigation from './Navigation'

// Pages
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Work from './Pages/Work'
import Skills from './Pages/Skills'
import Interests from './Pages/Interests'
import Connections from './Pages/Connections'

function Loading() {
  return (
    <>
      <div className="loading">
        <RingLoader color={"#82AEB1"} loading={true} size={100}/>
      </div>
    </>
  )
}

function Check(value: number, id: number) {
  return value === id || value === 0
}

function App() {
  const [state, setState] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <Suspense fallback={Loading()}>
        <Scene state={state} setState={setState} setActive={setActive} />
        {/* <img className="wave" src={waveSVG} alt="Wave" /> */}
        <div>
          {springs.Fade(state === 404, Check(state, 404) ? <NotFound state={state} /> : <></>)}
          {springs.Fade(state === 1, Check(state, 1) ? <Home state={state} /> : <></>)}
          {springs.Fade(state === 2, Check(state, 2) ? <Aboutme state={state} /> : <></>)}
          {springs.Fade(state === 3, Check(state, 3) ? <Work state={state} /> : <></>)}
          {springs.Fade(state === 4, Check(state, 4) ? <Skills state={state} /> : <></>)}
          {springs.Fade(state === 5, Check(state, 5) ? <Interests state={state} /> : <></>)}
          {springs.Fade(state === 6, Check(state, 6) ? <Connections state={state} /> : <></>)}
        </div>
        <div className="header">
          <h1 className="header-title">fabiothomas</h1>
          <Navigation active={active} />
        </div>
      </Suspense>
    </div>
  )
}

export default App
