import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
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
=======
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
>>>>>>> 419e0d5fce82cc2402a19ab5a56a769ab6fb6b40
  });
});

<<<<<<< HEAD
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
=======
test('empty fields', async () => {
  render(
    <Router>
      <Login />
    </Router>,
  );

  await waitFor(() => {
    userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByText('Username is required'));
>>>>>>> 419e0d5fce82cc2402a19ab5a56a769ab6fb6b40
  });
});
