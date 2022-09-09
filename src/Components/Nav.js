import React from 'react';
import '../Styles/App.css';
import  { Link } from 'react-router-dom';

const Nav = ({shopName}) => {
  return (
    <nav className='nav'>
      <h2>{shopName}</h2>
      <ul>
          <Link to="/products/all">
            <li>All Products</li>
          </Link>
          <Link to="/products/hats">
            <li>Hats</li>
          </Link>
          <Link to="/products/bags">
            <li>Bags and Totes</li>
          </Link>
      </ul>
    </nav>
  )
}

export default Nav;