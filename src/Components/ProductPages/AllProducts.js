import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';


const All = () => {
  return (
    <div className='shop-container'>
      <Nav shopName="All Products"/>
      <div className='shop-content'>All Products</div>
    </div>
  )
}

export default All;