import React from "react";
import styled from "styled-components";
import { HeartEmpty, HeartFull, Comment as CommentIcon } from "../Icons";
import FatText from "../FatText";
import Avatar from "../Avatar";
import TextareaAutosize from "react-autosize-textarea";
const whiteBox = styled.div`
  ${props => props.theme.whiteBox};
`;
const Post = styled(whiteBox)`
  width: 100%;
  max-width: 600px;
`;

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 15px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
`;
const File = styled.div`
  position: absolute;
  top: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: none;
  background-position: center;
  width: 100%;
  height: 500px;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.div`
  cursor: pointer;
`;
const Buttons = styled.div`
  ${Button} {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  display: flex;
  margin-bottom: 10px;
`;
const Meta = styled.div`
  padding: 15px;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  padding: 0 15px 20px;
  width: 100%;
  font-size: 14px;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const Comments = styled.ul`
  margin-top: 10px;
`;
const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-left: 5px;
  }
`;
const PostPresenter = ({
  user,
  file,
  comment,
  isLiked,
  likeCount,
  newComment,
  setIsLiked,
  setLikeCount,
  currentItem,
  toggleLike,
  onKeyPress,
  selfComments
}) => {
  // console.log(file);
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={user.avatar} />
        <UserColumn>
          <FatText text={user.name}></FatText>
          <Location>location info</Location>
        </UserColumn>
      </Header>
      <Files>
        {file.map((e, i) => (
          <File key={e.id} url={e.url} showing={i === currentItem} />
        ))}
      </Files>
      <Meta>
        <Buttons>
          <Button onClick={() => toggleLike()}>
            {isLiked ? <HeartFull /> : <HeartEmpty />}
          </Button>
          <Button>
            <CommentIcon />
          </Button>
        </Buttons>
        <FatText text={likeCount === 1 ? "1 like " : `${likeCount} likes`} />
        {comment && (
          <Comments>
            {comment.map(e => (
              <Comment key={e.id}>
                <FatText text={e.user.name} />
                {e.text}
              </Comment>
            ))}
            {selfComments.map(e => (
              <Comment key={e.id}>
                <FatText text={e.user.name} />
                {e.text}
              </Comment>
            ))}
          </Comments>
        )}
      </Meta>

      <Textarea
        placeholder="Add a comment.."
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
      />
    </Post>
  );
};

export default PostPresenter;
