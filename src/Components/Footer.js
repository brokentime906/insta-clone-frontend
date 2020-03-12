import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 60px 100px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  &:not(:last-child) {
    padding-right: 30px;
  }
`;
const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;
const Copyright = styled.div`
  color: ${props => props.theme.darkGreyColor};
`;
const Footer = () => {
  return (
    <FooterBlock>
      <List>
        <ListItem>
          {" "}
          <Link href="#"> ABOUT US</Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link href="#"> SUPPORT</Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link href="#"> PRESS</Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link href="#"> API</Link>
        </ListItem>
        <ListItem>
          {" "}
          <Link href="#"> PRIVACY</Link>
        </ListItem>
      </List>
      <Copyright> InstaClone {new Date().getFullYear()} &copy;</Copyright>
    </FooterBlock>
  );
};

export default Footer;
