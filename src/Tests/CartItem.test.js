import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../Components/CartItem';

describe('Test ProductCard', () => {
  const testProduct = {
    name: 'Bowler Hat',
    type: 'Hat',
    price: 15,
    source: 'bowler.jpg'
  };
  const onClickMock = jest.fn();

  it('renders price with two decimals', () => {
    render(<CartItem product={testProduct} handleAddToCart={onClickMock} />);

    expect(
      screen.getByText(
        (content, element) => content.startsWith('$')).textContent)
        .toMatch('$15.00');
  });

  it('decrerment item callback called on correct number of times', () => {
    render(<CartItem product={testProduct} decrementItem={onClickMock} />);
    const addToCart = screen.getByRole('button', {name: '-'});

    userEvent.click(addToCart);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })

  it('increment item callback called on correct number of times', () => {
    render(<CartItem product={testProduct} incrementItem={onClickMock} />);
    const addToCart = screen.getByRole('button', {name: '+'});

    userEvent.click(addToCart);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })
  
  it('item quantity input field shows correct value', () => {
    render(<CartItem product={testProduct} handleQuantityInput={onClickMock} />);
    const itemQtyInput = screen.getByRole('spinbutton');

    userEvent.type(itemQtyInput, '20');

    expect(itemQtyInput.value).toBe('20')
  })

  it('item quantity input callback fires when user inputs value', () => {
    render(<CartItem product={testProduct} handleQuantityInput={onClickMock} />);
    const itemQtyInput = screen.getByRole('spinbutton');

    userEvent.type(itemQtyInput, '20');

    expect(onClickMock).toHaveBeenCalledTimes(2);
  })

})