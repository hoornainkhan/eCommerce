import React from "react";

const itemB = ({ product }) => {
  return (
    <div className="view">
      <div className="poster">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="content">
        <div className="name">
          <h1>{product.title}</h1>
        </div>
        <div className="description">
          <p>{product.description} </p>
        </div>
        <div className="info">
          <div className="prize">
            <span>${product.price}</span>
          </div>
          <div className="ratings">
            <p>
              Rate: <span>★{product.rating.rate}</span>({product.rating.count})
            </p>
          </div>
        </div>
        {/* <div className="btn">
          <button> Add to cart </button>
        </div> */}
      </div>
    </div>
  );
}

export default itemB;
