import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Nav from './Nav';
import App from './App';
import All from './ProductPages/AllProducts';
import ProductPage from './ProductPages/ProductPage';
import CartBar from './CartBar';

const RouteSwitch = () => {

  let [cart, setCart] = useState([])

  /*
    cart = { 
      'bowler hat': 2,
      'tote bag': 1
    }
  */

  let products = {
    hats : [
      {name: 'Ribbed Beanie', price: 30.00, source: 'ribbed_beanie.jpg', type:'hats'},
      {name: 'Bowler', price: 35.00,source: 'bowler.jpg', type:'hats'},
    ],
    bags : [
      {name: 'Tote Bag', price: 40.00,source: 'crochet_tote.jpg', type:'bags'},
      {name: 'Grocery Bag', price: 30.00,source: 'grocery_bag.png', type:'bags'},
    ]
  }

  const handleAddToCart = (event) => {
    const productType = event.target.parentNode.getAttribute('type');
    const productName = event.target.parentNode.getAttribute('name');
    const product = products[productType].filter(product => {
      return product.name === productName
    })[0]; //To strip containing array

    let newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }


  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<App />} />
        <Route 
          path="/all" 
          element={
            <>
              <CartBar cart={cart} />
              <All 
                products={products}
                handleAddToCart={handleAddToCart}
              />
            </>
          } 
        />

        <Route 
          path="/hats"
          element={
            <>
              <CartBar />
              <ProductPage 
                title='Hats' 
                products={products.hats} 
                handleAddToCart={handleAddToCart}
              />
            </>
          }
        />
        
        <Route 
          path="/bags"
          element={
            <>
              <CartBar />
              <ProductPage 
                title='Bags and Totes' 
                products={products.bags}
                handleAddToCart={handleAddToCart}
              />
            </>
          }
        />


        
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;