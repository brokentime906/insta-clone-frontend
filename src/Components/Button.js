import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.button`
  width: 100%;
  height: 30px;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  background-color: ${props => props.theme.blueColor};
  font-weight: 500;
  text-align: center;
  padding: 5px 0;
  font-size: 12px;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => {
  return <ButtonBlock onClick={onClick}>{text}</ButtonBlock>;
};

export default Button;
