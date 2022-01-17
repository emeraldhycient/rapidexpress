import React from "react";
import sea from "../../images/sea.jpeg";
import air from "../../images/air.jpeg";
import fast from "../../images/fast.jpeg";

function Hero() {
  return (
    <>
      <section
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sea} alt="..." className="heroimg" />
            <div className="carousel-caption">
              <p>
                Bia-courier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round hidden">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={air} alt="..." className="heroimg" />
            <div className="carousel-caption">
              <p>
                Bia-courier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round hidden">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={fast} alt="..." className="heroimg" />
            <div className="carousel-caption">
              <p>
                Bia-courier supports Industries, importers, Online Sellers,
                Startup Brands and Big Businesses to find reliable suppliers,
                get the right prices, follow up production, ensure quality and
                deliver goods to you in time. We are here at your disposal!
              </p>
              <div className="herobtn">
                <button className="btn primary-bg text-light px-4 mr-3  round">
                  <a href="/tracking" className="text-light">
                    Start Tracking
                  </a>
                </button>
                <button className="btn primary-bg text-light px-4 mr-3 round hidden">
                  <a href="/register" className="text-light">
                    Register
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </section>
    </>
  );
}

export default Hero;
