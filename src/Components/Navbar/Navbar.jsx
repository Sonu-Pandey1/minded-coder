// import { NavLink } from "react-router-dom";
// import "../Navbar/Navbar.scss";

// function Navbar() {
//     return (
//         <>
//             <nav className="navbar sticky-top p-3 navbar-expand-lg navbar-light ">
//                 <div className="container ">
//                     <NavLink to={"/"} className="nav-link">
//                         <p className="title">Minded Coder</p>
//                     </NavLink>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div
//                         className="collapse navbar-collapse justify-content-evenly"
//                         id="navbarSupportedContent"
//                     >
//                         <ul className="navbar-nav p-1 mb-lg-0 gap-3 ">
//                             <li className="nav-item  ">
//                                 <NavLink to={"/"} className="nav-link home">
//                                     Home
//                                 </NavLink>
//                             </li>

//                             <li className="nav-item">
//                                 <NavLink to={"/courses"} className="nav-link courses">
//                                     Courses
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to={"/tutorial"} className="nav-link">
//                                     Tutorial
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to={"/upcomingbatches"} className="nav-link upcomingbatches">
//                                     UpcomingBatches
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to={"/about"} className="nav-link">
//                                     AboutUs
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to={"/blog"} className="nav-link">
//                                     Blog
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to={"/contact"} className="nav-link">
//                                     Contact
//                                 </NavLink>
//                             </li>
//                         </ul>
//                         <div>
//                             <ul className="d-flex ms-auto  mb-0">
//                                 <li className="me-2 list-unstyled">
//                                     <NavLink to={"/login"}><button className="btn btn-outline-primary">Login</button></NavLink>
//                                 </li>
//                                 <li className="list-unstyled">
//                                 <NavLink to={"/signup"}><button className="btn btn-outline-primary">Signup</button></NavLink>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;


import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";

function Navbar() {
    return (
        <>
            <nav className="navbar sticky-top p-3 navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand">
                        <p className="title">Minded Coder</p>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/courses"} className="nav-link courses">
                                    Courses
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/tutorial"} className="nav-link">
                                    Tutorial
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/upcomingbatches"} className="nav-link upcomingbatches">
                                    UpcomingBatches
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link">
                                    AboutUs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/blog"} className="nav-link">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="d-flex ms-lg-3 mb-2 mb-lg-0 gap-2">
                            <li className="nav-item list-unstyled">
                                <NavLink to={"/login"}>
                                    <button className="btn btn-outline-primary">Login</button>
                                </NavLink>
                            </li>
                            <li className="nav-item list-unstyled">
                                <NavLink to={"/signup"}>
                                    <button className="btn btn-outline-primary">Signup</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
