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
      const imageSrc = cart[item].source;
      const price = cart[item].price.toFixed(2);
      const quantity = cart[item].quantity;

      arr.push(
        <div className='cart-item'>
          <div className='cart-item-img-container'>
            <img
              className='cart-item-img'
              alt={item}
              src={require(`../Images/Products/${imageSrc}`)}
            />
          </div>
          <div className='cart-item-side'>
            <div className='cart-item-info'>
              <div className='cart-item-name'>{item}</div>
              <div className='cart-item-price'>{`$${price}`}</div>
            </div>

            <div className='cart-item-quantity-container'>
              <button>-</button>
              <input 
                type='number' 
                className='cart-item-quantity-input' 
                value={quantity}
              >
              </input>
              <button>+</button>
            </div>
          </div>
        </div>


      )
    }
    return arr;
  }



  return (
    <div className={`cart-drawer${cartOpen}`}>
      
      <div className='cart-container'>
        <button onClick={toggleCart}>Close Cart</button>

        <div className='cart-items-container'>
          {cartArray().map((div) => {
            return(div)
          })}
          
          {/* 
          <div className='cart-item'>
            <img
              className='cart-item-img'
              alt={'Ribbed Beanie'}
              src={require(`../Images/Products/ribbed_beanie.jpg`)}
            />
            <div className='cart-item-side'>
              <div className='cart-item-info'>
                <div className='cart-item-name'>Ribbed Beanie</div>
                <div className='cart-item-price'>$30.00</div>
              </div>

              <div className='cart-item-quantity-container'>
                <button>-</button>
                <input 
                  type='number'
                  className='cart-item-quantity-input'
                  value='10'
                >
                </input>
                <button>+</button>
              </div>
            </div>
          </div>
          */}


        </div>
        
        {/* 
          {cartArray().map((div) => {
            return(div)
          })}
        */}
      </div>
      
    </div>
  )
}

export default Cart;