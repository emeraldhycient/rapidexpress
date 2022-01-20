import React from "react";
import "./styles.css";

function Fab() {
  return (
    <div className="fab-container">
      <span className="fab-label">Contact Us</span>
      <div className="fab fab-icon-holder">
        <i className="fas fa-comment"></i>
      </div>
      <ul className="fab-options">
        <li>
          <span className="fab-label">
            <a href="https://wa.me/message/" className="text-light">
              Whatsapp
            </a>
          </span>
          <div className="fab-icon-holder">
            <a href="https://wa.me/+" className="text-light">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </li>
        <li>
          <span className="fab-label">
            <a href="mailto:support@rapidexpresscourier.com" className="text-light">
              Email
            </a>
          </span>
          <div className="fab-icon-holder">
            <a href="mailto:support@rapidexpresscourier.com" className="text-light">
              <i className="fas fa-comment-alt"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Fab;
