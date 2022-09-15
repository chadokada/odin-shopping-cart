import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartBar from '../Components/CartBar';

describe('Test empty cart', () => {
  const onInputMock = jest.fn();
  const cart = {}
  
  it('should show no items in cart', () => {
    const { container } = render(
      <CartBar cart={cart} handleQuantityInput={onInputMock}/>
    );

    const cartSize = screen.getByTestId('cart-size');
  
    expect(cartSize.textContent).toMatch('0');
    expect(container).toMatchSnapshot();
  });
  
  it('should open cart side drawer', () => {
    const { container } = render(
      <CartBar cart={cart} handleQuantityInput={onInputMock}/>
    );
    
    const cartButton = screen.getByTestId('cart-button')
    userEvent.click(cartButton)
  
    expect(container).toMatchSnapshot()
  });
})

describe('Test cart with four items', () => {
  const cart = {
    'Citrus Bag' : {
      name: 'Citrus Bag', 
      price: 45.00,
      source: 'citrus_bag.png', 
      type:'bags',
      quantity: 1
    },
    'Bowler' : {
      name: 'Bowler', 
      price: 25.00, 
      source: 'bowler.jpg', 
      type:'hats',
      quantity: 3
    }
  };

  it('should show no items in cart', () => {
    const onInputMock = jest.fn();
    const { container } = render(
      <CartBar cart={cart} handleQuantityInput={onInputMock}/>
    );

    const cartSize = screen.getByTestId('cart-size');
  
    expect(cartSize.textContent).toMatch('4');
    expect(container).toMatchSnapshot();
  });


})
