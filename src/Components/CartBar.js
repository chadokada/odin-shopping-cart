import React, {useState} from 'react';
import '../Styles/App.css';
import shoppingCart from '../Images/Icons/shopping-cart.png';
import Cart from './Cart';

const CartBar = (
    {
      cart, 
      decrementItem, 
      incrementItem, 
      handleQuantityInput, 
      handleCheckOut
    }
  ) => {

  const getCartSize = () => {
    let cartSize = 0;
    for (const item in cart) {
      cartSize += cart[item].quantity;
    }
    return cartSize;
  }  
  
  const cartSize = getCartSize();

  let cartStatus = ''
  if (cartSize > 0) {
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

    <div className={`shopping-cart${cartStatus}`} onClick={toggleCart} data-testid='cart-button'>
      <div className='cart-size' data-testid='cart-size'>{cartSize}</div>
      <img alt="cart-icon" src={shoppingCart} className={`cart-icon${cartStatus}`}/>
    </div>
    <Cart 
      cart={cart} 
      showCart={showCart} 
      toggleCart={toggleCart}
      decrementItem={decrementItem}
      incrementItem={incrementItem}
      handleQuantityInput={handleQuantityInput}
      handleCheckOut={handleCheckOut}
    />
  </div>
  )
}

export default CartBar;