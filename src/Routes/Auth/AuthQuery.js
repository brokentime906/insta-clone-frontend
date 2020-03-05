import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation confirmPassword($email: String!, $password: String!) {
    confirmPassword(email: $email, password: $password)
  }
`;

export const SIGNUP = gql`
  mutation createAccount($name: String!, $email: String!, $password: String!) {
    createAccount(name: $name, email: $email, password: $password)
  }
`;

export const LOCAL_LOGIN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;
