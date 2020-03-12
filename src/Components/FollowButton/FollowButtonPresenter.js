import React from "react";
import styled from "styled-components";
import Button from "../Button";

const FollowButtonPresenterBlock = styled.div`
  width: 100%;
`;

const FollowButtonPresenter = ({ isFollowing, onClick }) => {
  return (
    <FollowButtonPresenterBlock>
      <Button text={isFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
    </FollowButtonPresenterBlock>
  );
};

export default FollowButtonPresenter;
