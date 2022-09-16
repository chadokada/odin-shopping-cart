/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RouteSwitch from '../Components/RouteSwitch';

describe('Test route switch', () => {
  render(<RouteSwitch />);
  const shopNowButton = screen.getByRole('button');
  userEvent.click(shopNowButton);
  const fugg = screen.getByRole('button', {name: 'store-namee'})

  it('should render store name correctly', () => {
    const shopName = screen.getByTestId('store-name')
    expect(shopName.textContent).toBe("Butter and Sugar")
  });


})


