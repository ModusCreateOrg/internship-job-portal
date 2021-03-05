import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { REGISTER_PATH } from '../paths';
import LoginForm from './LoginForm';
import useAuth from '../use-auth';

function Login() {
  const auth = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth.signIn(username, password);
    history.push('/');
  };

  return (
    <Card style={{
      boxSizing: 'border-box',
      maxWidth: '400px',
      margin: '1em auto',
      alignItems: 'center',
    }}
    >
      <LoginForm
        username={username}
        onUsernameChange={handleUsernameInput}
        password={password}
        onPasswordChange={handlePasswordInput}
        onSubmit={handleSubmit}
      />
      <Button variant="text" color="default" component={Link} to={REGISTER_PATH}>
        Register
      </Button>
    </Card>
  );
}

export default Login;
