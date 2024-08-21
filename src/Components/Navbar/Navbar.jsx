import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";
import { useState } from "react";

function Navbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    const handleNavLinkClick = () => {
        if (!isNavbarCollapsed) {
            setIsNavbarCollapsed(true);
        }
    };

    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    return (
        <>
            <nav className="navbar sticky-top p-3 navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand" onClick={handleNavLinkClick}>
                        <p className="title">Minded Coder</p>
                    </NavLink>
                    <button
                        className={`navbar-toggler ${!isNavbarCollapsed ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!isNavbarCollapsed}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-end ${isNavbarCollapsed ? '' : 'show'}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link home" onClick={handleNavLinkClick}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/courses"} className="nav-link courses" onClick={handleNavLinkClick}>
                                    Courses
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/tutorial"} className="nav-link" onClick={handleNavLinkClick}>
                                    Tutorial
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/upcomingbatches"} className="nav-link upcomingbatches" onClick={handleNavLinkClick}>
                                    UpcomingBatches
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about"} className="nav-link" onClick={handleNavLinkClick}>
                                    AboutUs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/blog"} className="nav-link" onClick={handleNavLinkClick}>
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/contact"} className="nav-link" onClick={handleNavLinkClick}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="d-flex justify-content-center ms-lg-3 mb-2 mb-lg-0 gap-2">
                            <li className="nav-item list-unstyled">
                                <NavLink to={"/login"} onClick={handleNavLinkClick}>
                                    <button className="btn btn-outline-primary">Login</button>
                                </NavLink>
                            </li>
                            <li className="nav-item list-unstyled">
                                <NavLink to={"/signup"} onClick={handleNavLinkClick}>
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
