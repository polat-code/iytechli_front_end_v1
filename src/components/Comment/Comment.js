import React, { useState, useEffect } from "react";
import "./Comment.css";
import userIconPhoto from "../../images/icons/user_icon.svg";
import commentLikeIconPhoto from "../../images/icons/comment_like_icon.svg";
import commentLikeIconPhotoActive from "../../images/icons/comment_like_icon_active.svg";
import commentDislikeIconPhoto from "../../images/icons/comment_dislike_icon.svg";
import commentDislikeIconPhotoActive from "../../images/icons/comment_dislike_icon_active.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";
import CommentComplimentModal from "../CommentComplimentModal/CommentComplimentModal";
import { getFromLocalStorage } from "../../helpers/LocalStorage";
import { decryption } from "../../helpers/encryption";
import {
  dislikeComment,
  likeComment,
} from "../../helpers/commentApi/commentApi";

const Comment = ({
  commentId,
  sharedTime,
  commentOwnerName,
  commentOwnerSurname,
  commentOwnerUserId,
  comment,
  likeCount,
  dislikeCount,
  isUserLikeComment,
  isUserDislikeComment,
}) => {
  const [isLiked, setIsLiked] = useState(isUserLikeComment);
  const [isDisliked, setIsDisliked] = useState(isUserDislikeComment);
  const userFromLocal = decryption(getFromLocalStorage("_usr"));
  const [numOfLike, setNumOfLike] = useState(likeCount);
  const [numOfDislike, setNumOfDislike] = useState(dislikeCount);

  useEffect(() => {
    if (isLiked && isDisliked) {
      setIsDisliked(false);
      setNumOfDislike(numOfDislike - 1);
    }
  }, [isLiked]);

  useEffect(() => {
    if (isDisliked && isLiked) {
      setIsLiked(false);
      setNumOfLike(numOfLike - 1);
    }
  }, [isDisliked]);

  const handleCommentDislikeIcon = async () => {
    const response = await dislikeComment({
      userId: userFromLocal.userId,
      commentId: commentId,
    });
    if (response.success) {
      setNumOfDislike(isDisliked ? numOfDislike - 1 : numOfDislike + 1);
    } else {
      console.log("There is an error!");
    }
    setIsDisliked(!isDisliked);
  };

  const handleCommentLikeIcon = async () => {
    const response = await likeComment({
      userId: userFromLocal.userId,
      commentId: commentId,
    });
    if (response.success) {
      setNumOfLike(isLiked ? numOfLike - 1 : numOfLike + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="border-bottom border-top rounded">
      <div className="d-flex ms-3">
        <img src={userIconPhoto} alt="" />
        <div className="ms-3">
          <span className="time-definition">{sharedTime} önce</span>
          <h6 className="fw-bold message-font-size">
            {commentOwnerName} {commentOwnerSurname}
          </h6>
        </div>
      </div>

      <p className="mx-3">{comment}</p>

      <div className="d-flex flex-row justify-content-around mb-3">
        <div
          className="d-flex justify-content-center custom-cursor"
          onClick={handleCommentLikeIcon}
        >
          <img
            src={isLiked ? commentLikeIconPhotoActive : commentLikeIconPhoto}
            alt=""
          />
          <span className="ms-2">{numOfLike}</span>
        </div>

        <div
          className="d-flex justify-content-center custom-cursor"
          onClick={handleCommentDislikeIcon}
        >
          <img
            src={
              isDisliked
                ? commentDislikeIconPhotoActive
                : commentDislikeIconPhoto
            }
            alt=""
            className="like-icon"
          />
          <span className="ms-2">{numOfDislike}</span>
        </div>

        <div
          className="compliment-link"
          data-bs-toggle="modal"
          data-bs-target="#comment_compliment_modal"
        >
          <div className="d-flex justify-content-center">
            <img src={complimentIconPhoto} alt="" />
            <span className="ms-2">Şikayet Et</span>
          </div>
        </div>

        <CommentComplimentModal
          userId={userFromLocal.userId}
          commentId={commentId}
        />
      </div>
    </div>
  );
};

export default Comment;
