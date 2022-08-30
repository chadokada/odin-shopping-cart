import React from 'react';
import '../Styles/App.css';

const Cart = ({showCart, toggleCart}) => {

  let cartOpen = '';
  if (showCart === true){
    cartOpen = ' open';
  }



  return (
    <div className={`cart-drawer${cartOpen}`}>
      THIS IS CARTA
      <button onClick={toggleCart}>Close Cart</button>
    </div>
  )
}

export default Cart;