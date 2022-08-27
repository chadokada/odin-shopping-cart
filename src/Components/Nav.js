import React from 'react';
import '../Styles/App.css';
import  { Link } from 'react-router-dom';

const Nav = ({shopName}) => {
  return (
    <nav className='nav'>
      {/* 
      <div className='store-name'>Butter and Sugar</div>
      */}
      <h2>{shopName}</h2>
      <ul>
          <Link to="/all">
            <li>All Products</li>
          </Link>
          <Link to="/hats">
            <li>Hats</li>
          </Link>
          <Link to="/bags">
            <li>Bags and Totes</li>
          </Link>

          {/* 
          <li>Clothing</li>
        
          <li>Food Toys</li>
        
          <li>Miscellaneous</li>
          */}

      </ul>
    </nav>
  )
}

export default Nav;