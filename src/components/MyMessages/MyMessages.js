import React, { useState } from "react";
import "./MyMessages.css";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";
import MessagePreview from "../MessagePreview/MessagePreview";
import searchIconPhoto from "../../images/icons/search_icon.svg";

function MyMessages() {
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
          <PageTitle pageName={"Mesajlarım"} toggleSidebar={toggleSidebar} />
          <hr style={{ margin: "0px" }}></hr>

          <div class="d-flex flex-column flex-lg-row justify-content-lg-around">
            {/*  Content */}
            <div class="d-flex mx-4 my-4 justify-content-center">
              <div>
                {/*  Search */}
                <div class="input-icon">
                  <img src={searchIconPhoto} class="fa fa-user" />
                  <input
                    type="text"
                    placeholder="Search for name"
                    class="border rounded-pill"
                    style={{ width: "100%" }}
                  />
                </div>
                {/*  Search END */}

                {/*  Messages*/}
                <div class="border rounded mt-4" style={{ minHeight: "600px" }}>
                  {/*  Message 1 */}
                  <MessagePreview />
                  {/*  Message 1 END*/}

                  {/*  Message 2*/}
                  <MessagePreview />
                  {/*  Message 2 END*/}

                  {/*  Message 3*/}
                  <MessagePreview />
                  {/*  Message 3 END*/}
                </div>

                {/*  Messages END*/}
              </div>
            </div>
            {/*  Content END */}

            {/*  Reklam */}
            <Advertisement />
            {/*  Reklam END */}
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default MyMessages;
