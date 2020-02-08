import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from "node-fetch";
import Admins from "../components/Admins";
import Nav from "../components/Nav";

const client = new ApolloClient({
  uri: "http://localhost:8000/api",
  fetch
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Nav />
        <Admins />
      </div>
    </ApolloProvider>
  );
}

export default App;
