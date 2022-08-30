import React, {useState} from 'react';
import '../Styles/App.css';
import shoppingCart from '../Images/Icons/shopping-cart.png';
import Cart from './Cart';

const CartBar = ({cart}) => {

  let cartStatus = ''
  if (cart.length > 0) {
    cartStatus = ' full'
  };

  let [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    if (showCart === false) {
      setShowCart(true)
    } else {
      setShowCart(false)
    }
  }

  return (
  <div className="top-bar">
    <div className='store-name'>Butter and Sugar</div>

    <div className={`shopping-cart${cartStatus}`} onClick={toggleCart}>
      {cart.length}
      <img alt="cart-icon" src={shoppingCart} className={`cart-icon${cartStatus}`}/>
    </div>

    <Cart showCart={showCart} toggleCart={toggleCart}/>

  </div>
  )
}

export default CartBar;