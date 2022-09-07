import React from 'react';
import CartItem from  './CartItem';
import '../Styles/App.css';

const Cart = (
    {
      cart, 
      showCart, 
      toggleCart, 
      decrementItem, 
      incrementItem,
      handleQuantityInput,
      handleCheckOut
    }
  ) => {

  let cartOpen = '';
  if (showCart === true){
    cartOpen = ' open';
  }

  const cartEmpty = () => {
    return Object.keys(cart).length === 0;
  }

  const getCartTotal = () => {
    let cartTotal = 0;

    for(const product in cart){
      const price = cart[product].price.toFixed(2);
      const quantity = cart[product].quantity;
      cartTotal = cartTotal + ( price * quantity );
    }
    return cartTotal.toFixed(2);
  }

  return (
    <div className={`cart-drawer${cartOpen}`}>
      <div className='cart-overlay' onClick={toggleCart}></div>
      <div className='cart-container'>
        <div className='cart-header'>
          <h2>Your Shopping Cart</h2>
          <i className="fa-solid fa-x" onClick={toggleCart}></i>
        </div>
        <div className='cart-items-container'>
          {
            !cartEmpty() &&
              Object.keys(cart).map((key) => {
                  return(
                    <CartItem 
                      key={key}
                      product={cart[key]}
                      decrementItem={decrementItem}
                      incrementItem={incrementItem}
                      handleQuantityInput={handleQuantityInput}
                    />
                  )
              })
          }
          {cartEmpty() && <div>No items yet...</div>}
        </div>
        <div className='cart-total'>Total: ${getCartTotal()}</div>
        <button className='checkout' onClick={handleCheckOut}>Checkout</button>
      </div> 
    </div>
  )
}

export default Cart;