import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClientMessage from "../ClientMessage/ClientMessage";
import CrossClientMessage from "../CrossClientMessage/CrossClientMessage";
import "./Chat.css";
import MainContainer from "../MainContainer/MainContainer";
import Advertisement from "../Advertisement/Advertisement";
import PageTitle from "../PageTitle/PageTitle";
import ContentContainer from "../ContentContainer/ContentContainer";
import sendIcon from "../../images/icons/send_icon.svg";
import chatProfilePhoto from "../../images/Profile.svg";

function Chat({ userFullName }) {
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
          <PageTitle pageName="Mesajlarım" toggleSidebar={toggleSidebar} />
          <hr style={{ margin: "0px" }}></hr>

          <div className="d-flex flex-column flex-lg-row justify-content-lg-around">
            <div className="card chat-container mx-auto rounded-3 mt-2 mt-lg-4">
              <div className="card-header bg-transparent">
                <div className="navbar navbar-expand p-0">
                  <ul className="navbar-nav me-auto align-items-center">
                    <li className="nav-item">
                      <a href="#!" className="nav-link">
                        <div
                          className="position-relative"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            padding: "2px",
                          }}
                        >
                          <img
                            src={chatProfilePhoto}
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link">
                        {userFullName}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card-body p-4"
                style={{ height: "500px", overflow: "auto" }}
              >
                <ClientMessage
                  messageArray={
                    ["Hi helh, are you available to chat?"]} time = {"3:31" + "PM"}
                />
                <CrossClientMessage
                  messageArray={["Sure", "Let me know when you're available?"]} time={"3:31" + "PM"}
                />
                <ClientMessage
                  messageArray={["3:00pm??", "Maybe"]} time = {"3:31" + "PM"}
                />
                <CrossClientMessage
                  messageArray={["Cool", "It is good!"]} time = {"3:31" + "PM"}
                />
              </div>
              <div className="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border m-1 mx-1 m-sm-2 mx-sm-3 px-3 rounded-4"
                    style={{ height: "4rem" }}
                    placeholder="Write a message..."
                  />

                  <div className="input-group-text bg-transparent border-0">
                    <button className="btn btn-light text-secondary">
                      <img src={sendIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Advertisement />
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default Chat;
