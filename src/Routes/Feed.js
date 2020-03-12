import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Post from "../Components/Post/";
import Loader from "../Components/Loader";

const PostWrapper = styled.div``;
const FEED = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        name
      }
      file {
        id
        url
      }
      likeCount
      isLiked
      comment {
        id
        text
        user {
          id
          name
        }
      }
      # createAt
    }
  }
`;
const FeedBlock = styled.div``;

const Feed = () => {
  const { data, loading } = useQuery(FEED);
  // console.log(loading, data);
  return (
    <FeedBlock>
      {loading && <Loader size={40} />}
      {!loading && (
        <PostWrapper>
          {data.seeFeed && data.seeFeed.map(e => <Post {...e} id={e.id} />)}
        </PostWrapper>
      )}
    </FeedBlock>
  );
};

export default Feed;
