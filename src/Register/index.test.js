import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './index';

it('renders the register page', () => {
  render(<Router><Register /></Router>);
  expect(screen.getByRole('form')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Username'), 'User');
  expect(screen.getByDisplayValue('User')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('First Name'), 'John');
  expect(screen.getByDisplayValue('John')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Last Name'), 'Smith');
  expect(screen.getByDisplayValue('Smith')).toBeInTheDocument();
  userEvent.type(screen.getByLabelText('Password'), 'password');
  expect(screen.getByDisplayValue('password')).toBeInTheDocument();
});
