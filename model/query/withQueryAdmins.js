import { graphql } from '@apollo/react-hoc';
import { gql } from "apollo-boost";

const query = graphql(gql`
  {
    admins {
      id
      name
    }
  }
`);

export default query;