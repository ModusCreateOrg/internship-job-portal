import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import apolloClient from './apollo';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
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
