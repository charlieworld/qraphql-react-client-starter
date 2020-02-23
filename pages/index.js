import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../tools/client";
import Admins from "../components/Admins";
import Nav from "../components/Nav";
import IsAuth from "./_isAuth";


const Page = () => {
  return (
    <>
      <Nav />
      <Admins />
    </>
  );
}

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <IsAuth page={Page} />
    </ApolloProvider>
  );
}

export default Index;
