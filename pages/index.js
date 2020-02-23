import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import fetch from "node-fetch";
import Admins from "../components/Admins";
import Nav from "../components/Nav";
import token from "../tools/token";

const cache = new InMemoryCache();

cache.writeData({
  data: {
    isLoggedIn: !!token.get,
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8101/api",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: token.get() ? token.get() : "", //Your Auth token extraction logic
      },
    });
  },
  cache,
  fetch,
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
