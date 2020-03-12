import React from "react";
import styled from "styled-components";
const getSize = size => {
  let sz;
  if (size == "sm") {
    sz = 30;
  } else if (size == "md") {
    sz = 50;
  } else {
    sz = 70;
  }
  return `
            width:${sz}px;
            height:${sz}px;
    `;
};
const AvatarBlock = styled.div`
  ${props => getSize(props.size)};
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 50%;
`;

const Avatar = ({ size = "sm", url }) => {
  return <AvatarBlock size={size} url={url}></AvatarBlock>;
};

export default Avatar;
