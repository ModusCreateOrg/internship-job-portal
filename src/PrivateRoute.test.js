import React from 'react';
import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import { HOME_PATH, LOGIN_PATH } from './paths';

it('displays the private page when logged in', () => {
  render(
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path={HOME_PATH}
          component={Home}
          loggedIn
        />
        <Route path={LOGIN_PATH}>
          <Login />
        </Route>
      </Switch>
    </Router>,
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
});
it('redirects to the login page when not logged in', () => {
  render(
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path={HOME_PATH}
          component={Home}
        />
        <Route path={LOGIN_PATH}>
          <Login />
        </Route>
      </Switch>
    </Router>,
  );
  expect(screen.getByRole('form')).toBeInTheDocument();
});
