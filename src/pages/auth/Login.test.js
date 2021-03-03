import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import Login, { LOGIN_USER } from './Login';

const mocks = [
  {
    request: {
      query: LOGIN_USER,
      variables: {
        userame: 'Jeff',
        password: 'Bezos',
      },
    },
    result: {
      data: {
        user: { id: '1', username: 'Buck' },
      },
    },
  },
];

describe('login validation', () => {
  test('successful login', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <Login />
        </Router>
      </MockedProvider>,
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
