import './page.css'

function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <h1 className="title-solid">Interests</h1>

        <div className="line">ㅤ</div>

        <div className="text-container">
          <p className="text">To be added</p>
          <p className="empty"></p>
        </div>

        <div className="text-container">
          <p className="empty"></p>
          <p className="text">...</p>
        </div>

      </div>
    </div>
  )
}

export default Page  