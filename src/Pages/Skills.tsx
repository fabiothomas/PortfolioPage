import './page.css'

import logo_net from '../assets/logo/logo_net.svg'
import logo_cs from '../assets/logo/logo_cs.svg'
import logo_py from '../assets/logo/logo_py.svg'
import logo_react from '../assets/logo/logo_react.svg'
import logo_ts from '../assets/logo/logo_ts.svg'

import logo_uml from '../assets/logo/logo_uml.svg'
import logo_git from '../assets/logo/logo_git.svg'
import logo_scrum from '../assets/logo/logo_scrum.svg'

import logo_unity from '../assets/logo/logo_unity.svg'
import logo_vsc from '../assets/logo/logo_vsc.svg'
import logo_ps from '../assets/logo/logo_ps.svg'
import logo_ai from '../assets/logo/logo_ai.svg'
import logo_psql from '../assets/logo/logo_psql.svg'


function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <h1 className="title-solid">Skills</h1>

        <div className="line">ㅤ</div>

        <p className="text flat">Software Development</p>
        <div className="text-container">
          <a href="https://dotnet.microsoft.com/" target="_blank" className="logo"><img className="logo" src={logo_net} alt="logo_net"/></a>
          <a href="https://learn.microsoft.com/dotnet/csharp/" target="_blank" className="logo"><img className="logo" src={logo_cs} alt="logo_cs"/></a>
          <a href="https://www.python.org/" target="_blank" className="logo"><img className="logo" src={logo_py} alt="logo_py"/></a>
          <a href="https://react.dev/" target="_blank" className="logo"><img className="logo" src={logo_react} alt="logo_react"/></a>
          <a href="https://www.typescriptlang.org/" target="_blank" className="logo"><img className="logo" src={logo_ts} alt="logo_ts"/></a>
        </div>

        <p className="text flat">Project Managment</p>
        <div className="text-container">
          <a href="https://github.com/" target="_blank" className="logo"><img className="logo" src={logo_git} alt="logo_git"/></a>
          <a href="https://www.uml.org/" target="_blank" className="logo"><img className="logo" src={logo_uml} alt="logo_uml"/></a>
          <a href="https://www.scrum.org/" target="_blank" className="logo"><img className="logo" src={logo_scrum} alt="logo_scrum"/></a>
        </div>

        <p className="text flat">Tools</p>
        <div className="text-container">
          <a href="https://unity.com/" target="_blank" className="logo"><img className="logo" src={logo_unity} alt="logo_unity"/></a>
          <a href="https://code.visualstudio.com/" target="_blank" className="logo"><img className="logo" src={logo_vsc} alt="logo_vsc"/></a>
          <a href="https://www.adobe.com/products/photoshop.html" target="_blank" className="logo"><img className="logo" src={logo_ps} alt="logo_ps"/></a>
          <a href="https://www.adobe.com/products/illustrator.html" target="_blank" className="logo"><img className="logo" src={logo_ai} alt="logo_ai"/></a>
          <a href="https://www.postgresql.org/" target="_blank" className="logo"><img className="logo" src={logo_psql} alt="logo_psql"/></a>
        </div>


      </div>
    </div>
  )
}

export default Page  