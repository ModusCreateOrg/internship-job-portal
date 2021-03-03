import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';

function RegisterForm(props) {
  const {
    username,
    onUsernameChange,
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    password,
    onPasswordChange,
    onSubmit,
  } = props;

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={onSubmit}
    >
      <TextField
        id="username-field"
        label="Username"
        autoComplete="username"
        value={username}
        onChange={onUsernameChange}
      />
      <TextField
        id="firstName-field"
        label="First Name"
        autoComplete="given-name"
        value={firstName}
        onChange={onFirstNameChange}
      />
      <TextField
        id="lastName-field"
        label="Last Name"
        autoComplete="family-name"
        value={lastName}
        onChange={onLastNameChange}
      />
      <TextField
        id="password-field"
        label="Password"
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
}

RegisterForm.propTypes = {
  username: propTypes.string.isRequired,
  onUsernameChange: propTypes.func.isRequired,
  firstName: propTypes.string.isRequired,
  onFirstNameChange: propTypes.func.isRequired,
  lastName: propTypes.string.isRequired,
  onLastNameChange: propTypes.func.isRequired,
  password: propTypes.string.isRequired,
  onPasswordChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default RegisterForm;
