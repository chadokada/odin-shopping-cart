import React from 'react';
import '../../Styles/App.css';
import TopBar from '../TopBar';
import Nav from '../Nav';
import ProductCard from '../ProductCard';

const ProductPage = ({productType, products}) => {
  // PC = proper case
  const productTypePC = productType[0].toUpperCase() + productType.slice(1);

  return (
    <div className='shop-container'>
      <TopBar />
      <div className='shop-content'>
        <Nav shopName={productTypePC} />
        <div className='products-container'>

          {products.map((product) => {
            return(
              <ProductCard product={product}/>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default ProductPage;