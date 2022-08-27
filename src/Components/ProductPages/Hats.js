import React from 'react';
import '../../Styles/App.css';
import Nav from '../Nav';
import beanie from '../../Images/Products/ribbed_beanie.jpg'

const Hats = ({products}) => {
  return (
    <div className='shop-container'>
      <Nav shopName="Hats"/>
      <div className='shop-content'>

        {products.map((product) => {
          
          return(
            <div className='product-container'>
              
              <div className='product-name'>
                {product.name}
              </div>
              <div className='price'>
                {`$ ${product.price.toFixed(2)}`}
              </div>
              <img 
                className='product-img'
                alt={product.name} 
                src={require(`../../Images/Products/${product.source}`)}
              />
            </div>
          )

        })}

        <div className='product-container'>
          {/* 
          <img src={beanie} />
          <img src={require(`../../Images/Products/${products.ribbedBeanie.source}`)} />
          */}
        </div>



      </div>
    </div>
  )
}

export default Hats;