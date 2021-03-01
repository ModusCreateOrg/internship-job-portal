import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('login validation', () => {
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
      expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
    });
  });

  test('empty fields errors', async () => {
    render(
      <Router>
        <Login />
      </Router>,
    );

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: 'Login' }));
      expect(screen.getByText('Username is required')).toBeTruthy();
      expect(screen.getByText('Password is required')).toBeTruthy();
    });
  });
});
