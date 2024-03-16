import React, { useEffect, useState } from "react";
import "./EditUserProfile.css";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";
import { getFromLocalStorage } from "../../helpers/LocalStorage";
import { decryption } from "../../helpers/encryption";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllInfoOfUser } from "../../helpers/userApi/userApi";

function EditUserProfile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigation = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = useLocation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [user, setUser] = useState();
  const [profileStatus, setProfileStatus] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const userFromLocal = decryption(getFromLocalStorage("_usr"));
    const token = getFromLocalStorage("_tkn");
    if (!userFromLocal || !token) {
      navigation("/");
    }
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
        /*
        setIsUnknownError(true);
        setToastShow(true);
        */
      }
    };
    fetchData();
  });

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
          <div class="d-flex flex-column flex-lg-row justify-content-lg-around align-items-center mt-lg-0 mt-4">
            {/* Content */}
            <form>
              {/* Name Field */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="name" class="form-label fw-bold">
                  Name :
                </label>
                <div class="input-group input-group justify-content-sm-start">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    value={user && user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* Surname Field */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="surname" class="form-label fw-bold">
                  Surname :
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="email" class="form-label fw-bold">
                  Email :
                </label>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Telephone Field */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="telephone" class="form-label fw-bold">
                  Telephone Number :
                </label>
                <div class="input-group">
                  <input
                    type="tel"
                    class="form-control"
                    id="telephone"
                    placeholder="Telephone Number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>

              {/* Role Field */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="role" class="form-label fw-bold">
                  Role :
                </label>
                <div class="input-group justify-content-sm-start justify-content-center">
                  <span type="text" id="role" className="role-text">
                    Öğrenci
                  </span>
                </div>
              </div>

              {/* Profile Status Dropdown */}
              <div class="form-group-row flex-sm-row justify-content-sm-start  flex-column align-items-center">
                <label for="profileStatus" class="form-label fw-bold">
                  Profile Status :
                </label>
                <div class="input-group">
                  <select
                    class="form-select"
                    id="profileStatus"
                    value={profileStatus}
                    onChange={(e) => setProfileStatus(e.target.value)}
                  >
                    <option selected>Choose...</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div class="d-flex justify-content-end mt-5">
                <div class="btn-group">
                  <button class="btn rounded btn-secondary me-5">
                    İptal Et
                  </button>
                  <button class="btn rounded btn-primary">Kaydet</button>
                </div>
              </div>
            </form>
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

export default EditUserProfile;
