import { useState } from 'react'
import './page.css'

function Page(props: {state: number}) {


  return (
    <div className="page">
      <h1>Coming Soon</h1>
      <p>This is where it all ends</p>
      <p>Too bad but there is more to come (I think)</p>
    </div>
  )
}

export default Page