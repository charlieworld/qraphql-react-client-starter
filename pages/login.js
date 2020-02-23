import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../tools/client";
import Login from "../components/Login";

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Login/>
    </ApolloProvider>
  );
}

export default Index;
