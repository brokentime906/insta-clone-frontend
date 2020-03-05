import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import { LOGIN, SIGNUP, LOCAL_LOGIN } from "./AuthQuery";
import { toast } from "react-toastify";

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
const Auth = () => {
  const [action, setAction] = useState("LogIn");

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  const [LOGIN_QUERY] = useMutation(LOGIN, {
    variables: { email: email.value, password: password.value }
  });

  const [SIGNUP_QUERY] = useMutation(SIGNUP, {
    variables: {
      name: name.value,
      email: email.value,
      password: password.value
    }
  });
  const [LOCAL_LOGIN_QUERY] = useMutation(LOCAL_LOGIN);
  const onSubmit = async e => {
    e.preventDefault();
    if (action === "LogIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { confirmPassword }
          } = await LOGIN_QUERY();
          if (confirmPassword !== "") {
            const token = confirmPassword;
            LOCAL_LOGIN_QUERY({ variables: { token } });
            toast.success("로그인 성공");
          } else {
            toast.error("로그인 실패");
          }
        } catch (e) {
          console.error(e);
          toast.error(
            "네트워크 문제가 있습니다 잠시후에 로그인을 시도해주세요"
          );
        }
      }
    } else if (action === "SignUp") {
      try {
        if (name.value !== "" && email.value !== "" && password.value !== "") {
          const {
            data: { createAccount }
          } = await SIGNUP_QUERY();
          if (createAccount) {
            toast.success("회원가입 성공");
          } else {
            toast.error("회원가입 실패");
          }
        }
      } catch (e) {
        console.log(e);
        toast.error("네트워크 문제 : 다시 회원가입을 시도해주세요");
      }
    }
  };
  console.log(name, password, email);

  return (
    <AuthPresenter
      name={name}
      email={email}
      password={password}
      onSubmit={onSubmit}
      action={action}
      setAction={setAction}
    ></AuthPresenter>
  );
};

export default Auth;
