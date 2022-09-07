import React from 'react';
import '../Styles/App.css';

const CartItem = ({product, decrementItem, incrementItem, handleQuantityInput}) => {
  const productName = product.name;
  const productType = product.type;
  const imageSrc = product.source;
  const price = product.price.toFixed(2);
  const quantity = product.quantity;

  return (
    <div 
      className='cart-item'
      name={productName}
      type={productType}
    >
      <div className='cart-item-img-container'>
        <img
          className='cart-item-img'
          alt={product}
          src={require(`../Images/Products/${imageSrc}`)}
        />
      </div>
      <div className='cart-item-side'>
        <div className='cart-item-info'>
          <div className='cart-item-name'>{productName}</div>
          <div className='cart-item-price'>{`$${price}`}</div>
        </div>

        <div className='cart-item-quantity-container'>
          <button onClick={decrementItem}>-</button>
          <input 
            type='number' 
            className='cart-item-quantity-input' 
            value={quantity}
            onInput={handleQuantityInput}
          >
          </input>
          <button onClick={incrementItem}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;