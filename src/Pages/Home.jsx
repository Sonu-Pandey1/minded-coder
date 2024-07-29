import "../Pages/Home.scss"
import { TypeAnimation } from "react-type-animation"

function Home() {
  return (
    <>
      <div className="home_section ">
        <div className=" main_div d-flex align-items-center">
          <div className="container  ">
            <div className="row">
              <div className="col p-4 firstCol align-content-center">
                <h1>Welcome to
                  <TypeAnimation
                    sequence={[
                      ' MindedCoder',
                    ]}
                    speed={50}
                    style={{
                      height: '100%',
                      width: '100%',
                      // display: 'block',
                      color: 'orange'
                    }}
                    repeat={1}
                    cursor={false}
                  />
                </h1>
                <h3>The Easiest Way to Learn new technologies</h3>
                <h5>Like
                  <TypeAnimation
                    sequence={[
                      ' WEB DEVELOPMENT',
                      1000,
                      ' MERN DEVELOPMENT',
                      1000,
                      ' FULL-STACK DEVELOPMENT',
                      1000,
                      ' HTML',
                      1000,
                      ' CSS',
                      1000,
                      ' BOOTSTRAP',
                      1000,
                      ' JAVASCRIPT',
                      1000,
                      ' REACT-JS',
                      1000,
                      ' REDUX-TOOLKIT',
                      1000,
                      ' NEXT-JS',
                      1000,
                      ' TAILWIND-CSS',
                      1000,
                      ' NODE-JS',
                      1000,
                      ' EXPRESS',
                      1000,
                    ]}

                    speed={50}
                    style={{
                      height: '100%',
                      width: '100%',
                      // display: 'block',
                      fontSize: "1.4rem",
                      color: '#ff7579'
                      // border: 'solid 10px rgb(255,0,0)',
                    }}
                    // style={{ fontSize: '1.5rem' }}
                    repeat={Infinity}
                  />
                </h5>
                <p>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                <div>
                  <button className="btn btn-outline-dark">Courses</button>
                  <button className=" ms-4 btn btn-outline-warning">Tutorials</button>
                </div>
              </div>
              <div className="col pt-5 align-content-center">
                <div className="imagesWrapper">
                  <div className="imgWrapper orange " id="person1">
                    <img className="imgorange" src="https://scalive.in/assets/images/banner/banner_img_11.png	" alt="avtar1" />
                  </div>
                  <div className="imgWrapper blue ">
                    <img className="" src="https://scalive.in/assets/images/banner/banner_img_22.png" alt="avtar2" />
                  </div>
                  <div className="imgWrapper pink">
                    <img src="https://scalive.in/assets/images/banner/banner_img_33.png" alt="avtar3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fetures section */}

      <div className="fetures_section m-4">
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col p-3">
              <h1 className="">Get Everything You Need !</h1>
            </div>
            <div className="col m-3 border p-4 align-content-center">
              <div className="row">
                <div className="col col-4 text-center">
                  <img src="https://scalive.in/assets/images/icons/icon_career.png" alt="img" />
                </div>
                <div className="col col-8">
                  <h4>Build A Career</h4>
                  <p>Everything you need to land job</p>
                </div>
              </div>
            </div>
            <div className="col m-3 border p-4 align-content-center">
              <div className="row">
                <div className="col col-4 text-center">
                  <img src="https://scalive.in/assets/images/icons/icon_skills.png" alt="img" />
                </div>
                <div className="col col-8">
                  <h4>Explore Skills</h4>
                  <p>See how varies skills you have</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col m-3 col-4 border p-4 ">
              <div className="row">
                <div className="col col-4 text-center">
                  <img src="https://scalive.in/assets/images/icons/icon_subjects.png" alt="img" />
                </div>
                <div className="col col-8">
                  <h4>Gain A Skill</h4>
                  <p>Focus on what`s you need</p>
                </div>
              </div>
            </div>
            <div className="col m-3 col-4 border p-4">
              <div className="row">
                <div className="col col-4 text-center">
                  <img src="	https://scalive.in/assets/images/icons/icon_knowledge.png" alt="img" />
                </div>
                <div className="col col-8">
                  <h4>Share knowledge</h4>
                  <p>Discuss and get clear knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Home
