import React from 'react';
import '../Styles/App.css';

const Cart = ({showCart, toggleCart}) => {

  let cartOpen = '';
  if (showCart === true){
    cartOpen = ' open';
  }



  return (
    <div className={`cart-drawer${cartOpen}`}>
      

      
      <div className='cart-container'>
        <button onClick={toggleCart}>Close Cart</button>
      </div>
      
    </div>
  )
}

export default Cart;