import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import apolloClient from './apollo';
import NotFound from './pages/404/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Poppins"', 'Sans-Serif'].join(','),
  },
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
