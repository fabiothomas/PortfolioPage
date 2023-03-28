import { useState } from 'react'
import './page.css'

function Page(props: {state: number}) {


  return (
    <div className="page">
      <h1 className="title">Coming Soon</h1>

      <div className="text-container">
        <p className="text">This is where it all ends</p>
        <p className="text">Too bad but there is more to come (I think)</p>
      </div>
    </div>
  )
}

export default Page