import CartIcon from '../assets/carticon';
import classes from './cart.module.css';
import React, { useContext,useState } from 'react';
import { CartContext } from './CartContext';
import CartDetails from './CartDetails';

const HeaderCartButton = (props) => {
  const{cart} = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add this line

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div>
    <button className={classes.button} onClick={toggleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
    {isCartOpen && <CartDetails />}
    </div>
  );
};

export default HeaderCartButton;