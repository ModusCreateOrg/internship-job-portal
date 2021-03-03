import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './index';

it('renders the home page', () => {
  render(<Router><Home /></Router>);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
