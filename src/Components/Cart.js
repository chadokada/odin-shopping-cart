import React from 'react';
import '../Styles/App.css';

const Cart = ({cart, showCart, toggleCart}) => {

  let cartOpen = '';
  if (showCart === true){
    cartOpen = ' open';
  }

  const cartArray = () => {
    const arr = []
    for(const item in cart){
      arr.push(
        <div key={item}>
          <img
            className='product-img-cart'
            alt={item}
            src={require(`../Images/Products/${cart[item].source}`)}
          />
        </div>
      )
    }
    return arr;
  }



  return (
    <div className={`cart-drawer${cartOpen}`}>
      

      
      
      <div className='cart-container'>
        <button onClick={toggleCart}>Close Cart</button>
          {cartArray().map((div) => {
            return(div)
          })}
      </div>
      
    </div>
  )
}

export default Cart;