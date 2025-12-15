import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container-fluid price-container">
      <div className=" price-container-main row m-0 g-0 p-0">
        <div className=" price-container-first col-12 col-lg-5 ">
          <h2 className="">Unbeatable pricing</h2>
          <p className="">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className=" price-container-second row col-12 col-lg-7 g-0 ">
          <div className=" price-box col-12 col-md-4">
            <img
              className=" img-fluid "
              src="media/pricing-eq.svg"
              alt="zerImg"
            />
            <p className="">
              Free account <br /> opening
            </p>
          </div>
          <div className="price-box col-12 col-md-4">
            <img
              className="img-fluid "
              src="media/pricing-eq.svg"
              alt="zerImg"
            />
            <p className="">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="price-box col-12 col-md-4">
            <img
              className=" img-fluid "
              src="media/intradayTrades.svg"
              alt="zerImg"
            />
            <p className="">
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
      <div className="price-anc">
        <a href="" className=" " data-showcase>
          See pricing<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Pricing;
