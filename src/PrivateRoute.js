import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { LOGIN_PATH } from './paths';

export default class PrivateRoute extends Route {
  render() {
    const loggedIn = false;
    return (
      loggedIn ? (
        this.props.children
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_PATH,
            state: { from: this.props.location },
          }}
        />
      )
    );
  }
}
