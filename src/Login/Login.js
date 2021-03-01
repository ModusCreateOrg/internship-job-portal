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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
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
