import React, { useState } from "react";
import styled from "styled-components";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQuery";

const FollowButtonContainerBlock = styled.div`
  width: 50%;
`;

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowingS] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });
  console.log("isFollowing", isFollowing);
  const onClick = () => {
    if (isFollowingS) {
      setIsFollowingS(false);
      unfollowMutation();
    } else {
      setIsFollowingS(true);
      followMutation();
    }
  };
  return (
    <FollowButtonContainerBlock>
      <FollowButtonPresenter isFollowing={isFollowingS} onClick={onClick} />
    </FollowButtonContainerBlock>
  );
};

export default FollowButtonContainer;
