import React from "react";
import quest from "../../images/quest.png"

function Who() {
  return (
    <section className="container">
      <div className="row pt-5">
        <div className="col-md-5 pt-5">
          <h4 className="primary-text">Who we are ?</h4>
          <h1 id="who_title">Your Global Courier Office</h1>
          <p className="text-muted">
            Rapid Express supports Industries, importers, Online Sellers,
            Startup Brands and Big Businesses to find reliable suppliers, get
            the best prices, follow up production, ensure quality and deliver
            goods to you in time. We are here at your disposal!
          </p>
        </div>
        <div className="col-md-7">
            <img src={quest} style={{width:'100%',height:'400px'}}/>
        </div>
      </div>
    </section>
  );
}

export default Who;
