import React from "react";
import ProductList from "./ProductList";

function accessories() {
  return (
    <div className="access">
      <h2 className="hea">ACCESSORIES</h2>
      <div className="acc">
        <ProductList category="jewelery" />
      </div>
    </div>
  );
}

export default accessories;
