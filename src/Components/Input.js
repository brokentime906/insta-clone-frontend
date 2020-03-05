import React from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  padding: 0 15px;
`;

const Input = setting => {
  return <InputBlock {...setting}></InputBlock>;
};

export default Input;
