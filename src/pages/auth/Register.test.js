import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import Register, { REGISTER_USER } from './Register';

const mocks = [
  {
    request: {
      query: REGISTER_USER,
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

describe('register validation', () => {
  test('successful register', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <Register />
        </Router>
      </MockedProvider>,
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
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <Register />
        </Router>
      </MockedProvider>,
    );

    await waitFor(() => {
      userEvent.click(screen.getByRole('button', { name: 'Register' }));
      expect(screen.getByText('Username is required')).toBeTruthy();
      expect(screen.getByText('Password is required')).toBeTruthy();
    });
  });
});
