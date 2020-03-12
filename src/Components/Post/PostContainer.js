import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInputManual from "../../Hooks/useInputManual";
import PostPresenter from "./PostPresenter";
import { useMutation, useQuery } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQuery";
import { toast } from "react-toastify";
import { ME } from "../../SharedQuery";

const PostContainer = ({ id, isLiked, likeCount, user, file, comment }) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [selfComments, setSelfCommnets] = useState([]);
  const myComment = useInputManual("");

  const [currentItem, setCurrentItem] = useState(0);
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: id
    }
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: {
      postId: id,
      text: myComment.value
    }
  });
  const slide = () => {
    if (currentItem === file.length - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
  }, [currentItem]);
  const toggleLike = async () => {
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
    try {
      const result = await toggleLikeMutation();
      console.log(result);
    } catch (e) {
      console.log(e);
      setIsLiked(!isLikedS);
      toast.error("Cant register like");
    }
  };

  const { data: me } = useQuery(ME);
  const onKeyPress = e => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      setSelfCommnets([
        ...selfComments,
        { id: 1, user: { name: me.me.name }, text: myComment.value }
      ]);
      // addCommentMutation();
      myComment.setValue("");
    }
  };

  return (
    <PostPresenter
      key={id}
      user={user}
      file={file}
      comment={comment}
      isLiked={isLikedS}
      likeCount={likeCountS}
      newComment={myComment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

export default PostContainer;
