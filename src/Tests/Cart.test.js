import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event';
import Cart from '../Components/Cart';

it('should render nothing if cart is empty', () => {
  const cart = {}
  const { container } = render(<Cart cart={cart}/>);
  expect(container).toMatchSnapshot()
});

it('should render one item in cart', () => {
  const cart = {
    'Citrus Bag' : {
      name: 'Citrus Bag', 
      price: 45.00,
      source: 'citrus_bag.png', 
      type:'bags',
      quantity: 1
    }
  }
  const showCartMock = jest.fn();
  const toggleCartMock = jest.fn();
  const decrementMock = jest.fn();
  const incrementMock = jest.fn();
  const onInputMock = jest.fn();
  const checkOutMock = jest.fn();

  const { container } = render(
    <Cart 
      cart={cart}
      showCart={showCartMock}
      toggleCart={toggleCartMock}
      decrementItem={decrementMock}
      incrementItem={incrementMock} 
      handleQuantityInput={onInputMock}
      handleCheckOut={checkOutMock}
    />
  );

  expect(container).toMatchSnapshot()
});

it('should render two items in cart', () => {
  const onInputMock = jest.fn();
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
  }
  const { container } = render(
    <Cart cart={cart} handleQuantityInput={onInputMock}/>
  );
    
  expect(container).toMatchSnapshot()
});

it('should show correct cart total if one item with quantity of 1 in cart', () => {
  const onInputMock = jest.fn();
  const cart = {
    'Citrus Bag' : {
      name: 'Citrus Bag', 
      price: 45.00,
      source: 'citrus_bag.png', 
      type:'bags',
      quantity: 1
    }
  }
  render(<Cart cart={cart} handleQuantityInput={onInputMock}/>)
    
  expect(screen.getByText(
      (content, element) => content.startsWith('Total')).textContent
    ).toMatch('Total: $45.00');
});

it('should show correct cart total if one item with quantity of 2 in cart', () => {
  const onInputMock = jest.fn();
  const cart = {
    'Citrus Bag' : {
      name: 'Citrus Bag', 
      price: 45.00,
      source: 'citrus_bag.png', 
      type:'bags',
      quantity: 2
    }
  }
  render(<Cart cart={cart} handleQuantityInput={onInputMock}/>)
    
  expect(screen.getByText(
      (content, element) => content.startsWith('Total')).textContent
    ).toMatch('Total: $90.00');
});

it('should show correct cart total if multiple items with various quantities in cart', () => {
  const onInputMock = jest.fn();
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
  }
  
  render(<Cart cart={cart} handleQuantityInput={onInputMock}/>)
    
  expect(screen.getByText(
      (content, element) => content.startsWith('Total')).textContent
    ).toMatch('Total: $120.00');
});

it('should fire handleCheckOut the correct number of times', () => {
  const onInputMock = jest.fn();
  const onClickMock = jest.fn();
  const cart = {}
  render(
    <Cart 
      cart={cart} 
      handleCheckOut={onClickMock} 
      handleQuantityInput={onInputMock}
    />
  )

  const checkout = screen.getByRole('button', {name: 'Checkout'});
  userEvent.click(checkout);
  
  expect(onClickMock).toHaveBeenCalledTimes(1);
})