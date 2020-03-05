import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const AuthBlock = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  width:100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  padding: 0 20px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  margin-bottom: 15px;
  width: 100%;
  input {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
const AuthPresenter = ({
  action,
  email,
  password,
  onSubmit,
  name,
  setAction
}) => {
  return (
    <AuthBlock>
      <Form>
        {action === "LogIn" ? (
          <form onSubmit={onSubmit}>
            <Input placeholder={"email"} {...email} />
            <Input placeholder={"password"} {...password} />
            <Button text={"Log In"} />
          </form>
        ) : (
          <form onSubmit={onSubmit}>
            <Input placeholder={"name"} {...name} />
            <Input placeholder={"email"} {...email} />
            <Input placeholder={"password"} {...password} />
            <Button text={"Sign Up"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "LogIn" ? (
          <>
            Don't Have Account ?
            <Link onClick={() => setAction("SignUp")}> Sign Up</Link>
          </>
        ) : (
          <>
            Have Account ?
            <Link onClick={() => setAction("LogIn")}> Log In</Link>
          </>
        )}
      </StateChanger>
    </AuthBlock>
  );
};

export default AuthPresenter;
