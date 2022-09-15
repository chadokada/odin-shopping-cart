import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { products } from '../Components/ProductListing';
import ProductPage from '../Components/ProductPages/ProductPage';

it('displays all products correctly', () => {
  const { container } = render(
    <ProductPage 
      title='Hats'
      products={products.hats}
    />,
    {wrapper: MemoryRouter}
  );

  expect(container).toMatchSnapshot();
})