import React, { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import "./NewAnonymousPost2.css";
import Advertisement from "../Advertisement/Advertisement";

const NewAnonymousPost2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
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
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <div class="mx-4 responsive-new-post-size my-4 justify-content-center">
              {/* Post Detail Input*/}
              <div class="mb-3">
                <label for="postDetail" class="form-label">
                  Post Detayı :{" "}
                </label>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  id="postDetail"
                  placeholder="Lütfen düşüncelerinizi yazınız..."
                  style={{ height: "120px" }}
                ></textarea>
              </div>
              {/* Post Detail Input END*/}

              {/* Photo Input */}
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">
                  Fotoğraf 1 (İsteğe Bağlı) :{" "}
                </label>
                <input class="form-control" type="file" id="formFileMultiple" />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">
                  Fotoğraf 2 (İsteğe Bağlı) :{" "}
                </label>
                <input class="form-control" type="file" id="formFileMultiple" />
              </div>
              {/* Photo Input END*/}

              {/* Admin Note Input*/}
              <div class="mb-3">
                <label for="postDetail" class="form-label">
                  Admine Not (İsteğe Bağlı) :{" "}
                </label>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                  id="postDetail"
                  placeholder="Lütfen düşüncelerinizi yazınız..."
                  style={{ height: "120px" }}
                ></textarea>
              </div>
              {/* Admin Note Input END*/}

              {/* Save and Cancel Buttons*/}

              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-secondary p-2 px-3 me-3 mt-3"
                >
                  İptal Et
                </button>
                <button
                  type="button"
                  class="btn btn-success p-2 px-3 ms-3 mt-3"
                >
                  Paylaş
                </button>
              </div>

              {/* Save and Cancel Buttons END*/}
            </div>
            <Advertisement />
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default NewAnonymousPost2;
