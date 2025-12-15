import React from "react";
import "./RightSection.css";

function RightSection({
  imgURL,
  title,
  titleClass,
  desc,
  LearnMore,
  LearnMoreLink,
  KiteConnect,
  KiteConnectLink
}) {
  return (
    <div className="container-fluid RightSection-container">
      <div className="row g-0 RightSection-main">
        <div className=" RightSection-first col-12 col-md-5 order-2 order-md-1">
          <h2 className={titleClass}>{title}</h2>
          <p>{desc}</p>
          <div className="row g-0">
            {LearnMore && (
              <a href={LearnMoreLink} data-showcase>
                {LearnMore}
              </a>
            )}
            {KiteConnect && <a href={KiteConnectLink}>{KiteConnect}</a>}
          </div>
        </div>
        <div className=" RightSection-second text-center col-12 col-md-7 order-1 order-md-2">
          <img className="img-fluid" src={imgURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
