import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import apolloClient from './apollo';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import {
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  NOT_FOUND_PATH,
} from './paths';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
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
          <Route path={REGISTER_PATH}>
            <Register />
          </Route>
          <Route path={NOT_FOUND_PATH}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
