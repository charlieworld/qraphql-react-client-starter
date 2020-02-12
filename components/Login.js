import React, { useState } from 'react'
//import { useRouter } from 'next/router'
//import token from '../tools/token'
import styled from 'styled-components';
import color from '../assist/color';


const Container = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 20px 40px 40px 40px;
  border-radius: 5px;
  background-color: ${color.primary};
  box-shadow: ${color.shadow} 8px 8px 10px;
`;

const FormRow =  styled.label`
  display: block;
  margin-bottom: 20px;
`;

const FormRowTitle =  styled.span`
  display: inline-block;
  width: 100px;
  margin-right: 20px;
`;

const LoginBtn = styled.div`
  width: 200px;
  padding: 5px;
  text-align: center;
  background-color: ${color.botton};
  border: ${color.botton} solid 1px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:active {
    color: #c6c6c6;
    background-color: transparent;
    border: ${color.botton} solid 1px;
  }
`;


const Index = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log(`name: ${name} | password: ${password}`)
  };

  return (
    <>
      <Container>
          <h1>Login</h1>
          <form>
            <FormRow>
              <FormRowTitle>Name:</FormRowTitle>
              <input type="text" name="name" onChange= {onNameChange} value={name} />
            </FormRow>
            <FormRow>
              <FormRowTitle>Password:</FormRowTitle>
              <input type="password" name="password" onChange= {onPasswordChange} value={password} />
            </FormRow>
            <LoginBtn onClick= {onSubmit}>Login</LoginBtn>
          </form>
      </Container>
    </>
  );
}

export default Index;