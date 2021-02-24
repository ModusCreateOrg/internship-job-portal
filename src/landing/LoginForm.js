import React, { useState } from 'react';
import {
  Button, Checkbox,
  FormControl, FormControlLabel, FormHelperText, Input, InputLabel, Typography,
} from '@material-ui/core';
import './styles.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordFieldType, setPasswordFieldType] = useState('password');

  const changePasswordFieldType = () => {
    if (passwordFieldType === 'password') setPasswordFieldType('text');
    else setPasswordFieldType('password');
  };

  const validUsername = () => {
    if (username.length === 0) { return false; }
    return true;
  };

  const validPassword = () => {
    if (password.length < 6) { return false; }
    return true;
  };

  const buttonDisabledValue = () => {
    if (validUsername() === false || validPassword() === false) return true;
    return false;
  };

  const handleLoginButton = () => {
    if (username === 'razvan' && password === 'masini') {
      alert('Login successful. Redirecting to home...');
    } else alert('Username or Password incorrect');
  };

  return (
    <form>
      <FormControl fullWidth="true">
        <InputLabel htmlFor="username-field">Username</InputLabel>
        <Input id="username-field" aria-describedby="username-validation-info" onChange={(event) => setUsername(event.target.value)} />
        <FormHelperText id="username-validation-info">*Username must have at least 3 characters</FormHelperText>
      </FormControl>
      <br />
      <FormControl fullWidth="true">
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input id="password-field" type={passwordFieldType} aria-describedby="password-validation-info" onChange={(event) => setPassword(event.target.value)} />
        <FormHelperText id="password-validation-info">*Password must be at least 6 characters long</FormHelperText>
      </FormControl>
      <br />
      <FormControlLabel
        control={<Checkbox name="show-password" onChange={() => changePasswordFieldType()} />}
        label={<Typography className="show-checkbox">Show</Typography>}
      />
      <br />
      <FormControl>
        <Button variant="contained" color="primary" disabled={buttonDisabledValue()} onClick={() => handleLoginButton()}>Log in</Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
