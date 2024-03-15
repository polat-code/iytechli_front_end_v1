import React, { useEffect, useState } from "react";
import "./Anonymous.css";
import Post from "../Post/Post";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";
import { useNavigate, useLocation } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";
import ComplimentModal from "../ComplimentModal/ComplimentModal";
import { getFromLocalStorage } from "../../helpers/LocalStorage";
import NotFound404 from "../NotFound404/NotFound404";
import { getAllPosts } from "../../helpers/postApi/postApi";
import { decryption } from "../../helpers/encryption";

function Anonymous() {
  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigation = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Notification
  const [toastShow, setToastShow] = useState(false);
  const toggleToastShow = () => {
    setToastShow(!toastShow);
  };
  const [user, setUser] = useState({});

  const [posts, setPosts] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    const userFromLocal = decryption(getFromLocalStorage("_usr"));
    setUser(userFromLocal);
    const fetchData = async () => {
      try {
        const response = await getAllPosts({
          pageNo: pageNum,
          pageSize: 15,
          userId: userFromLocal.userId,
        });
        setPosts(response.data.data.content);
        console.log(response.data.data.content);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const token = getFromLocalStorage("_tkn");

  // TODO If user send a post then we have to show a toast message
  /*
   */
  // New Anonymous post navigation
  const newAnonymousPost = () => {
    navigation("/new-anonymous-post");
  };
  return token ? (
    <>
      <MainContainer>
        <Sidebar
          name={"Özgürhan"}
          surname={"Polat"}
          email={"ozgurhan.45@gmail.com"}
        />

        <div
          className="vertical-line"
          style={{ width: "2px", backgroundColor: "#F5F5F5" }}
        ></div>
        <ContentContainer>
          <PageTitle pageName={"Anonimler"} toggleSidebar={toggleSidebar} />
          <hr style={{ margin: "0px" }}></hr>
          {/* Content */}
          {/* Main */}
          <div className="d-flex flex-column flex-lg-row justify-content-lg-around">
            {/* Content */}
            <div class="mx-4">
              {/* Button */}
              <div class="d-flex justify-content-end m-3">
                <a
                  href="#"
                  class="btn btn-primary text-light pt-2"
                  onClick={newAnonymousPost}
                >
                  <img src="../img/icons/plus_icon.svg" alt="" class="mb-1" />
                  Yeni Anonim Post
                </a>
              </div>
              {/* Button END */}

              {/* Posts */}
              {posts &&
                posts.map((post, index) => {
                  return (
                    <Post
                      key={index}
                      content={post.content}
                      images={post.photoList}
                      totalLike={post.numberOfLikes}
                      totalComment={post.numberOfComments}
                    />
                  );
                })}

              {/* Posts END*/}
            </div>
            {/* Content END */}
            <ToastNotification
              message={"Tekrardan seni gördüğüme memnun oldum İytechli..."}
              title={"Hoşgeldin.."}
              toastShow={toastShow}
              toggleToastShow={toggleToastShow}
              toastType={"success"}
            />

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
}

export default Anonymous;
