import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import FatText from "../Components/FatText";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import UserCard from "../Components/UserCard";
import Loader from "../Components/Loader";

const SearchBlock = styled.div`
  height: 50vh;
  text-align: center;
`;
const SEARCH = gql`
  query searchPost($term: String!) {
    seePost(term: $term) {
      file {
        url
      }
      likeCount
    }
    seeUser(term: $term) {
      avatar
      name
      id
      isFollowing
      isMe
    }
  }
`;
const UserCards = styled.div`
  display: flex;
  width: 100%;
  ${UserCard} {
    margin-right: 15px;
  }
`;
const Search = withRouter(({ location: { search } }) => {
  const searchTerm = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: searchTerm === undefined,
    variables: {
      term: searchTerm
    }
  });
  console.log(data, "is datas");
  return (
    <SearchBlock>
      {searchTerm === undefined && <Loader />}
      {loading && <FatText text={"Searching"} />}
      {!loading && data && data.seeUser && data.seeUser.length !== 0 && (
        <UserCards>
          {data.seeUser.map(e => (
            <UserCard
              isFollowing={e.isFollowing}
              isMe={e.isMe}
              className={e.id}
              name={e.name}
              avatar={e.avatar}
              id={e.id}
            />
          ))}
        </UserCards>
      )}
    </SearchBlock>
  );
});

export default Search;
