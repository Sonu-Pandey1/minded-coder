import { NavLink } from "react-router-dom";
import "../Hader/Hader.scss";

function Header() {
  return (
    <>
      <div className="top-bar text-center p-2 text-white fw-medium ">
        <span className="pe-4 ">
          Learn more with exclusive courses, quizzes, and extra practice content
        </span>
        <NavLink
          to={"/about"}
          className="btn-learn-more text-decoration-none btn btn-warning fw-medium"
        >
          Learn more <span className=" fw-bolder">→</span>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
