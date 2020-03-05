import React from "react";
import styled from "styled-components";

const Box = styled.div`
  ${props => props.theme.whiteBox}
`;
const PostBlock = styled(Box)`
  width: 70%;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const PostHeader = styled(Box)`
  border: 0 0;
  font-weight: 800;
  font-size: 14px;
  padding: 15px;
`;

const PostFileImage = styled(Box)`
  border: 0 0;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostComment = styled(Box)`
  border: 0 0;
  padding: 15px;
`;
const Post = data => {
  return (
    <PostBlock>
      <PostHeader>{data.user.name}</PostHeader>
      <PostFileImage>Image Postion</PostFileImage>
      <PostComment>
        {data.comment.length > 0 ? data.comment : "comment자리"}
      </PostComment>
    </PostBlock>
  );
};

export default Post;
