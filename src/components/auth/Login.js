import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

import './styles.css';

const useStyles = makeStyles({
  root: {
    background: '#f1f1f1',
    margin: 'auto',
    width: '30rem',
    height: '30rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  box: {
    margin: 'auto',
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

function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Container className={classes.box}>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .max(255)
                .required('Username is required'),
              password: Yup.string()
                .max(255)
                .required('Password is required'),
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
                  <Typography align="center" color="textPrimary" variant="h4">
                    Welcome
                  </Typography>

                  <Typography align="center" color="textSecondary" variant="body1">
                    Enter the Modus Job Portal
                  </Typography>
                </Box>
                <TextField
                  id="Username"
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="username"
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  id="Password"
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
                    id="Submit"
                    color="secondary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body2">
                  Don&apos;t Have an Account?
                  {' '}
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </CardContent>
    </Card>
  );
}

export default Login;
