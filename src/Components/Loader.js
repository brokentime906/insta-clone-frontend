import React from "react";
import styled, { keyframes } from "styled-components";
import { Insta } from "./Icons";

const Animation = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:1;
    }
    100%{
        opacity:0;
    }

`;

const LoaderBlock = styled.div`
  animation: ${Animation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
`;

const Loader = () => {
  return (
    <LoaderBlock>
      <Insta size={36} />
    </LoaderBlock>
  );
};

export default Loader;
