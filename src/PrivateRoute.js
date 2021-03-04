import React from 'react';
import {
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN_PATH } from './paths';

function PrivateRoute(props) {
  const {
    path,
    exact,
    component,
    loggedIn,
  } = props;
  const location = useLocation();

  return (
    loggedIn ? (
      <Route path={path} exact={exact} component={component} />
    ) : (
      <Redirect
        to={{
          pathname: LOGIN_PATH,
          state: { from: location },
        }}
      />
    )
  );
}

PrivateRoute.defaultProps = {
  path: '/',
  exact: false,
  component: undefined,
  loggedIn: false,
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default PrivateRoute;
