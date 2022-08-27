import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Nav from './Nav';
import cartFull from '../Images/Icons/shopping-cart.png';
import App from './App';
import All from './ProductPages/AllProducts';
import Hats from './ProductPages/Hats'
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
      {name: 'Ribbed Beanie', price: 30.00,source: 'ribbed_beanie.jpg'}
    ]
  }


  return (
    
    <BrowserRouter>
      <div className="top-bar">
        <div className='store-name'>Butter and Sugar</div>

        <div className="shopping-cart full">
          1
          <img alt="cart-icon" src={cartFull} className="cart-icon full"/>
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/all" element={<All />} />

        <Route 
          path="/hats" 
          element={
            <Hats products={products.hats}/>
          } 
        />


        <Route path="/bags" element={<Bags />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;