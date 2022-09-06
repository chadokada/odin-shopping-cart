import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Nav from './Nav';
import App from './App';
import All from './ProductPages/AllProducts';
import ProductPage from './ProductPages/ProductPage';
import CartBar from './CartBar';
import {products} from './ProductListing';

const RouteSwitch = () => {

  let [cart, setCart] = useState({})


  const handleAddToCart = (event) => {
    const productType = event.target.parentNode.getAttribute('type');
    const productName = event.target.parentNode.getAttribute('name');
    const product = products[productType].filter(product => {
      return product.name === productName
    })[0]; //To strip containing array
    
    let newCart = {...cart};
    
    if (newCart[productName] === undefined) {
      newCart[productName] = {...product, quantity: 1}
    } else {
      newCart[productName].quantity += 1
    }
    setCart(newCart);
  }

  const decrementItem = (event) => {    
    const itemName = event.target.closest('.cart-item').getAttribute('name');
    let newCart = {...cart};
    newCart[itemName].quantity -= 1;

    if (newCart[itemName].quantity === 0){
      delete newCart[itemName];
    }
    setCart(newCart);
  }

  const incrementItem = (event) => {    
    const itemName = event.target.closest('.cart-item').getAttribute('name');
    let newCart = {...cart};
    newCart[itemName].quantity += 1;
    setCart(newCart);
  }

  const handleQuantityInput = (event) => {
    const newQuantity = event.target.value;
    const itemName = event.target.closest('.cart-item').getAttribute('name')
    let newCart = {...cart};
    newCart[itemName].quantity = newQuantity;

    if (newCart[itemName].quantity === 0){
      delete newCart[itemName];
    }
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
      
        <Route 
          path="/products/all" 
          element={
            <>
              <CartBar 
                cart={cart} 
                decrementItem={decrementItem}
                incrementItem={incrementItem}
                handleQuantityInput={handleQuantityInput}
              />
              <All 
                products={products}
                handleAddToCart={handleAddToCart}
              />
            </>
          } 
        />

        <Route 
          path="/products/hats"
          element={
            <>
              <CartBar 
                cart={cart} 
                decrementItem={decrementItem}
                incrementItem={incrementItem}
                handleQuantityInput={handleQuantityInput}
              />
              <ProductPage 
                title='Hats' 
                products={products.hats} 
                handleAddToCart={handleAddToCart}
              />
            </>
          }
        />
        
        <Route 
          path="/products/bags"
          element={
            <>
              <CartBar 
                cart={cart} 
                decrementItem={decrementItem}
                incrementItem={incrementItem}
                handleQuantityInput={handleQuantityInput}
              />
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