import { useState } from 'react'
import './page.css'

function Page(props: {state: number}) {


  return (
    <div className="page">
      <h1 className="title">404 Not Found</h1>

      <div className="text-container">
        <p className="text">I'm afraid I don't know what you're looking for</p>
        <p className="text">You could check out other stuff on my page though, feel free to look around!</p>
      </div>
    </div>
  )
}

export default Page