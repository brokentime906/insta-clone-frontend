import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";
import FollowButton from "./FollowButton";
const Box = styled.div`
  ${props => props.theme.whiteBox};
`;
const UserCardBlock = styled(Box)`
  display: flex;
  min-width: 175px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div``;
const UserCard = ({ className, id, name, avatar, isFollowing, isMe }) => {
  return (
    !isMe && (
      <UserCardBlock className={className}>
        <Avatar url={avatar} size="ld" />
        <FatText text={name} />
        <ButtonWrapper>
          {!isMe && <FollowButton isFollowing={isFollowing} id={id} />}
        </ButtonWrapper>
      </UserCardBlock>
    )
  );
};

export default UserCard;
