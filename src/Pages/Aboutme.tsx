import { useState, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
import './page.css'
import './items.css'
import blob1 from '../assets/blob1.svg'
import blob2 from '../assets/blob2.svg'

import * as springs from '../SpringManager'

function Page(props: {state: number}) {

  return (
    <div>
      {/* {springs.Size(props.state === 1, <img className="blob2" src={blob2} alt="Wave" />, 2, "blob2")}
      {springs.Size(props.state === 1, <img className="blob" src={blob1} alt="Wave" />, 1, "blob")} */}
      <div className="page">
          <h1 className="title">About Me</h1>

        <div className="text-container">
          <p className="aboutme-text1">Hello my name is fabiothomas and i am absolutely honered that you're here lol</p>
          <p className="aboutme-text2">ok so have a look around i guess</p>
        </div>
      </div>
    </div>
  )
}

export default Page