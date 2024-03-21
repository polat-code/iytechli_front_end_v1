import React, { useEffect, useState } from "react";
import anonymousPhoto from "../../images/icons/anonymous_icon.svg";
import likePostIcon from "../../images/icons/like_post_icon.svg";
import likePostIconActive from "../../images/icons/heard_red.svg";
import commentPostIconPhoto from "../../images/icons/comment_post_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";
import { Modal } from "react-bootstrap";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";
import Comment from "../Comment/Comment";
import "./AnonymousDetail.css";
import ComplimentModal from "../ComplimentModal/ComplimentModal";
import CommentInput from "../CommentInput/CommentInput";
import LikeCountModal from "../LikeCountModal/LikeCountModal";
import { getFromLocalStorage } from "../../helpers/LocalStorage";
import NotFound404 from "../NotFound404/NotFound404";
import { useLocation } from "react-router-dom";
import { getComments } from "../../helpers/commentApi/commentApi";
import { decryption } from "../../helpers/encryption";
import { getPostDetailByPostId, likePost } from "../../helpers/postApi/postApi";
import { useNavigate } from "react-router-dom";
import PostComplimentModal from "../PostComplimentModal/PostComplimentModal";

const AnonymousDetail = () => {
  const navigation = useNavigate();

  const userFromLocalStorage = getFromLocalStorage("_usr");
  const userFromLocal = userFromLocalStorage
    ? decryption(userFromLocalStorage)
    : null;
  const token = getFromLocalStorage("_tkn");

  if (!userFromLocal || !token) {
    navigation("/");
  }

  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { postId } = location.state || {};
  if (!postId) {
    console.log("Hello");
  }
  const [postDetail, setPostDetail] = useState();
  const [comments, setComments] = useState();
  const [postDetailUserLikes, setPostDetailUserLikes] = useState();

  const [commentShowTrigger, setCommentShowTrigger] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLike, setNumberOfLike] = useState(0);
  const handleLikeButton = async () => {
    const response = await likePost({
      userId: userFromLocal.userId,
      postId: postId,
    });

    if (response.success) {
      if (response.data.statusCode === 200) {
        setIsLiked(!isLiked);
        setNumberOfLike(isLiked ? numberOfLike - 1 : numberOfLike + 1);
      } else if (response.data.statusCode === 404) {
        console.log("user or post not found");
      } else {
        console.log("kodlanmamış bilinmeyen bir hata oluştu.");
      }
    }
  };

  useEffect(() => {
    // get user Info and comment Info
    if (!userFromLocal || !token) {
      navigation("/");
      return;
    }

    const fetchComments = async () => {
      const response = await getComments({
        userId: userFromLocal.userId,
        postId: postId,
      });
      if (response.success) {
        if (response.data.statusCode === 200) {
          //console.log(response.data);
          setComments(response.data.data);
        } else if (response.data.statusCode === 404) {
          console.log("User or post not found");
        } else {
          console.log("kodlanmamış bir hata oluştu.");
        }
      } else {
        // Navigate to "/"
        console.log("Bilinmeyen bir hata oluştu.");
      }
    };
    fetchComments();

    const fetchPostDetail = async () => {
      const response = await getPostDetailByPostId({
        userId: userFromLocal.userId,
        postId: postId,
      });

      if (response.success) {
        if (response.data.statusCode === 200) {
          //console.log(response.data);
          setPostDetail(response.data.data);
          setIsLiked(response.data.data.currentUserLikePost);
          setNumberOfLike(response.data.data.numberOfLikes);
          setPostDetailUserLikes(response.data.data.postDetailUserLikes);
        } else if (response.data.statusCode === 404) {
          console.log("User or post not found");
        } else {
          console.log("kodlanmamış bir hata oluştu.");
        }
      } else {
        // Navigate to "/"
        console.log("Bilinmeyen bir hata oluştu.");
      }
    };

    fetchPostDetail();
    setCommentShowTrigger(false);
  }, [postId, commentShowTrigger, numberOfLike]);

  const handlePhotoShow = (image) => {
    setSelectedImage(image);
    setShowPhoto(true);
  };

  return token && userFromLocal ? (
    <>
      <MainContainer>
        <Sidebar />

        <div
          classNameName="vertical-line"
          style={{ width: "2px", backgroundColor: "#F5F5F5" }}
        ></div>
        <ContentContainer>
          <PageTitle pageName={"Anonimler"} toggleSidebar={toggleSidebar} />
          <hr style={{ margin: "0px" }}></hr>
          {/* Content */}
          {/* Main */}
          <div className="d-flex flex-column flex-lg-row justify-content-lg-around">
            {/* Content */}
            <div className="mx-4">
              {/* Post */}
              <div className="d-flex justify-content-center mb-3 mt-3">
                <div
                  className="border rounded responsive-post-detail-container"
                  style={{ maxWidth: "720px" }}
                >
                  <div className="m-3 mb-3">
                    <img src={anonymousPhoto} alt="" className="me-3" /> Anonim
                  </div>
                  <p className="mx-3">{postDetail && postDetail.content}</p>
                  {/* Post Photo */}
                  {postDetail && postDetail.photoList && (
                    <div className="d-flex flex-column flex-sm-row align-items-center my-post-photo-flex-container mb-4 ">
                      {postDetail.photoList.map((image, index) => {
                        return (
                          <img
                            key={index}
                            src={image.image}
                            alt="post photo"
                            className="rounded img-fluid my-3 m-sm-1"
                            style={{ maxWidth: "280px", maxHeight: "200px" }}
                            onClick={() => handlePhotoShow(image.image)}
                          />
                        );
                      })}
                    </div>
                  )}
                  {/* Photo Modal */}
                  <Modal
                    show={showPhoto}
                    onHide={() => setShowPhoto(false)}
                    centered
                  >
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
                    <div
                      className="d-flex justify-content-center custom-cursor"
                      onClick={handleLikeButton}
                    >
                      <img
                        alt=""
                        src={isLiked ? likePostIconActive : likePostIcon}
                      />
                      <span className="ms-2">{numberOfLike}</span>
                    </div>
                    {/* Like END */}

                    {/* Comment */}
                    <div className="d-flex justify-content-center">
                      <img src={commentPostIconPhoto} alt="" />
                      <span className="ms-2">
                        {postDetail && postDetail.numberOfComments}
                      </span>
                    </div>
                    {/* Comment END */}

                    {/* Compliment */}
                    <a
                      className="compliment-link custom-cursor"
                      data-bs-toggle="modal"
                      data-bs-target="#post_compliment_modal"
                    >
                      <div className="d-flex justify-content-center">
                        <img src={complimentIconPhoto} alt="" />
                        <span className="ms-2">Şikayet Et</span>
                      </div>
                    </a>
                    {/* Compliment END */}
                  </div>
                  {/* Interactions END */}

                  {/* Compliment Modal */}
                  <PostComplimentModal
                    userId={userFromLocal.userId}
                    postId={postId}
                  />
                  {/* Compliment Modal END */}

                  {/* Like count */}
                  <a
                    href=""
                    className="like-button"
                    data-bs-toggle="modal"
                    data-bs-target="#users_like"
                  >
                    <p className="fs-6 m-4">
                      <span className="fw-bold">{numberOfLike + " "}</span>
                      kişi postu beğendi
                    </p>
                  </a>
                  {/* Like count End */}

                  {/* Like count Modal */}
                  <LikeCountModal
                    userLikesData={postDetailUserLikes}
                    numberOfUserLike={numberOfLike}
                  />

                  {/* Like count Modal END*/}

                  {/* Comment Input */}
                  <CommentInput
                    postId={postId}
                    setCommentShowTrigger={setCommentShowTrigger}
                  />
                  {/* Comment Input END*/}

                  {/* Comments */}
                  {comments &&
                    comments.map((comment) => {
                      return (
                        <Comment
                          commentId={comment.commentId}
                          sharedTime={"1 saat önce"}
                          userName={comment.commentOwnerName}
                          userSurname={comment.commentOwnerSurname}
                          comment={comment.commentContent}
                          likeCount={comment.numberOfLikes}
                          dislikeCount={comment.numberOfDislikes}
                          userDislikeComment={comment.userDislikeComment}
                          userLikeComment={comment.userLikeComment}
                        />
                      );
                    })}

                  {/* Comments END*/}
                </div>
              </div>
              {/* Post END*/}
            </div>
            {/* Content END */}

            {/* Reklam */}
            <Advertisement />
            {/* Reklam END */}
          </div>
          {/* Main END */}

          {/* Content END */}
        </ContentContainer>
      </MainContainer>
    </>
  ) : (
    <NotFound404 />
  );
};

export default AnonymousDetail;
