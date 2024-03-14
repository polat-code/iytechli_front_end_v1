import React, { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import "./NewAnonymousPost2.css";
import Advertisement from "../Advertisement/Advertisement";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";
import NotFound404 from "../NotFound404/NotFound404";
import { getFromLocalStorage } from "../../helpers/LocalStorage";

const NewAnonymousPost2 = () => {
  const [postDescription, setPostDescription] = useState("");
  const [noteToAdmin, setNoteToAdmin] = useState("");
  const [images, setImages] = useState({ photo1: "", photo2: "" });
  const navigation = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && /image\/(jpeg|png|gif|svg)/.test(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages({
          ...images,
          [event.target.id]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Lütfen JPEG, PNG veya GIF formatında bir resim seçiniz.");
    }
  };

  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toast Notification
  const [isNotValidPost, setIsNotValidPost] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  const handleNewPostButton = () => {
    setIsNotValidPost(false);
    setToastShow(false);
    if (postDescription.length > 15) {
      navigation("/anonymous");
    } else {
      setIsNotValidPost(true);
      setToastShow(true);
    }
  };

  const handleCancelButton = () => {
    navigation("/anonymous");
  };

  const token = true; //getFromLocalStorage("_tkn");

  return token ? (
    <>
      <MainContainer>
        <Sidebar
          email={"ozgurhanpolat@std.iyte.edu.tr"}
          name={"Özgürhan"}
          surname={"Polat"}
          isOpen={isSidebarOpen}
        />
        <div
          className="vertical-line"
          style={{ width: "2px", backgroundColor: "#F5F5F5" }}
        ></div>
        <ContentContainer>
          <PageTitle
            pageName={"Yeni Anonim Post"}
            toggleSidebar={toggleSidebar}
          />
          <hr style={{ margin: "0px" }}></hr>
          <div className="d-flex flex-column flex-lg-row align-items-center">
            <div className="mx-4 responsive-new-post-size my-4 justify-content-center">
              {/* Post Detail Input*/}
              <div className="mb-3">
                <label for="postDetail" className="form-label">
                  Post Detayı :{" "}
                </label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  id="postDetail"
                  placeholder="Lütfen düşüncelerinizi yazınız..."
                  style={{ height: "120px" }}
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                ></textarea>
              </div>
              {/* Post Detail Input END*/}

              {/* Photo Input */}
              <div className="mb-3">
                <label htmlFor="photo1" className="form-label">
                  Fotoğraf 1 (İsteğe Bağlı) :{" "}
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="photo1"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleFileChange}
                />
                <div>
                  {images.photo1 && (
                    <img
                      className="rounded my-2"
                      src={images.photo1}
                      alt="Photo 1 Preview"
                      style={{ width: "150px", height: "150px" }}
                    />
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="photo2" className="form-label">
                    Fotoğraf 2 (İsteğe Bağlı) :{" "}
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="photo2"
                    accept="image/jpeg, image/png, image/gif"
                    onChange={handleFileChange}
                  />
                  {images.photo2 && (
                    <img
                      className="rounded my-2"
                      src={images.photo2}
                      alt="Photo 2 Preview"
                      style={{ width: "150px", height: "150px" }}
                    />
                  )}
                </div>
              </div>
              {/* Photo Input END*/}

              {/* Admin Note Input*/}
              <div className="mb-3">
                <label for="postDetail" className="form-label">
                  Admine Not (İsteğe Bağlı) :{" "}
                </label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  id="postDetail"
                  placeholder="Lütfen düşüncelerinizi yazınız..."
                  style={{ height: "120px" }}
                  value={noteToAdmin}
                  onChange={(e) => setNoteToAdmin(e.target.value)}
                ></textarea>
              </div>
              {/* Admin Note Input END*/}

              {/* Save and Cancel Buttons*/}

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary p-2 px-3 me-3 mt-3"
                  onClick={handleCancelButton}
                >
                  İptal Et
                </button>
                <button
                  type="button"
                  className="btn btn-success p-2 px-3 ms-3 mt-3"
                  onClick={handleNewPostButton}
                >
                  Paylaş
                </button>
                {isNotValidPost && (
                  <ToastNotification
                    title={"Post Detayı"}
                    message={
                      "Post Detayı en az 15 karakterden oluşması gerekiyor. "
                    }
                    toastShow={toastShow}
                    toastType={"warning"}
                    toggleToastShow={() => setToastShow(!toastShow)}
                  />
                )}
              </div>

              {/* Save and Cancel Buttons END*/}
            </div>
            <Advertisement />
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  ) : (
    <NotFound404 />
  );
};

export default NewAnonymousPost2;
