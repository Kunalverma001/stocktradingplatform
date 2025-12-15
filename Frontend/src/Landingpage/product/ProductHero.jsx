import React from "react";
import "./ProductHero.css";

function ProductHero() {
  return (
    <div className="container-fluid g-0 product-hero-container ">
      <div className=" product-Hero-main row g-0">
        <h1>Zerodha Products</h1>
        <p className="sub-heading">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="" className="" data-showcase>
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProductHero;
