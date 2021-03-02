import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './index';

test('renders the route menu', () => {
  render(<Router><Home /></Router>);
  expect(screen.getByText('English')).toBeInTheDocument();
  expect(screen.getByText('Portuguese')).toBeInTheDocument();
  expect(screen.getByText('Spanish')).toBeInTheDocument();
});
