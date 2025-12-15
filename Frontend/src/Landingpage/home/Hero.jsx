import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid hero-container ">
      <div className=" hero text-center">
        <img
          src="media/homeHero.svg"
          alt="Hero-Image"
          className=" img"
        />
        <h1 >Invest in everything</h1>
        <p className="">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <a href="" className="Signbtn " data-showcase>Sign up for free</a>
      </div>
    </div>
  );
}

export default Hero;
