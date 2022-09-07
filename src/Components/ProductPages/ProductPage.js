import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';
import ProductCard from '../ProductCard';

const ProductPage = ({title, products, handleAddToCart}) => {

  return (
    <div className='shop-container'>
      <div className='shop-content'>
        <Nav shopName={title} />
        <div className='products-container'>
          {products.map((product) => {
            return(
              <ProductCard
                key={product.name} 
                product={product}
                handleAddToCart={handleAddToCart}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductPage;