import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './apollo';
import LandingPage from './landing/LandingPage';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route path="/"><LandingPage /></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
