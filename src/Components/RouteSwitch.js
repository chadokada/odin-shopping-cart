import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Nav from './Nav';

import App from './App';
import All from './ProductPages/AllProducts';
import ProductPage from './ProductPages/ProductPage';
import Bags from './ProductPages/Bags';


const RouteSwitch = () => {

  let [cart, setCart] = useState({})

  /*
    cart = { 
      'bowler hat': 2,
      'tote bag': 1
    }
  */

  let products = {
    hats : [
      {name: 'Ribbed Beanie', price: 30.00,source: 'ribbed_beanie.jpg'},
      {name: 'Bowler', price: 35.00,source: 'bowler.jpg'},
      {name: 'Ribbed Beanie', price: 30.00,source: 'ribbed_beanie.jpg'},
      {name: 'Bowler', price: 35.00,source: 'bowler.jpg'},
      {name: 'Ribbed Beanie', price: 30.00,source: 'ribbed_beanie.jpg'},
      {name: 'Bowler', price: 35.00,source: 'bowler.jpg'},
      {name: 'Ribbed Beanie', price: 30.00,source: 'ribbed_beanie.jpg'},
      {name: 'Bowler', price: 35.00,source: 'bowler.jpg'}
    ],
    bags : [
      {name: 'Tote Bag', price: 40.00,source: 'crochet_tote.jpg'},
      {name: 'Grocery Bag', price: 30.00,source: 'grocery_bag.png'},
      {name: 'Tote Bag', price: 40.00,source: 'crochet_tote.jpg'},
      {name: 'Grocery Bag', price: 30.00,source: 'grocery_bag.png'},
      {name: 'Tote Bag', price: 40.00,source: 'crochet_tote.jpg'},
      {name: 'Grocery Bag', price: 30.00,source: 'grocery_bag.png'},
      {name: 'Tote Bag', price: 40.00,source: 'crochet_tote.jpg'},
      {name: 'Grocery Bag', price: 30.00,source: 'grocery_bag.png'},
    ]
  }


  return (
    
    <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<App />} />
        <Route 
          path="/all" 
          element={
            <All 
              products={products}
            />
          } 
        />

        <Route 
          path="/hats"
          element={
            <ProductPage 
              productType='hats' 
              products={products.hats} 
            />
          }
        />
        
        <Route 
          path="/bags"
          element={
            <ProductPage 
              productType='Bags and Totes' 
              products={products.bags} 
            />
          }
        />


        
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;