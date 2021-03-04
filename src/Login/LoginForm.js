import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';

function LoginForm(props) {
  const {
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    onSubmit,
  } = props;

  return (
    <form
      aria-label="form"
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
        id="password-field"
        label="Password"
        type="password"
        autoComplete="current-password"
        name="password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  username: propTypes.string.isRequired,
  onUsernameChange: propTypes.func.isRequired,
  password: propTypes.string.isRequired,
  onPasswordChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default LoginForm;
