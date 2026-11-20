import React from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({theme,setTheme}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
          </a>

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


          <div className="navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ourwork">
                  OUR-WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT-US
                </a>
              </li>
            </ul>

            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

            <div className="btn btn-primary">
                <a href="#contact" className="nav-link">
                    connect <img src={assets.arrow_icon} className="ms-2" alt="" />
                </a>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
