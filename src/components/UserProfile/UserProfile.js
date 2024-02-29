import React, { useState } from "react";
import "./UserProfile.css";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";

function UserProfile() {
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
          <PageTitle pageName={"Profil"} toggleSidebar={toggleSidebar} />

          <hr style={{ margin: "0px" }}></hr>
          {/* Main */}
          <div className="d-flex flex-column flex-lg-row justify-content-lg-around align-items-center mt-lg-0 mt-4">
            {/* Content */}
            <div className="w-50">
              <form>
                {/* Name Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="name" class="form-label fw-bold">
                    Name :
                  </label>
                  <div className="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      Özgürhan
                    </span>
                  </div>
                </div>

                {/* Surname Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="surname" class="form-label fw-bold">
                    Surname :
                  </label>
                  <div className="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      Polat
                    </span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="email" class="form-label fw-bold">
                    Email :
                  </label>
                  <div className="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="email" className="normal-text">
                      ozgurhanpolat@std.iyte.edu.tr
                    </span>
                  </div>
                </div>

                {/* Telephone Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="telephone" class="form-label fw-bold">
                    Telephone :
                  </label>
                  <div class="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="telephone" className="normal-text">
                      05531521381
                    </span>
                  </div>
                </div>

                {/* Role Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="role" class="form-label fw-bold">
                    Role :
                  </label>
                  <div class="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      Role
                    </span>
                  </div>
                </div>

                {/* Profile Status Dropdown */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="role" class="form-label fw-bold">
                    Profile Status :
                  </label>
                  <div class="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      Public
                    </span>
                  </div>
                </div>

                {/* Buttons */}
              </form>
              <div className="d-flex justify-content-end align-items-end button-space">
                <button className="btn rounded btn-secondary me-lg-5 m-0">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Content END */}

            {/* Reklam */}
            <Advertisement />
            {/* Reklam END */}
          </div>
          {/* Main END */}
        </ContentContainer>
      </MainContainer>
    </>
  );
}

export default UserProfile;
