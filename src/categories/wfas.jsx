import React from "react";
import girl from "../assets/girl.jpg";
import "./cat.css";
import ItemS from "../categories/ItemS";
import ProductList from "./ProductList";
function mfas() {
  return (
    <div className="wfas">
      <div>
        <img className="girl" src={girl} alt="" />
      </div>
      <h2 id="wona" className="headingm">
        <span className="wo">WOMEN'S </span> <span className="na">FASHION</span>
      </h2>
      <div className="">
        <ProductList className="mens" category="women's clothing" />
      </div>
    </div>
  );
}

export default mfas;
