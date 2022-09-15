import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import RouteSwitch from '../Components/RouteSwitch';

it('should set the cart state', () => {
  const { routeSwitch }= render(<RouteSwitch />);
  routeSwitch.setCart({
    'Citrus Bag' : {
      name: 'Citrus Bag', 
      price: 45.00,
      source: 'citrus_bag.png', 
      type:'bags',
      quantity: 1
    }
  });

  expect(routeSwitch.cart).toBe(
    {
      'Citrus Bag' : {
        name: 'Citrus Bag', 
        price: 45.00,
        source: 'citrus_bag.png', 
        type:'bags',
        quantity: 1
      }
    }
  );
});