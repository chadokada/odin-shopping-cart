import React from 'react';
import '../Styles/App.css';
import  { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <h3>Butter and Sugar</h3>
      <ul>
        
          <li>Hats</li>
        
        
          <li>Bags and Totes</li>
        
        
          <li>Clothing</li>
        
          <li>Food Toys</li>
        
          <li>Miscellaneous</li>
        
      </ul>
    </nav>
  )
}

export default Nav;