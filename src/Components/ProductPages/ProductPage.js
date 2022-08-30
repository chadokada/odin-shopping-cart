import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';
import ProductCard from '../ProductCard';

const ProductPage = ({title, products, handleAddToCart}) => {
  // PC = proper case

  return (
    <div className='shop-container'>
      {/*
      <TopBar />
      */}
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