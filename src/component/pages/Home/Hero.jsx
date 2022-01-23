import React from "react";
import "./styles.css";

function Hero() {
  return (
    <>
      <section id="hero">
        <div id="blur">
          <div className="col-md-7" style={{textAlign:"center"}}>
          <p id="title" data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="1000">Expert Courier Agency, Bridging the Gap </p>
          <p style={{color:'#F4F5F9'}}>Save your time and money, making moving goods faster and easier</p>
          <button className="btn btn-lg primary-bg text-light px-4 round mt-3" data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <a href="/tracking" className="text-light" style={{textDecoration:'none'}}>
              Start Tracking
            </a>
          </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
