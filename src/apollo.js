import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4001/gql', // TODO change here
  cache: new InMemoryCache(),
});

export default apolloClient;
