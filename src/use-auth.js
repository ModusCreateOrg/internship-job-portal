import React, {
  useState,
  useContext,
  createContext,
} from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation, gql } from '@apollo/client';

const REGISTER = gql`
  mutation RegisterMutation(
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    createUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      password: $password
      userRoleId: 3
    ) {
      id
    }
  }
`;
const QUERY_USERS = gql`
{
  users {
    username
    id
    password
  }
}
`;

const authContext = createContext();

const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [user, setUser] = useState(localStorage.getItem('user') || 0);
  const { refetch } = useQuery(QUERY_USERS);
  const [addUser] = useMutation(REGISTER);

  const signIn = async (username, password) => {
    const result = await refetch();
    if (!result) return;
    const match = result.data.users.find((element) => element.username === username);
    if (!match || match.password !== password) return;
    setUser(match.id);
    localStorage.setItem('user', user);
  };

  const signOut = () => {
    setUser(0);
    localStorage.setItem('user', 0);
  };

  const register = async (username, firstName, lastName, password) => {
    await addUser({
      variables: {
        username,
        firstName,
        lastName,
        password,
      },
    });
  };

  return {
    user,
    signIn,
    signOut,
    register,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
ProvideAuth.defaultProps = { children: <div /> };
ProvideAuth.propTypes = { children: PropTypes.element };

export default useAuth;
