import React from "react";

function About() {
  return (
    <section className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="text-center">
              <h4>
                <b className="primary-text">About Us</b>
              </h4>
              <hr className="hr bg-dark" />
            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="mt-5">
              <div className="d-flex mb-4">
                <i className="fa fa-rocket fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>FAST DELIVERY</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="fa fa-fingerprint fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>SECURED SERVICE</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="fa fa-globe-americas fa-3x primary-text"></i>
                <div className="ml-3">
                  <h6>
                    <b>WORLD WIDE SHIPPING</b>
                  </h6>
                  <p className="text-muted">
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src="https://jthemes.net/themes/wp/gocourier/wp-content/uploads/2016/05/about-img.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
