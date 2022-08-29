import React from 'react';
import '../Styles/App.css';
import shoppingCart from '../Images/Icons/shopping-cart.png';

const TopBar = () => {
  return (
    <div className="top-bar">
    <div className='store-name'>Butter and Sugar</div>

    <div className="shopping-cart full">
      1
      <img alt="cart-icon" src={shoppingCart} className="cart-icon full"/>
    </div>
  </div>
  )
}

export default TopBar;