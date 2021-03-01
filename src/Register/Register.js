import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
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
    const {
      username,
      firstName,
      lastName,
      password,
    } = this.state;
    console.log(username, firstName, lastName, password);
    event.preventDefault();
  }

  render() {
    const {
      username,
      firstName,
      lastName,
      password,
    } = this.state;
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
          name="username"
          onChange={this.handleInputChange}
        />
        <TextField
          id="firstName-field"
          label="First Name"
          autoComplete="given-name"
          value={firstName}
          name="firstName"
          onChange={this.handleInputChange}
        />
        <TextField
          id="lastName-field"
          label="Last Name"
          autoComplete="family-name"
          value={lastName}
          name="lastName"
          onChange={this.handleInputChange}
        />
        <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="new-password"
          value={password}
          name="password"
          onChange={this.handleInputChange}
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
}

function Register() {
  return (
    <Card style={{
      boxSizing: 'border-box',
      maxWidth: '400px',
      margin: '1em auto',
      alignItems: 'center',
    }}
    >
      <RegisterForm />
    </Card>
  );
}

export default Register;
