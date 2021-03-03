import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { gql, useMutation } from '@apollo/client';
import {
  Box, Button, CardContent, Link, TextField, Typography,
} from '@material-ui/core';

import CustomCard from '../../components/CustomCard/CustomCard';

export const REGISTER_USER = gql`
  mutation createUser(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $userRoleId: Int!
    $contactInfoId: Int!
  ) {
    createUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      password: $password
      userRoleId: $userRoleId
      contactInfoId: $contactInfoId
    ) {
      username
      firstName
      lastName
    }
  }
`;

const margin = 3;

function Register() {
  const history = useHistory();

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: () => {
      history.push('/*');
    },
    onError: () => {
      // Add error popup
    },
  });

  return (
    <CustomCard>
      <CardContent>
        <Formik
          initialValues={{
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            userRoleId: '',
            contactInfoId: '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required('Username is required'),
            password: Yup.string()
              .max(255)
              .required('Password is required'),
          })}
          onSubmit={(inputs) => {
            registerUser({
              variables: {
                username: inputs.username,
                password: inputs.password,
                firstName: 'd',
                lastName: 'd',
                userRoleId: 1,
                contactInfoId: 1,
              },
            });
          }}
        >
          {({
            errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={margin}>
                <Typography align="center" color="textPrimary" variant="h4">
                  Register
                </Typography>

                <Typography align="center" color="textSecondary" variant="body1">
                  Create an Account
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
              <Box my={margin}>
                <Button
                  id="Submit"
                  color="secondary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body2">
                Already Have an Account?
                {' '}
                <Link component={RouterLink} to="/login" variant="body2">
                  Login
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </CardContent>
    </CustomCard>
  );
}

export default Register;
