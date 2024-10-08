import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./Footer.scss"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <>
      {/* upperFooter section */}

      <div className="uf-session">
        <div className="container-fluid">
          <div className="row">

            <div className="col-3 text-end align-content-center">
              <img src="https://scalive.in/assets/images/shapes/line_shape_4.png" alt="" />
            </div>

            <div className="col col1 p-5 m-5 text-center align-content-center">
              <h1>Ready to kick-start your career?</h1>
              <NavLink to={"contact"}>
                <button className="btn btn-outline-dark mt-4">Join Us Now</button>
              </NavLink>
            </div>

            <div className="col-3 ps-5 align-content-center mt-5 pt-5">
              <img src="	https://scalive.in/assets/images/shapes/shape_5.png" alt="" />
            </div>
          </div>

        </div>

      </div>

      {/* Footer Section------------------>>>>> */}

      <div className="container-fluid  footerSection">
        <div className="container">
          <div className="row p-5 text-center">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">

              <h2 className="text-white">Minded Coder</h2>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae eaque voluptates enim alias vero repudiandae? Architecto soluta ipsam repellat!</p>
              <ul className="d-flex list-unstyled pt-4 justify-content-center gap-4 ">

                <a className="text-decoration-none " href="#"><li><FontAwesomeIcon className="icons" icon={faFacebook} size="lg" /></li></a>
                <a className="text-decoration-none" href="#"><li><FontAwesomeIcon className="icons" icon={faInstagram} size="lg" /></li></a>
                <a className="text-decoration-none" href="#"><li><FontAwesomeIcon className="icons" icon={faLinkedin} size="lg" /></li></a>
                <a className="text-decoration-none" href="#"><li><FontAwesomeIcon className="icons" icon={faYoutube} size="lg" /></li></a>
                <a className="text-decoration-none" href="#"><li><FontAwesomeIcon className="icons" icon={faTelegramPlane} size="lg" /></li></a>

              </ul>
            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
              <h4 className="text-white">Our Courses</h4>

              <ul className="mt-4 list-unstyled  ">
                <NavLink className={"text-decoration-none footerNav"} to={"courses/html"}>
                  <li className="mb-2">Html</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/css"}>
                  <li className="mb-2">Css</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/javascript"}>
                  <li className="mb-2">Javascript</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/react"}>
                  <li className="mb-2">React</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/redux"}>
                  <li className="mb-2">Redux</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/mnogoDb"}>
                  <li className="mb-2">MnogoDb</li>
                </NavLink>
                <NavLink className={"text-decoration-none footerNav"} to={"courses/nextjs"}>
                  <li className="mb-2">Next-js</li>
                </NavLink>





              </ul>

            </div>

            <div className="col-12 col-sm-4 col-md-4 col-lg-4">

              <h4 className="text-white">Download App Now</h4>
              <ul className=" list-unstyled mt-4">
                <li className="imgContainer ">
                  <a href="#" target="_blank"><img className="img1" src="https://scalive.in/assets/images/google_play.png" alt="playSotre" /></a>
                </li>
                <li className="imgContainer mt-3">
                  <a href="#" target="_blank"><img className="img2" src="https://scalive.in/assets/images/app_store.png" alt="AppStore" /></a>
                </li>
              </ul>

            </div>

          </div>
          <hr />
          <div className="row text-center">
            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
              <ul className="d-flex gap-4  list-unstyled">
                <li>Terms & Condition</li>
                <li>Refund Policy</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
              <p>© Copyrights 2024 MindedCoder All rights reserved.</p>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
              <p>Developed by <a className=" text-decoration-none" target="_blank" href="https://www.linkedin.com/in/sonu-pandey-9b375122a">Sonu Pandey</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
