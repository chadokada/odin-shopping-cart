import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';
import ProductCard from '../ProductCard';

const All = ({products, handleAddToCart}) => {

  let productList = []

  for (let key of Object.keys(products)) {
    productList.push(...products[key]);
  }

  return (
    <div className='shop-container'>
  
      <div className='shop-content'>
        <Nav shopName={`All Products`} />
        <div className='products-container'>

          {productList.map((product) => {
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

export default All;