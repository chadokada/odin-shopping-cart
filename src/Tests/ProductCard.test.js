import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ProductCard from '../Components/ProductCard';

describe("Test ProductCard", () => {
  const testProduct = {
    name: 'Bowler Hat',
    type: 'Hat',
    price: 15,
    source: 'bowler.jpg'
  };
  const onClickMock = jest.fn();

  it("renders price with two decimals", () => {
    render(<ProductCard product={testProduct} handleAddToCart={onClickMock} />);

    expect(
      screen.getByText(
        (content, element) => content.startsWith('$')).textContent)
        .toMatch('$15.00');
  });

  it("add to cart callback called on correct number of times", () => {
    render(<ProductCard product={testProduct} handleAddToCart={onClickMock} />);
    const addToCart = screen.getByRole('button', {name: 'Add To Cart'});

    userEvent.click(addToCart);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })


  it("productcard snapshot", () => {
    const {container} = render(<ProductCard product={testProduct} handleAddToCart={onClickMock} />);

    expect(container).toMatchSnapshot();
  });


})