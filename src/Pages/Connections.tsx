import './page.css'

import logo_git from '../assets/logo/logo_git.svg'
import logo_in from '../assets/logo/logo_in.svg'

function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <h1 className="title-solid">Connections</h1>

        <div className="line">ㅤ</div>

        <div className="text-container">
          <a href="https://github.com/fabiothomas" target="_blank" className="logo"><img className="logo" src={logo_git} alt="logo_git"/></a>
          <a href="https://www.linkedin.com/in/fabio-van-t-hoff-7593a3232/" target="_blank" className="logo"><img className="logo" src={logo_in} alt="logo_in"/></a>
        </div>

      </div>
    </div>
  )
}

export default Page  