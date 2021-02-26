import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    boxSizing: 'border-box',
    maxWidth: '400px',
    margin: '1em auto',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <form className={classes.form}>
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
          variant="outlined"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <Button variant="text" color="default" component={Link} to="/register">
        Register
      </Button>
    </Card>
  );
}

export default Login;
