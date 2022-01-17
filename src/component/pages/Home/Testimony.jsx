import React from "react";
import home from "../../images/home.jpeg";

function Testimony() {
  return (
    <section className="mt-5  pt-3">
      <div className="text-center">
        <h4>
          <b className="primary-text">TESTIMONIALS</b>
        </h4>
        <hr className="hr bg-dark" />
      </div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={home} alt="" className="img-fluid mb-2" />
            <h4 className="primary-text">
              <b>Linda Johnson</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              This company is not like your regular courier company, it’s the
              real meaning of teamwork, a gift for us to enjoy.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <img src={home} alt="" className="img-fluid mb-2" />
            <h4 className="primary-text">
              <b>Susan Luke</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              I’ve tried a lot of courier company, all on same ground, Now you
              can say bye-bye to delayed delivery, BiaCourier is changing the
              story everyday.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/happy-female-customer-receiving-food-from-grocery-store-taking-package-from-courier-her-gate-shipping-delivery-service-concept_74855-11788.jpg"
              alt=""
              className="img-fluid mb-2"
            />
            <h4 className="primary-text">
              <b>morgan page</b>
            </h4>
            <p className="text-muted">Satisfied client</p>
            <p className="text-muted mt-2">
              BiaCourier is not just a company, it’s a team, a big one indeed,
              that consists of a network of hardworking men and women .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
