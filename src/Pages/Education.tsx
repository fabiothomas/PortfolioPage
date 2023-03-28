import { useState } from 'react'
import './page.css'

function Page(props: {state: number}) {


  return (
    <div className="page">
      <h1 className="title">Education</h1>

      <div className="text-container">
        <p className="text">W.I.P.</p>
        <p className="text">I don't know what to tell you</p>
      </div>
    </div>
  )
}

export default Page