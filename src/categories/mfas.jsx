import React from "react";
import guy from "../assets/guy.jpg";
import "./cat.css";
import ItemS from "../categories/ItemS";
import ProductList from "./ProductList";
function mfas() {
  return (
    <div className="mfas">
      <div>
        <img className="guy" src={guy} alt="" />
      </div>
      <h2 className="headingm">
        <span id="one">MEN'S </span> <span id="two">FASHION</span>
      </h2>
      <div className="mc">
        <ProductList category="men's clothing" />
      </div>
    </div>
  );
}

export default mfas;
