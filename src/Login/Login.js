import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
  return (
    <form>
      <TextField
        id="username-field"
        label="Username"
        autoComplete="username"
      />
      <TextField
        id="password-field"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default Login;
