import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User, Insta } from "./Icons";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQuery";
const HeaderBlock = styled.header`
  /* ${props => props.theme.whiteBox}; */
  border: 0;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius:0;
  width: 100%;
  background-color:white;
  max-width: 935px;
  margin-bottom:60px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 25px 0;
`;
const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  font-size: 14px;
  border-radius: 3px;
  width: 100%;
  &::placeholder {
    opacity: 0.9;
    font-weight: 200;
  }
`;
const HeaderColumn = styled.div`
  width: 30%;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }

  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;
const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const Header = ({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
    console.log("push !!");
  };
  const { data } = useQuery(ME);
  return (
    <HeaderBlock>
      <HeaderColumn>
        <HeaderLink to="/">
          <Insta />
        </HeaderLink>{" "}
      </HeaderColumn>

      <HeaderColumn>
        <form onSubmit={onSearchSubmit}>
          <SearchInput {...search} placeholder={"Search"} />{" "}
        </form>
      </HeaderColumn>
      <HeaderColumn>
        <HeaderLink to="/explore">
          {" "}
          <Compass />{" "}
        </HeaderLink>
        <HeaderLink to="/notification">
          <HeartEmpty />
        </HeaderLink>
        {!data?.me ? (
          <HeaderLink to="/#">
            <User />
          </HeaderLink>
        ) : (
          <HeaderLink to={data.me.name}>
            <User />
          </HeaderLink>
        )}
      </HeaderColumn>
    </HeaderBlock>
  );
};

export default withRouter(Header);
