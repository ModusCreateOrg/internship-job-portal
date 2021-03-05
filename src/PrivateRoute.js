import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN_PATH } from './paths';
import useAuth from './use-auth';

function PrivateRoute(props) {
  const {
    path,
    exact,
    component,
  } = props;
  const auth = useAuth();

  return (
    auth.user ? (
      <Route path={path} exact={exact} component={component} />
    ) : (
      <Redirect
        to={{
          pathname: LOGIN_PATH,
        }}
      />
    )
  );
}

PrivateRoute.defaultProps = {
  path: '/',
  exact: false,
  component: undefined,
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
};

export default PrivateRoute;
