import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {

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
          id="firstName-field"
          label="First Name"
          autoComplete="given-name"
          value={firstName}
          onChange={handleFirstNameInput}
        />
        <TextField
          id="lastName-field"
          label="Last Name"
          autoComplete="family-name"
          value={lastName}
          onChange={handleLastNameInput}
        />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={handlePasswordInput}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          Register
        </Button>
      </form>
    </Card>
  );
}

export default Register;
