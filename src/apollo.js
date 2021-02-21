import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io', // TODO change here
  cache: new InMemoryCache(),
});

export default apolloClient;
