import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div className="container-fluid stat-container-main">
      <div className="row">
        <div className=" stat-container-first col-12 col-md-6 col-lg-6">
          <h2 className="">Trust with confidence</h2>
          <h3 className=" ">Customer-first always</h3>
          <p className=" ">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="">No spam or gimmicks</h3>
          <p className="">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h3 className="">The Zerodha universe</h3>
          <p className="">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="">Do better with money</h3>
          <p className="">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className=" stat-container-second col-12 col-md-6 col-lg-6">
          <img className="" src="media/ecosystem.png" alt="StatImg" />
          <div className="stat-container-anc">
            <a href="" className="" data-showcase>Explore our products<i className="fa-solid fa-arrow-right"></i></a>
            <a href="" className="" data-showcase>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div className="stat-press text-center">
        <img src="./media/pressLogos.png" alt="" />
      </div>
    </div>
  );
}

export default Stats;
