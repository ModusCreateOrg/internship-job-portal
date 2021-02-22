import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import apolloClient from './apollo';
import English from './English';
import Portuguese from './Portuguese';
import Spanish from './Spanish';
import Home from './Home';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
            <Router>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/english">
                  <English />
                </Route>
                <Route path="/portuguese">
                  <Portuguese />
                </Route>
                <Route path="/spanish">
                  <Spanish />
                </Route>
              </Switch>
            </Router>
    </ApolloProvider>
  );
}

export default App;
