import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    console.log(username, password);
    event.preventDefault();
  }

  render() {
    const { username, password } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="username-field"
          label="Username"
          autoComplete="username"
          value={username}
          onChange={this.handleUsernameChange}
        />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={this.handlePasswordChange}
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
}

function Login() {
  return (
    <Card style={{
      boxSizing: 'border-box',
      maxWidth: '400px',
      margin: '1em auto',
      alignItems: 'center',
    }}
    >
      <LoginForm />
      <Button variant="text" color="default" component={Link} to="/register">
        Register
      </Button>
    </Card>
  );
}

export default Login;
