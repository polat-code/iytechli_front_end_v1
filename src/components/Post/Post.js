import React from "react";
import "./Post.css";
import anonymousIconPhoto from "../../images/icons/anonymous_icon.svg";
import postPhoto from "../../images/post_photo.svg";
import likePostIcon from "../../images/icons/like_post_icon.svg";
import commentPostIcon from "../../images/icons/comment_post_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";

function Post({ content, totalLike, totalComment, images }) {
  return (
    <a
      href="../anonimler_detail_sikayet/index.html"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div class="d-flex justify-content-center mb-3">
        <div class="border rounded" style={{ maxWidth: "720px" }}>
          <div class="m-3 mb-3">
            <img src={anonymousIconPhoto} alt="" class="me-3" /> Anonim
          </div>
          <p class="mx-3">{content}</p>
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
            <a href="" className="compliment-link">
              <div class="d-flex justify-content-center">
                <img src={likePostIcon} alt="" />
                <span class="ms-2">{totalLike}</span>
              </div>
            </a>
            {/* Like END */}

            {/* Comment */}
            <a href="" className="compliment-link">
              <div class="d-flex justify-content-center">
                <img src={commentPostIcon} alt="" />
                <span class="ms-2">{totalComment}</span>
              </div>
            </a>
            {/* Comment END */}

            {/* Compliment */}
            <a href="" className="compliment-link">
              <div class="d-flex justify-content-center">
                <img src={complimentIconPhoto} alt="" />
                <span class="ms-2 ">Şikayet Et</span>
              </div>
            </a>
            {/* Compliment END */}
          </div>
          {/* Interactions END */}
        </div>
      </div>
    </a>
  );
}

export default Post;
