import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand ml-3" href="/">
        <h3 className="primary-text">
          <b>BIACOURIER</b>
        </h3>
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
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/admin/dashboard">
              <h6>
                <i className="fa fa-home mr-1"></i>
                Home
              </h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/admin/dashboard/payment">
              <h6>
                <i className="fa fa-columns mr-1"></i>
                Payments
              </h6>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/admin/dashboard/users">
              <h6>
                <i className="fa fa-users mr-1"></i>
                Users
              </h6>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
