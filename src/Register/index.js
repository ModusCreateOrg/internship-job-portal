import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import RegisterForm from './RegisterForm';

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
  const handleSubmit = () => {};

  return (
    <Card style={{
      boxSizing: 'border-box',
      maxWidth: '400px',
      margin: '1em auto',
      alignItems: 'center',
    }}
    >
      <RegisterForm
        username={username}
        onUsernameChange={handleUsernameInput}
        firstName={firstName}
        onFirstNameChange={handleFirstNameInput}
        lastName={lastName}
        onLastNameChange={handleLastNameInput}
        password={password}
        onPasswordChange={handlePasswordInput}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}

export default Register;
