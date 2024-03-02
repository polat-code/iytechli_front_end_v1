import React, { useState } from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import anonymousIconPhoto from "../../images/icons/anonymous_icon.svg";
import postPhoto from "../../images/post_photo.svg";
import likePostIcon from "../../images/icons/like_post_icon.svg";
import likePostIconActive from "../../images/icons/heard_red.svg";
import commentPostIcon from "../../images/icons/comment_post_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";
import ComplimentModal from "../ComplimentModal/ComplimentModal";
import LikeCountModal from "../LikeCountModal/LikeCountModal";

function Post({ content, totalLike, totalComment, images }) {
  const navigation = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  const handlePostDetail = () => {
    navigation("/anonymous-detail");
  };

  return (
    <div>
      <div class="d-flex justify-content-center mb-3">
        <div class="border rounded" style={{ maxWidth: "720px" }}>
          <a
            href=""
            style={{ textDecoration: "none", color: "black" }}
            onClick={handlePostDetail}
          >
            <div class="m-3 mb-3">
              <img src={anonymousIconPhoto} alt="" class="me-3" /> Anonim
            </div>

            <p class="mx-3">{content}</p>
          </a>

          {/* Post Photo */}
          {images && (
            <div class="d-flex flex-column flex-sm-row align-items-center my-post-photo-flex-container mb-4 ">
              <img
                src={postPhoto}
                alt=""
                class="rounded img-fluid my-3 m-sm-1"
                style={{ maxWidth: "280px", maxHeight: "200px" }}
              />
              <img
                src={postPhoto}
                alt=""
                class="rounded img-fluid"
                style={{ maxWidth: "280px", maxHeight: "200px" }}
              />
            </div>
          )}
          {/* Post Photo END */}

          {/* Interactions */}
          <div class="d-flex flex-row justify-content-around mb-3">
            {/* Like */}

            <div class="d-flex justify-content-center">
              <img
                src={isLiked ? likePostIconActive : likePostIcon}
                alt=""
                onClick={handleLikeButton}
                className="like-icon"
              />
              <a
                href=""
                className="compliment-link"
                data-bs-toggle="modal"
                data-bs-target="#users_like"
              >
                <span class="ms-3">{totalLike}</span>
              </a>
            </div>

            {/* Like END */}
            <LikeCountModal
              fullNameList={[
                "Özgürhan Polat",
                "Fatih Polat",
                "Bahar Burdar Gelioğulları",
                "Şeyma Başlar",
                "Ali Kerem Bahcıvanoğlu",
                "Kadir Olurlu",
                "Ayşenur Gül",
                "Ayşenur Gül",
                "Ayşenur Gül",
                "Ayşenur Gül",
              ]}
              numberOfUserLike={20}
            />

            {/* Comment */}
            <a href="" className="compliment-link">
              <div class="d-flex justify-content-center">
                <img src={commentPostIcon} alt="" />
                <span class="ms-3">{totalComment}</span>
              </div>
            </a>
            {/* Comment END */}

            {/* Compliment */}
            <a
              href=""
              className="compliment-link"
              data-bs-toggle="modal"
              data-bs-target="#compliment_modal"
            >
              <div class="d-flex justify-content-center">
                <img src={complimentIconPhoto} alt="" />
                <span class="ms-3">Şikayet Et</span>
              </div>
            </a>
            {/* Compliment END */}

            {/* Compliment Module*/}
            <ComplimentModal />
            {/* Compliment Module END*/}
          </div>
          {/* Interactions END */}
        </div>
      </div>
    </div>
  );
}

export default Post;
