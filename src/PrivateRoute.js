import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export default class PrivateRoute extends Route {
  render() {
    const loggedIn = false;
    return (
      loggedIn ? (
        this.props.children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: this.props.location },
          }}
        />
      )
    );
  }
}
