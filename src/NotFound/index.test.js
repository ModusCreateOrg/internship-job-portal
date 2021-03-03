import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './index';

it('renders the not found page', () => {
  render(<Router><NotFound /></Router>);
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
});
