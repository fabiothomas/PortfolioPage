import './page.css'
import { CommandLineIcon, AcademicCapIcon, CpuChipIcon, DeviceTabletIcon } from '@heroicons/react/24/solid'

function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <h1 className="title-solid">Areas of Interest</h1>

        <div className="line">ㅤ</div>

        <div className="text-container">
          <div className="text-collection">
            <CommandLineIcon color="#1f202e" className="logo"/>
            <p className="text">Software Development</p>
          </div>
          <p className="empty"></p>
        </div>

        <div className="text-container">
          <p className="empty"></p>
          <div className="text-collection">
            <AcademicCapIcon color="#1f202e" className="logo"/>
            <p className="text">Machine Learning</p>
          </div>
        </div>

        <div className="text-container">
          <div className="text-collection">
            <DeviceTabletIcon color="#1f202e" className="logo"/>
            <p className="text">3D Video Game Development</p>
          </div>
          <p className="empty"></p>
        </div>

        <div className="text-container">
          <p className="empty"></p>
          <div className="text-collection">
            <CpuChipIcon color="#1f202e" className="logo"/>
            <p className="text">Algorithms</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page  