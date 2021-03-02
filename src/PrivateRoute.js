import React from 'react';
import {
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN_PATH } from './paths';

function PrivateRoute(props) {
  const loggedIn = false;
  const { path, exact, component } = props;
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
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.element,
};

export default PrivateRoute;
