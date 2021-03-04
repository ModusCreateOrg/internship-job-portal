import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterForm from './RegisterForm';

it('renders the registration form', () => {
  const onUsernameChange = jest.fn();
  const onFirstNameChange = jest.fn();
  const onLastNameChange = jest.fn();
  const onPasswordChange = jest.fn();
  const onSubmit = jest.fn();
  render(
    <RegisterForm
      username=""
      onUsernameChange={onUsernameChange}
      firstName=""
      onFirstNameChange={onFirstNameChange}
      lastName=""
      onLastNameChange={onLastNameChange}
      password=""
      onPasswordChange={onPasswordChange}
      onSubmit={onSubmit}
    />,
  );
  userEvent.type(screen.getByLabelText('Username'), 'User');
  expect(onUsernameChange).toHaveBeenCalledTimes(4);

  userEvent.type(screen.getByLabelText('First Name'), 'John');
  expect(onFirstNameChange).toHaveBeenCalledTimes(4);

  userEvent.type(screen.getByLabelText('Last Name'), 'Smith');
  expect(onLastNameChange).toHaveBeenCalledTimes(5);

  userEvent.type(screen.getByLabelText('Password'), 'UXdlcnR5MTIz');
  expect(onPasswordChange).toHaveBeenCalledTimes(12);

  fireEvent.submit(screen.getByRole('form'));
  expect(onSubmit).toHaveBeenCalled();
});
