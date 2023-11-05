import React from "react";
import "./itemS.css";
import { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { ProductContext } from "../COMPONENTS/ProductContext";
import { CartContext } from "../COMPONENTS/CartContext";

const itemS = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // const history = useHistory();

  const handleAddToCart = () => {
    addToCart(product);
  }

  // const viewProductDetails = () => {
    // history.push(`/itemB/${product.id}`)
  // }
  return(
    
    <div /*onClick={viewProductDetails}*/ className="icard">
      <div className="img mx-auto">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="title mx-0 my-0">
        <h2>{product.title}</h2>
      </div>
      <div className="desc mx-0 my-0">
        <p>
        </p>
      </div>
      <div className="price mx-0 my-0">
         <p>${product.price}</p>
       
      </div>
      <div className="btn">
        <button onClick={handleAddToCart}>Add to cart</button>
        {/* <button onClick={viewProductDetails}>VIEW</button> */}
      </div>
    </div>
    
  );
}

export default itemS;
