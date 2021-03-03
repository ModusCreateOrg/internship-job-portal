import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './index';

it('renders the login page', () => {
  render(<Router><Login /></Router>);
  expect(screen.getByRole('form')).toBeInTheDocument();
  expect(screen.getByText('Register')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Username'), 'User');
  expect(screen.getByDisplayValue('User')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Password'), 'password');
  expect(screen.getByDisplayValue('password')).toBeInTheDocument();
});
