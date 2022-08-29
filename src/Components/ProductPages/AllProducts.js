import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';
import TopBar from '../TopBar';
import ProductCard from '../ProductCard';

const All = ({products}) => {

  let productList = []

  for (let key of Object.keys(products)) {
    productList.push(...products[key]);
  }

  return (
    <div className='shop-container'>
    <TopBar />
    <div className='shop-content'>
      <Nav shopName={`All Products`} />
      <div className='products-container'>

        {productList.map((product) => {
          return(
            <ProductCard product={product}/>
          )
        })}

      </div>
    </div>

  </div>
    /*
    <div className='shop-container'>
      <TopBar />
      <div className='shop-content'>
        <Nav shopName="All Products"/>
        <div className='products-container'>
          All Products
        </div>
      </div>
    </div>
    */
  )
}

export default All;