import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from "node-fetch";
import Login from "../components/Login"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20vh;
`;

const client = new ApolloClient({
  uri: "http://localhost:8101/api",
  fetch
});

function LoginPage() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Login />
      </Container>
    </ApolloProvider>

  );
}

export default LoginPage;