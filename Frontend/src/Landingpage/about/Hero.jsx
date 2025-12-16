import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className=" container-fluid hero-main ">
      <div className="row hero-heading">
        <h2 className="">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="about-history">
        <div className=" row mini-container">
          <div className=" col-12 col-md-6">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className=" col-12 col-md-6">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="" data-showcase>Rainmatter</a>, our fintech fund and incubator, has
              invested in several fintech startups with the goal of growing the
              Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our <a href="" data-showcase>blog</a> or see what the
              media is <a href="" data-showcase>saying about us</a> or learn more about our
              business and product <a href="" data-showcase>philosophies</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
