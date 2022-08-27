import React from 'react';
import '../Styles/App.css';
import  { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='store-name'>Butter and Sugar</div>
      <p>Hand-crocheted goods made with love and care in the heart of Paradise</p>
      <Link to="/all">
        <button className='shop-now-btn'>Shop Now</button>
      </Link>
    </div>
  );
}

export default App;
