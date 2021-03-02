import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './Register';

describe('register validation', () => {
  test('successful register', async () => {
    render(
      <Router>
        <Register />
      </Router>,
    );

    userEvent.type(screen.getByLabelText('Username'), 'Demo');
    userEvent.type(screen.getByLabelText('Password'), 'Password');

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: 'Register' }));
      expect(screen.getByRole('button', { name: 'Register' })).toBeDisabled();
    });
  });

  test('empty fields errors', async () => {
    render(
      <Router>
        <Register />
      </Router>,
    );

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: 'Register' }));
      expect(screen.getByText('Username is required')).toBeTruthy();
      expect(screen.getByText('Password is required')).toBeTruthy();
    });
  });
});
