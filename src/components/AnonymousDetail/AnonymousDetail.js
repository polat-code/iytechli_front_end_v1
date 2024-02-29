import React, { useState } from "react";
import anonymousPhoto from "../../images/icons/anonymous_icon.svg";
import postPhoto from "../../images/post_photo.svg";
import likePostIconPhoto from "../../images/icons/like_post_icon.svg";
import commentPostIconPhoto from "../../images/icons/comment_post_icon.svg";
import complimentIconPhoto from "../../images/icons/sikayet_et.svg";

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

const AnonymousDetail = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <MainContainer>
        <Sidebar
          name={"Özgürhan"}
          surname={"Polat"}
          email={"ozgurhan.45@gmail.com"}
        />

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
                <div className="border rounded" style={{ maxWidth: "720px" }}>
                  <div className="m-3 mb-3">
                    <img src={anonymousPhoto} alt="" className="me-3" /> Anonim
                  </div>
                  <p className="mx-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer eget tortor a quam fermentum sagittis a a libero.
                    Vivamus ut tincidunt nisi. Sed semper mi in libero congue
                    pretium. Integer sapien erat, ornare quis nulla et,
                    condimentum auctor magna.
                  </p>
                  {/* Post Photo */}
                  <div className="d-flex flex-column flex-sm-row align-items-center my-post-photo-flex-container mb-4 ">
                    <img
                      src={postPhoto}
                      alt=""
                      className="rounded img-fluid my-3 m-sm-1"
                      style={{ maxWidth: "280px", maxHeight: "200px" }}
                    />
                    <img
                      src={postPhoto}
                      alt=""
                      className="rounded img-fluid"
                      style={{ maxWidth: "280px", maxHeight: "200px" }}
                    />
                  </div>
                  {/* Post Photo END */}

                  {/* Interactions */}
                  <div className="d-flex flex-row justify-content-around mb-3">
                    {/* Like */}
                    <div className="d-flex justify-content-center">
                      <img src={likePostIconPhoto} alt="" />
                      <span className="ms-2">10</span>
                    </div>
                    {/* Like END */}

                    {/* Comment */}
                    <div className="d-flex justify-content-center">
                      <img src={commentPostIconPhoto} alt="" />
                      <span className="ms-2">5</span>
                    </div>
                    {/* Comment END */}

                    {/* Compliment */}
                    <a
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

                  {/* Compliment Modal */}
                  <ComplimentModal />
                  {/* Compliment Modal END */}

                  {/* Like count */}
                  <a
                    href=""
                    className="like-button"
                    data-bs-toggle="modal"
                    data-bs-target="#users_like"
                  >
                    <p className="fs-6 m-4">
                      <span className="fw-bold">10</span>
                      kişi postu beğendi
                    </p>
                  </a>
                  {/* Like count End */}

                  {/* Like count Modal */}
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

                  {/* Like count Modal END*/}

                  {/* Comment Input */}
                  <CommentInput />
                  {/* Comment Input END*/}

                  {/* Comment 1 */}
                  <Comment
                    sharedTime={"1 saat"}
                    userName={"Özgürhan"}
                    userSurname={"Polat"}
                    comment={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget tortor a quam fermentum sagittis a a libero. Vivamus ut tincidunt nisi. Sed semper mi in libero congue pretium. Integer sapien erat, ornare quis nulla et, condimentum auctor magna."
                    }
                    likeCount={25}
                    dislikeCount={8}
                  />

                  {/* Comment 1 END*/}

                  {/* Comment 2 */}
                  <Comment
                    sharedTime={"1 saat"}
                    userName={"Kadir"}
                    userSurname={"Polat"}
                    comment={
                      "Bu yorumu çok seviyorum. İnşallah iyi bir durumda olan bir kişi bu yorumu beğenir :)"
                    }
                    likeCount={25}
                    dislikeCount={8}
                  />

                  {/* Comment 2 END*/}
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
  );
};

export default AnonymousDetail;
