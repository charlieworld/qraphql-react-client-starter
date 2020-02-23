import ApolloClient, { InMemoryCache } from "apollo-boost";
import fetch from "node-fetch";
import token from "./token";

const cache = new InMemoryCache();

cache.writeData({
  data: {
    isLoggedIn: !!token.get(),
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

export default client;