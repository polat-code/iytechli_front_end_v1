import React from "react";
import "./Comment.css";
import userIconPhoto from "../../images/icons/user_icon.svg";
import commentLikeIconPhoto from "../../images/icons/comment_like_icon.svg";
import commentDislikeIconPhoto from "../../images/icons/comment_dislike_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";

const Comment = ({
  sharedTime,
  userName,
  userSurname,
  comment,
  likeCount,
  dislikeCount,
}) => {
  return (
    <div className="border-bottom border-top rounded">
      {/* Comment Title */}
      <div className="d-flex ms-3">
        <img src={userIconPhoto} alt="" />
        <div className="ms-3">
          <span className="time-definition">{sharedTime} önce</span>
          <h6 className="fw-bold message-font-size">
            {userName} {userSurname}
          </h6>
        </div>
      </div>
      {/* Comment Title END */}

      {/* Comment Text*/}
      <p className="mx-3">{comment}</p>
      {/* Comment Text END*/}

      {/* Interactions */}
      <div className="d-flex flex-row justify-content-around mb-3">
        {/* Like */}
        <div className="d-flex justify-content-center">
          <img src={commentLikeIconPhoto} alt="" />
          <span className="ms-2">{likeCount}</span>
        </div>
        {/* Like END */}

        {/* Dislike */}
        <div className="d-flex justify-content-center">
          <img src={commentDislikeIconPhoto} alt="" />
          <span className="ms-2">{dislikeCount}</span>
        </div>
        {/* Dislike END */}

        {/* Compliment */}
        <a
          href=""
          className="compliment-link"
          data-bs-toggle="modal"
          data-bs-target="#compliment_modal"
        >
          <div className="d-flex justify-content-center">
            <img src={complimentIconPhoto} alt="" />
            <span className="ms-2">Şikayet Et</span>
          </div>
        </a>
        {/* Compliment END */}
      </div>
      {/* Interactions END */}
    </div>
  );
};

export default Comment;
