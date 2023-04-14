import './page.css'

function Page(props: {state: number}) {

  return (
    <div className="page">
      <h1 className="title-solid">404 Not Found</h1>

      <p className="text">I'm afraid I don't know what you're looking for</p>
    </div>
  )
}

export default Page