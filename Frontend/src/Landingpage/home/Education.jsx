import React from "react";
import "./Eduction.css";

function Education() {
  return (
    <div className="container-fluid education-main  ">
      <div className=" row education-container-main ">
        <div className="eductaion-first text-center col-12 col-md-6 ">
          <img className=" img-fluid" src="media/education.svg" alt="eduImg" />
        </div>
        <div className=" education-second col-12 col-md-6">
          <h2>Free and open market education</h2>
          <div className="education-second-one">
            <p className="">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="" data-showcase>
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="education-second-two">
            <p className="">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="" data-showcase>
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
