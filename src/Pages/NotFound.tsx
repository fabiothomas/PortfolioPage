import './page.css'

function Page(props: {state: number}) {

  return (
    <div className="page">
      <h1 className="title">404 Not Found</h1>

      <div className="text-container">
        <p className="text">I'm afraid I don't know what you're looking for</p>
      </div>
    </div>
  )
}

export default Page