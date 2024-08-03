import { useState } from "react"
import "./Courses.scss"
import Overview from "../Pages/Overview"
import QA from "../Pages/QA"

function Courses() {

  const [iframeSrc, SetIframeSrc] = useState("https://www.youtube.com/embed/ER9SspLe4Hg?si=NmeyWOA-qf1pIPg8");
  const [currentSession, setCurrentSession] = useState("overview")

  const renderSession = () => {
    switch (currentSession) {

      case "overview":
        return <Overview />

      case "QA":
        return <QA />

      default:
        return <Overview />

    }
  }

  return (
    <>
      <div className="coursesContainer">
        <div className="container-fluid">
          <div className="row">

            <div className="col-8 videoContainer"><iframe id={"fname"} className=" videoFrame rounded-4" width="100%" height="100%" src={`${iframeSrc}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe></div>

            <div className="col-4 sidebarContainer">

              <div className="row">
                <div className="col-3 col1 bg-dark p-2">
                  <img src="https://admin.ducatindia.com/tutorial/technology/1712151078432javascript.png" alt="logo" />
                </div>
                <div className="col-9 col2 bg-dark p-2 text-white">
                  <h1 className="ps-5 pt-1">Javscript</h1>
                </div>
              </div>

              <ul className="sidebarItems list-unstyled">
                <li className="ulHanding p-4 fw-bold text-bg-white">Topics</li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/ER9SspLe4Hg?si=NmeyWOA-qf1pIPg8") }} target="fname" >Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/Q4p8vRQX8uY?si=QAPMa0-_HAiaJGMm") }} >Variables in JavaScript | JavaScript Tutorial in Hindi #2</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/Icev9Oxf0WA?si=E_yd-cvGgAY1KNb-") }} >const, let and var in JavaScript | JavaScript Tutorial in Hindi #3</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/qpU3WIqRz9I?si=rDPcd5yq5gpURQYy") }} >Primitives and Objects in JavaScript | JavaScript Tutorial in Hindi #4</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/vA-AAeqkpxM?si=fyoXAUTooO_4DQ9Q") }} ></a>JavaScript Chapter 1 - Practice Set | JavaScript Tutorial in Hindi #5</li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/lsV8JQgSW1s?si=yGUaJOUyzlchwLc2") }} >JavaScript Operators and Expressions | JavaScript Tutorial in Hindi #6</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/s5Lu4QTjeL0?si=ZzNMRnqiCh6EnOtf") }} >Conditional expressions in JavaScript | JavaScript Tutorial in Hindi #7</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/W77qmqrhCcA?si=VNAz7Ml89vx3FIDg") }} >JavaScript Chapter 2 - Practice Set on Operators and Conditionals | JavaScript Tutorial in Hindi #8</a></li>

                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/XKyyM1VWtUE?si=FNKgdo0SXIKU_LZ6") }} >For Loops in JavaScript | JavaScript Tutorial in Hindi #9</a></li>
                
                <li className="sidebarItem  "><a  onClick={() => { SetIframeSrc("https://www.youtube.com/embed/drEjyBSu33w?si=-_vXMnoVMnCxFB9Z") }} >While Loops in JavaScript | JavaScript Tutorial in Hindi #10</a></li>
              </ul>
            </div>

          </div>

          <div className="row">
            <div className="col p-2 ">
              <nav className="coursesNav">
                <div className="btnsContainer ">
                  <span className={`btns  ${currentSession === "overview" ? "active" : ""}`} onClick={() => { setCurrentSession("overview") }}>Overview</span>
                  <span className={`btns ms-4 ${currentSession === "QA" ? "active" : ""}`} onClick={() => { setCurrentSession("QA") }}>Q&A</span>
                </div>
                {/* {console.log(currentSession)} */}
                <div className="NavPages">
                  {renderSession()}
                </div>
              </nav>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Courses
