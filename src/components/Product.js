import React from "react";
import "../App.css";
import product from "../asserts/3.png";

const Product = () => {
  return (
    <div className="Product">
      <p className="product-para">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="product-img">
        <img src={product} alt="" />
      </div>
      <div className="product-para">
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <hr className="underline" />
      <div className="product-para">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p className="product-para">
          CHEMICALS <span style={{ backgroundColor: "red" }}>|</span> PROCESS
          POWER WATER <span style={{ backgroundColor: "red" }}>|</span> WASTE
          WATER OILS <span style={{ backgroundColor: "red" }}>|</span> GAS
          PHARMA SUGARS <span style={{ backgroundColor: "red" }}>|</span>
          DISTILLERIES PAPER
          <span style={{ backgroundColor: "red" }}>|</span> PULP MARINE
          <span style={{ backgroundColor: "red" }}>|</span> DEFENCE METAL
          <span style={{ backgroundColor: "red" }}>|</span> MINING FOOD 
          
          <span style={{ backgroundColor: "red" }}>|</span> BEVERAGE PETROCHEMICAL
          <span style={{ backgroundColor: "red" }}>|</span> REFINERIES SOLAR
          BUILDING HVAC FIRE FIGHTING AGRICULTURE
          <span style={{ backgroundColor: "red" }}>|</span> RESIDENTIAL
        </p>
      </div>
    </div>
  );
};

export default Product;
