import React from "react";
import Login from "../components/Login"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20vh;
`;

function LoginPage() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default LoginPage;