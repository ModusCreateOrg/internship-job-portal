import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { REGISTER_PATH } from '../paths';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log(username, password);
  };

  return (
    <Card style={{
      boxSizing: 'border-box',
      maxWidth: '400px',
      margin: '1em auto',
      alignItems: 'center',
    }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="username-field"
          label="Username"
          autoComplete="username"
          value={username}
          onChange={handleUsernameInput}
        />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <Button variant="text" color="default" component={Link} to={REGISTER_PATH}>
        Register
      </Button>
    </Card>
  );
}

export default Login;
