import gql from 'graphql-tag';

const IsLoginQuery = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
export default IsLoginQuery;