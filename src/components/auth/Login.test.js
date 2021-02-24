import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

test('allows the user to login successfully', async () => {
  render(<Login />);

  fireEvent.change(screen.getByLabelText('Username'), {
    target: { value: 'demo' },
  });

  fireEvent.change(screen.getByLabelText('Password'), {
    target: { value: 'password' },
  });

  fireEvent.click(screen.getByRole('button', { name: 'Login' }));
});
