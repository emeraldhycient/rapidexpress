import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Testimony from "./Home/Testimony";
import Map from "../common/Map/Map";
import axios from "axios";

function Tracking() {
  useEffect(() => {
    document.title = "tracking your goods and percel";
  }, []);

  const [tracking, settracking] = useState("");
  const [booking, setbooking] = useState("");

  const handleTracking = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("tracking", tracking);
    axios
      .post("https://www.api.biacourier.com/admin/track.php", formdata)
      .then((res) => {
        if (res.data.status === "success") {
          setbooking(res.data.data);
        }
        console.log(res);
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };
  return (
    <>
      <main>
        <Header />
        <div className="trackbg">
          <div className="track-input-container text-center">
            <div className="container">
              <div className="h4 text-muted py-4">
                <b>Follow Your Goods Everywhere from your home</b>
              </div>
              <center>
                <form
                  action=""
                  className="form-goup w-100"
                  onSubmit={handleTracking}
                >
                  <div
                    className="holder col-md-6 d-flex justify-content-around bg-light p-2"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    <input
                      type="text"
                      className="form-control border-0"
                      value={tracking}
                      onChange={(e) => settracking(e.target.value)}
                      placeholder="tracking number here .."
                    />
                    <button
                      type="submit"
                      className="btn px-3 py-2 bg-dark primary-text"
                    >
                      Track
                    </button>
                  </div>
                </form>
              </center>
            </div>
          </div>
        </div>
      </main>
      {booking ? (
        <div id="map" className="mt-5" style={{ marginBottom: "700px" }}>
          <div className="col-md-6 m-auto">
            <Map />
          </div>
          <div className="col-md-6 m-auto py-2 bg-light wow slideInLeft">
            <h3
              className="text-dark mb-3 mt-3 ml-3"
              style={{ fontWeight: "bolder" }}
            >
              Your Order
            </h3>
            <div className="d-flex justify-content-between mb-3 ml-3">
              <div className="">
                <h6 className="primary-text">
                  paymentstatus: {booking.paymentstatus}
                </h6>
                <h6>
                  <small>Tracking id : {booking.tracking}</small>
                </h6>
              </div>
              <div className="">
                <h6>Order Date :</h6>
                <h6>
                  <small className="primary-text">{booking.bookingdate}</small>
                </h6>
              </div>
            </div>
            <h6 className="text-dark mb-3 mt-3 ml-3">{booking.addresses}</h6>
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div className="lines bg-danger"></div>
                  <div className="circled shadow bg-danger"></div>
                  <div className="lines bg-danger"></div>
                </div>
                <div className="text-dark">
                  Order received and is being processed now .
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail1 ? "lines bg-danger" : " lines"}
                  ></div>
                  <div
                    className={
                      booking.detail1
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail1 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail1}</div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail2 ? "lines bg-danger" : "lines"}
                  ></div>
                  <div
                    className={
                      booking.detail2
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail2 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail2}</div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail3 ? "lines bg-danger" : "lines"}
                  ></div>
                  <div
                    className={
                      booking.detail3
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail3 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail3}</div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail4 ? "lines bg-danger" : "lines"}
                  ></div>
                  <div
                    className={
                      booking.detail4
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail4 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail4}</div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail5 ? "lines bg-danger" : "lines"}
                  ></div>
                  <div
                    className={
                      booking.detail5
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail5 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail5}</div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="lines-container">
                  <div
                    className={booking.detail6 ? "lines bg-danger" : "lines"}
                  ></div>
                  <div
                    className={
                      booking.detail6
                        ? "circled shadow bg-danger"
                        : "circled shadow"
                    }
                  ></div>
                  <div
                    className={booking.detail6 ? "lines bg-danger" : "lines"}
                  ></div>
                </div>
                <div className="text-dark">{booking.detail6}</div>
              </div>
            </div>

            <h6 className="text-dark mb-3 mt-3 ml-3">{booking.locations}</h6>

            <div className="mt-3">
              <h5 className="text-dark ml-3 mb-2">Receiver Details</h5>
              <div className="d-flex justify-content-between mb-3 ml-3">
                <h6>
                  <small>Name</small>
                </h6>
                <h6>
                  <small className="primary-text">{booking.receivername}</small>
                </h6>
              </div>
              <div className="d-flex justify-content-between mb-3 ml-3">
                <h6>
                  <small>Address</small>
                </h6>
                <h6>
                  <small className="primary-text">
                    {booking.receiveraddress}
                  </small>
                </h6>
              </div>

              <div className="d-flex justify-content-between mb-3 ml-3">
                <h6>
                  <small>postal code</small>
                </h6>
                <h6>
                  <small className="primary-text">
                    {booking.receiverpostal}
                  </small>
                </h6>
              </div>
              <h6>
                <small className="primary-text">{booking.instructions}</small>
              </h6>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <br />
      <br />
      <br />
      <Testimony />
      <Footer />
    </>
  );
}

export default Tracking;
