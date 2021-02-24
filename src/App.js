import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import apolloClient from './apollo';
import Login from './components/auth/Login';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
