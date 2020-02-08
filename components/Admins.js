// src/Users.js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import styled from 'styled-components';

const ListItem = styled.li`
  list-style-type: none;
  border: black solid 1px;
`;

const getAdminsQuery = gql`
  {
    admins {
      id
      name
    }
  }
`;

const Admins = () => (
  <Query query={getAdminsQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      // 最重要的就是從 data 裡面取得資料
      const lists = data.admins.map(currentAdin => (
        <ListItem key={currentAdin.id}>{currentAdin.id} : {currentAdin.name} </ListItem>
      ));

      return (
        <>
          <ul>{lists}</ul>
        </>
      );
    }}
  </Query>
);
export default Admins;