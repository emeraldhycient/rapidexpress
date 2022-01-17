import React from "react";

function Partners() {
  return (
    <section className="mt-5  pt-3">
      <div className="text-center">
        <h4>
          <b>OUR PARTNERS</b>
        </h4>
        <hr className="hr" />
      </div>
      <div className="container">
        <div className="" id="partners">
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-34.jpeg"
              alt=""
              className="partners-img"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-9-1.png"
              alt=""
              className="partners-img"
            />
          </div>{" "}
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-6.png"
              alt=""
              className="partners-img"
            />
          </div>{" "}
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-55.jpeg"
              alt=""
              className="partners-img"
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Partners;
