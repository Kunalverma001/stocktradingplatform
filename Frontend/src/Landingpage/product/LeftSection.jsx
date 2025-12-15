import React from "react";
import "./LeftSection.css";

function LeftSection({
  rowClass,
  imgURL,
  imgClass,
  title,
  titleClass,
  desc,
  TryDemo,
  LearnMore,
  Coin,
  TryDemoLink,
  LearnMoreLink,
  CoinLink,
  PlaystoreImg,
  AppstoreImg,
  PlaystoreLink,
  AppstoreLink,
  storeImgClass,
}) {
  return (
    <div className="container-fluid leftSection-container">
      <div className="row g-0 leftSection-main">
        <div className=" col-12 col-md-7 text-center leftSection-first">
          <img className="img-fluid" src={imgURL} alt="" />
        </div>
        <div className=" col-12 col-md-5 leftSection-second">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className=" row g-0 ">
            {TryDemo && (
              <div className=" col-12 col-md-6">
                <a href={TryDemoLink} className="try-demo" data-showcase>
                  {TryDemo}
                </a>
              </div>
            )}
            {LearnMore && (
              <div className=" col-12 col-md-6">
                <a href={LearnMoreLink} data-showcase>
                  {LearnMore}
                </a>
              </div>
            )}
            {Coin && (
              <div className=" col-12 col-md-6">
                <a href={CoinLink} data-showcase>
                  {Coin}
                </a>
              </div>
            )}
          </div>
          <div className=" leftSection-store-links ">
            <a href={PlaystoreLink} data-showcase>
              <img className="img-fluid" src={PlaystoreImg} alt="" />
            </a>
            <a href={AppstoreLink} data-showcase>
              <img className="img-fluid" src={AppstoreImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
