

import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Make sure to import your CartContext

const CartDetails = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Your Cart</h2>
        <ul className="list-group">
          {cart.map(item => (
            <li className="list-group-item d-flex justify-content-between" key={item.id}>
              <span>{item.title}</span>
              <button className="button-42" role='button' onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartDetails;
