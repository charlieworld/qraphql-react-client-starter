import React from "react";
import { useQuery } from "react-apollo";
import Login from "./login";
import IsLoginQuery from "../model/query/isLogin";


const IsLoggedIn = (input) => {
  const { data } = useQuery(IsLoginQuery);
  const Page = input.page;
  return data.isLoggedIn ? <Page /> : <Login />;
}

function IsAuth(page) {
  return (
    IsLoggedIn(page)
  );
}

export default IsAuth;
