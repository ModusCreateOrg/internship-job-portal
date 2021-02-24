{/* import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';

function Login() {
  return (

    <Box
      component="span"
      display="block"
      justifyContent="center"
      color="f1f1f1"
      bgcolor="black"
    >
      <Container maxWidth="sm">
        <Formik
          initialValues={{
            email: 'demo@demo.com',
            password: 'password',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required'),
          })}
          onSubmit={(data) => {
            alert(JSON.stringify(data));
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={3}>
                <Typography
                  color="textPrimary"
                  variant="h2"
                >
                  Sign In
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  Enter the Modus Job Portal
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <Box my={2}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </Box>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Don&apos;t Have an Account?
                {' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="h6"
                >
                  Sign Up
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}

export default LoginView;

import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';

import '../styles.css';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '30rem',
    height: '30rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={(classes.root)}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          hey
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
} */ }
