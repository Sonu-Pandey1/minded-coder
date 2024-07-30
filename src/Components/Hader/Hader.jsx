import { NavLink } from "react-router-dom";
import "../Hader/Hader.scss";
import { useEffect, useState } from "react";

function Header() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(true)
  }, [])
  
  return (
    <>
      {show ?
        <div className="top-bar text-center p-3 text-white fw-medium ">
          <span className="pe-4 ">
            Learn more with exclusive courses, quizzes, and extra practice content
          </span>
          <NavLink
            to={"/about"}
            className="btn-learn-more text-decoration-none btn btn-warning fw-medium"
          >
            Learn more <span className=" fw-bolder">→</span>
          </NavLink>
          <button onClick={() => { setShow(false) }} className="ms-2  btn-danger headerBtn">X</button>
        </div>
        : null}
    </>
  );
}

export default Header;
