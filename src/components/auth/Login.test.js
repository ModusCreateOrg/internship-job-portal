import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  cleanup, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

afterEach(cleanup);

test('successful login', async () => {
  render(
    <Router>
      <Login />
    </Router>,
  );

  userEvent.type(screen.getByLabelText('Username'), 'Demo');
  userEvent.type(screen.getByLabelText('Password'), 'Password');

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: 'Login' }));
  });
});

test('empty fields', async () => {
  render(
    <Router>
      <Login />
    </Router>,
  );

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByText('Username is required'));
  });
});
