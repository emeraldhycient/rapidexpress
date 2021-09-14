import React from "react";
import logo from "../images/DSCRIER DESIGN PNG PURPLE.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ml-3" href="#">
        <img src={logo} alt="" width="100px" height="50px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <h6>Contact Us</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <h6>Packages</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <h6>Knowledge Base</h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <h6>Terms & Conditions</h6>
            </a>
          </li>
        </ul>
        <div className="">
          <button className="btn primary-bg text-light px-4 mr-3">Login</button>
          <button className="btn primary-bg text-light px-4 mr-3">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
