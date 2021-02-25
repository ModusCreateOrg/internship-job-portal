import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import apolloClient from './apollo';

import NotFound from './components/404/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
