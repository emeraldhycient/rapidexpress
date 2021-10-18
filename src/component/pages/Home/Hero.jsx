import React from "react";

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
            <img
              src="https://media.istockphoto.com/photos/aerial-view-of-a-container-cargo-ship-sailing-into-bad-weather-picture-id1280111270?b=1&k=20&m=1280111270&s=170667a&w=0&h=IN6QCSHpnGZ3BMXyzPUHiQmnSLXyTiUxV16JSpyrKb0="
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                Use data attributes to easily control the position of the
                carousel. data-slide accepts the keywords prev or next, which
                alters the slide position relative to its current position.
                Alternatively, use data-slide-to to pass a raw slide index to
                the carousel data-slide-to="2", which shifts the slide position
                to a particular index beginning with 0.
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
            <img
              src="https://media.istockphoto.com/photos/generic-cargo-container-ship-at-sea-picture-id591986620?b=1&k=20&m=591986620&s=170667a&w=0&h=VKDb8G_i9pCi1HTOEPda4cD-W_XeHbGJCGoI7gLbk6g="
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                Use data attributes to easily control the position of the
                carousel. data-slide accepts the keywords prev or next, which
                alters the slide position relative to its current position.
                Alternatively, use data-slide-to to pass a raw slide index to
                the carousel data-slide-to="2", which shifts the slide position
                to a particular index beginning with 0.
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
            <img
              src="https://media.istockphoto.com/photos/container-ship-in-export-and-import-international-shipping-cargo-picture-id1266534217?b=1&k=20&m=1266534217&s=170667a&w=0&h=qnN8_PH1yh7UwXN3BBtPnEptOF8Vc5uUL40r9YOdBFY="
              alt="..."
              className="heroimg"
            />
            <div className="carousel-caption">
              <p>
                Use data attributes to easily control the position of the
                carousel. data-slide accepts the keywords prev or next, which
                alters the slide position relative to its current position.
                Alternatively, use data-slide-to to pass a raw slide index to
                the carousel data-slide-to="2", which shifts the slide position
                to a particular index beginning with 0.
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
