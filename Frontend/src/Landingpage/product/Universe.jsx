import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container-fluid Universe-container">
      <div className="Universe-subheading row g-0 text-center">
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" data-showcase>
            Zerodha.tech
          </a>{" "}
          "blog".
        </p>
      </div>
      <div className="row Universe-second-heading g-0 text-center">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row Universe-partner g-0 text-center ">
        <div className="col-12 col-md-4">
          <img
            className="img-fluid"
            src="./media/zerodhaFundhouse.png"
            alt=""
          />
          <span>
            <p>
              Our asset management venture
              <br /> that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </span>
        </div>
        <div className=" col-12 col-md-4">
          <img
            className="img-fluid sensibull"
            src="./media/sensibullLogo.svg"
            alt=""
          />
          <span>
            <p>
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </span>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-fluid" src="./media/tijori.svg" alt="" />
          <span>
            <p>
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </span>
        </div>
      </div>
      <div className="row Universe-partner g-0 text-center">
        <div className="col-12 col-md-4">
          <img className="img-fluid" src="./media/streakLogo.png" alt="" />
          <span>
            <p>
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </span>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-fluid" src="./media/smallcaseLogo.png" alt="" />
          <span>
            <p>
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </span>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-fluid" src="./media/dittoLogo.png" alt="" />
          <span>
            <p>
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </span>
        </div>
      </div>
      <div className=" Universe-btn text-center">
        <button className="Signbtn">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
