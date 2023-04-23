import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import './page.css'
import './items.css'

function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <div className="text-collection">
          <h1 className="title-solid small slim absolute">I am</h1>
          <h1 className="title-solid">Fabio van 't Hoff</h1>
        </div>

        <div className="line">ㅤ</div>

        <div className="text-collection">
          <div className="text-container">
            <p className="text-solid stick">Software Engineer</p>
            <p className="empty"></p>
          </div>
          <div className="text-container">
            <p className="text-solid small slim">.NET Developer</p>
            <p className="empty"></p>
          </div>
          <div className="text-container">
            <p className="text-solid small slim">React Developer</p>
            <p className="empty"></p>
          </div>
        </div>

        <div className="text-container">
          <p className="empty">
            <div className="text-collection center">
              <div>
                <ChevronDoubleLeftIcon className="icon" />
                <ChevronDoubleRightIcon className="icon" />
              </div>
              <p className="flat center-text">Use the arrow keys to navigate</p>
              <p className="center-text">Or click on the icons top left</p>
            </div>
          </p>
          <p className="text-solid small center-block">Go ahead and have a look around!</p>
        </div>

      </div>
    </div>
  )
}

export default Page  