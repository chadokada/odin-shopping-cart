import React from 'react';


const ProductCard = ({product}) => {
  
  return(
    <div className='product-container'>
      <div className='product-img-container'>
        <img 
          className='product-img'
          alt={product.name} 
          src={require(`../Images/Products/${product.source}`)}
        />
      </div>

      <div className='product-info'>
        <div className='product-name'>
          {product.name}
        </div>
        <div className='price'>
          {`$${product.price.toFixed(2)}`}
        </div>
      </div>

      <button className='add-to-cart-btn'>Add To Cart</button>
    </div>
  )
}

export default ProductCard;