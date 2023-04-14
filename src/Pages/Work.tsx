import './page.css'

function Page(props: {state: number}) {

  return (
    <div className="page">
      <h1 className="title-solid">Work</h1>

      <div className="line">ㅤ</div>

      <p className="text small flat">Over the years I will surely make some great things, and work with great companies. For now I don't yet have much to show</p>
      <p className="text small flat">Of course feel free to visit my Github for some more smaller projects</p>
    </div>
  )
}

export default Page