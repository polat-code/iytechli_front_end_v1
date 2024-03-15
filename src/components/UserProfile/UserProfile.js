import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";
import { getAllInfoOfUser } from "../../helpers/userApi/userApi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/LocalStorage";
import { decryption, encrytion } from "../../helpers/encryption";
import ToastNotification from "../ToastNotification/ToastNotification";

const UserProfile = ({}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState();
  const [isUnknownError, setIsUnknownError] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const navigation = useNavigate();

  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    // Initialize toast messages as false
    setIsUnknownError(false);
    setToastShow(false);

    const userFromLocal = decryption(getFromLocalStorage("_usr"));
    const token = getFromLocalStorage("_tkn");
    if (!userFromLocal || !token) {
      navigation("/");
    }
    setUser(userFromLocal);
    const fetchData = async () => {
      const response = await getAllInfoOfUser(
        location.state, // userId (dynamic)
        userFromLocal.userId // hostId (static)
      );
      if (response.success) {
        setUser({
          name: response.data.data.name,
          surname: response.data.data.surname,
          telephone: response.data.data.telephone,
          universityRole: response.data.data.universityRole,
          email: userFromLocal.email,
          profileStatus: response.data.data.profileStatus,
        });
        userFromLocal.name = response.data.data.name;
        userFromLocal.surname = response.data.data.surname;
      } else if (!response.success) {
        // If token is expired then direct to login page.
        //navigation("/");
      } else {
        setIsUnknownError(true);
        setToastShow(true);
      }
    };
    fetchData();
  }, []);

  const handleEditProfile = () => {
    navigation("/edit-user-profile");
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
                      {user && user.name}
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
                      {user && user.surname}
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
                      {user && user.email}
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
                      {user && user.telephone}
                    </span>
                  </div>
                </div>

                {/* Role Field */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="role" class="form-label fw-bold">
                    Universite Role :
                  </label>
                  <div class="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      {user && user.universityRole}
                    </span>
                  </div>
                </div>

                {/* Profile Status Dropdown */}
                <div className="form-group-row flex-sm-row flex-column">
                  <label for="role" class="form-label fw-bold">
                    Profil Durumu :
                  </label>
                  <div class="input-group justify-content-sm-start justify-content-center">
                    <span type="text" id="role" className="normal-text">
                      {user && user.profileStatus}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
              </form>
              <div className="d-flex justify-content-end align-items-end button-space">
                <button
                  className="btn rounded btn-secondary me-lg-5 m-0"
                  onClick={handleEditProfile}
                >
                  Profili Düzenle
                </button>
              </div>
            </div>
            {isUnknownError && (
              <ToastNotification
                title={"Hata Oluştu"}
                message={"Bilinmeyen bir hata oluştu."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}

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
};

export default UserProfile;
