import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import anonymousIconPhoto from "../../images/icons/anonymous_icon.svg";
import likePostIcon from "../../images/icons/like_post_icon.svg";
import likePostIconActive from "../../images/icons/heard_red.svg";
import commentPostIcon from "../../images/icons/comment_post_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";
import ComplimentModal from "../ComplimentModal/ComplimentModal";
import LikeCountModal from "../LikeCountModal/LikeCountModal";
import { likePost } from "../../helpers/postApi/postApi";
import { decryption } from "../../helpers/encryption";
import { getFromLocalStorage } from "../../helpers/LocalStorage";

function Post({
  content,
  totalLike,
  totalComment,
  images,
  postUserId,
  currentUserLikePost,
}) {
  const navigation = useNavigate();

  const [isLiked, setIsLiked] = useState(currentUserLikePost);
  const [showPhoto, setShowPhoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [numberOfLike, setNumberOfLike] = useState(totalLike);
  const user = decryption(getFromLocalStorage("_usr"));

  useEffect(() => {
    setIsLiked(currentUserLikePost);
  }, [currentUserLikePost]);

  const handleLikeButton = async () => {
    const response = await likePost({
      userId: user.userId,
      postId: postUserId,
    });

    if (response.success) {
      if (response.data.statusCode === 200) {
        setIsLiked(!isLiked);
        setNumberOfLike(isLiked ? numberOfLike - 1 : numberOfLike + 1);
      } else if (response.data.statusCode === 404) {
        console.log("user or post not found");
      } else {
        console.log("kodlanmamış bilinmeyen bir hata oluştu.");
        console.log(response);
      }
    }
  };

  const handlePhotoShow = (image) => {
    setSelectedImage(image);
    setShowPhoto(true);
  };

  const handlePostDetail = () => {
    navigation("/anonymous-detail");
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <div className="border w-100 rounded" style={{ maxWidth: "720px" }}>
          <div href="" style={{ textDecoration: "none", color: "black" }}>
            <div className="m-3 mb-3">
              <img src={anonymousIconPhoto} alt="" class="me-3" /> Anonim
            </div>

            <p className="mx-3">{content}</p>
          </div>

          {/* Post Photo */}

          {images && (
            <div className="d-flex flex-column flex-sm-row align-items-center my-post-photo-flex-container mb-4 ">
              {images.map((image) => {
                return (
                  <img
                    src={image.image}
                    alt=""
                    className="rounded img-fluid"
                    style={{ maxWidth: "280px", maxHeight: "200px" }}
                    onClick={() => handlePhotoShow(image.image)}
                  />
                );
              })}
            </div>
          )}

          {/* Photo Modal */}
          <Modal show={showPhoto} onHide={() => setShowPhoto(false)} centered>
            <Modal.Body>
              <div className="d-flex justify-content-center">
                <img
                  src={selectedImage}
                  alt=""
                  className="img-fluid w-100 rounded"
                  centered
                />
              </div>
            </Modal.Body>
          </Modal>

          {/* Photo Modal END */}
          {/* Post Photo END */}

          {/* Interactions */}
          <div className="d-flex flex-row justify-content-around mb-3">
            {/* Like */}

            <div className="d-flex justify-content-center">
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
                <span className="ms-3">{numberOfLike}</span>
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
            <div
              href=""
              className="compliment-link cursor-pointer"
              onClick={handlePostDetail}
            >
              <div className="d-flex justify-content-center">
                <img src={commentPostIcon} alt="" />
                <span className="ms-2">{totalComment}</span>
              </div>
            </div>
            {/* Comment END */}

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
