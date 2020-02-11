import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withAdminsQuery from '../model/query/withAdminsQuery'

const ListItem = styled.li`
  list-style-type: none;
  border: black solid 1px;
`;

const Admins = ({data}) => {
  const { loading, error, admins } = data;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const lists = admins.map(admin => (
    <ListItem key={admin.id}>{admin.id} : {admin.name} </ListItem>
  ));

  return (
    <>
      <ul>{lists}</ul>
    </>
  );
};

Admins.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.shape({}),
    error: PropTypes.shape({}),
    admins: PropTypes.arrayOf(PropTypes.shape({}))
  }),
};

export default withAdminsQuery(Admins);