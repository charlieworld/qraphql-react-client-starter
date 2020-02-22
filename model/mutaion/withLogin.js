import gql from 'graphql-tag';

const LoginMutation = gql`
  mutation login ($addAdminInput: addAdminInput!){
      login (admin: $addAdminInput){
        token
      }
    }
`;

const LoginVariables = {
  addAdminInput: {
    name: null,
    key: null,
  }
}


export default {
  LoginMutation,
  LoginVariables
};