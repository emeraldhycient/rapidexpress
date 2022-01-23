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
              data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="900"
            />
          </div>
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-9-1.png"
              alt=""
              className="partners-img"
              data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="930"
            />
          </div>{" "}
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-6.png"
              alt=""
              className="partners-img"
              data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="960"
            />
          </div>{" "}
          <div className="col-md-3">
            <img
              src="https://elemonwaves.com/wp-content/uploads/2021/04/images-55.jpeg"
              alt=""
              className="partners-img"
              data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="1000"
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Partners;
