import { Suspense, useState, useEffect } from 'react'
import waveSVG from './assets/wave2.svg'
import { RingLoader } from 'react-spinners'
import './App.css'

import Scene from './Scene/Scene'

// Pages
import NotFound from './Pages/NotFound'
import Aboutme from './Pages/Aboutme'
import Education from './Pages/Education'
import Work from './Pages/Work'

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
  const [state, setState] = useState(0);

  return (
    <div className="container">
      <Suspense fallback={Loading()}>
        <Scene state={state} setState={setState} />
        {/* <img className="wave" src={waveSVG} alt="Wave" /> */}
        <div>
          {state === 404 && <NotFound />}
          {state === 1 && <Aboutme />}
          {state === 2 && <Education />}
          {state === 3 && <Work />}
        </div>
        <div className="title">
          <h1>fabiothomas</h1>
        </div>
      </Suspense>
    </div>
  )
}

export default App
