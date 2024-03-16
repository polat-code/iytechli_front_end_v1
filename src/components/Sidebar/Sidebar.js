import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../../images/Profile.svg";
import anonimPhoto from "../../images/icons/anonim.svg";
import hocalarPhoto from "../../images/icons/hocalar.svg";
import lessonsPhoto from "../../images/icons/dersler.svg";
import topluluklarPhoto from "../../images/icons/topluluklar.svg";
import bolumlerPhoto from "../../images/icons/bölümler.svg";
import mekanlarPhoto from "../../images/icons/mekanlar.svg";
import messagePhoto from "../../images/icons/mesajlarım.svg";
import logoutPhoto from "../../images/icons/cikisyap.svg";
import iyteCarPhoto from "../../images/icons/iyte_car_icon.svg";
import {
  getFromLocalStorage,
  removeKeyFromLocalStorage,
} from "../../helpers/LocalStorage";
import { decryption } from "../../helpers/encryption";
import { getAllInfoOfUserByEmail } from "../../helpers/userApi/userApi";

const Sidebar = ({ isOpen }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigation = useNavigate();
  const [activeElement, setActiveElement] = useState();

  // TODO Burada kullanıcı bilgilerini almak için backend e getUserById gibi bir  istek at.

  useEffect(() => {
    const user = decryption(getFromLocalStorage("_usr"));
    const token = getFromLocalStorage("_tkn");

    if (!user && !token) {
      navigation("/");
    }

    const fetchData = async () => {
      const response = await getAllInfoOfUserByEmail(user.email);
      if (response.success) {
        if (response.data.statusCode === 200) {
          const data = response.data.data;
          setName(data.name);
          setSurname(data.surname);
          setEmail(user.email);
        } else if (response.data.statusCode === 404) {
          // usernotfound exception
          console.log("User Not Found");
        } else {
          console.log("Kodlanmamış bir hata oluştu.");
        }
      } else {
        // direct to "/" path
        navigation("/");
      }
    };
    fetchData();
    const anonymousElement = document.querySelector("#anonymous");
    setActiveElement(anonymousElement);
    anonymousElement.classList.add("active");
  }, [email, name, surname]);

  // Handle Navigations

  const handleAnonymous = () => {
    const anonymousElement = document.querySelector("#anonymous");
    if (!anonymousElement.classList.contains("active")) {
      anonymousElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(anonymousElement);
    }
    navigation("/anonymous");
  };
  const handleTeacher = () => {
    const teacherElement = document.querySelector("#teacher");
    if (!teacherElement.classList.contains("active")) {
      teacherElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(teacherElement);
    }
    navigation("/teachers");
  };
  const handleLesson = () => {
    const lessonElement = document.querySelector("#lesson");
    if (!lessonElement.classList.contains("active")) {
      lessonElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(lessonElement);
    }
    navigation("/lessons");
  };
  const handleCommunity = () => {
    const communityElement = document.querySelector("#community");
    if (!communityElement.classList.contains("active")) {
      communityElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(communityElement);
    }
    navigation("/communities");
  };

  const handleDepartment = () => {
    const departmentElement = document.querySelector("#department");
    if (!departmentElement.classList.contains("active")) {
      departmentElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(departmentElement);
    }
    navigation("/departments");
  };
  const handlePlace = () => {
    const placeElement = document.querySelector("#place");
    if (!placeElement.classList.contains("active")) {
      placeElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(placeElement);
    }
    navigation("/places");
  };
  const handleMessage = () => {
    const myMessageElement = document.querySelector("#message");
    if (!myMessageElement.classList.contains("active")) {
      myMessageElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(myMessageElement);
    }
    navigation("/my-messages");
  };
  const handleIyteCar = () => {
    const iyteCarElement = document.querySelector("#iytecar");
    if (!iyteCarElement.classList.contains("active")) {
      iyteCarElement.classList.add("active");
      activeElement.classList.remove("active");
      setActiveElement(iyteCarElement);
    }
    navigation("/iyte-car");
  };
  const handleLogout = () => {
    removeKeyFromLocalStorage("_tkn");
    removeKeyFromLocalStorage("_usr");
    navigation("/");
  };
  const handleProfile = () => {
    const user = decryption(getFromLocalStorage("_usr"));
    navigation("/user-profile", { state: user.userId });
  };

  return (
    <div
      id="bdSidebar"
      className={`d-flex flex-column flex-shrink-0 p-3 offcanvas-lg offcanvas-start ${
        isOpen ? "show" : ""
      }`}
      style={{ width: "280px" }}
    >
      <div
        className="d-flex cursor-pointer"
        style={{ marginTop: "40px", marginBottom: "60px" }}
        onClick={handleProfile}
      >
        <img
          src={profilePhoto}
          className="img-fluid rounded me-2"
          width="50px"
          alt=""
        />
        <span>
          <h6 className="mt-1 mb-0 fw-bold">
            {name} {surname}
          </h6>
          <small>{email}</small>
        </span>
      </div>

      <ul className="mynav nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-3">
          <a id="anonymous" href="#" className="" onClick={handleAnonymous}>
            <img src={anonimPhoto} className="p-1" alt="" />
            <span className="ms-2">Anonimler</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="iytecar" href="#" className="" onClick={handleIyteCar}>
            <img src={iyteCarPhoto} className="p-1" alt="" />
            <span className="ms-2">İyte Araç</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="teacher" href="#" className="" onClick={handleTeacher}>
            <img src={hocalarPhoto} className="p-1" alt="" />
            <span className="ms-2">Hocalar</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="lesson" href="#" className="" onClick={handleLesson}>
            <img src={lessonsPhoto} className="p-1" alt="" />
            <span className="ms-2">Dersler</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="community" href="#" className="" onClick={handleCommunity}>
            <img src={topluluklarPhoto} className="p-1" alt="" />
            <span className="ms-2">Topluluklar</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="department" href="#" className="" onClick={handleDepartment}>
            <img src={bolumlerPhoto} className="p-1" alt="" />
            <span className="ms-2">Bölümler</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="place" href="#" className="" onClick={handlePlace}>
            <img src={mekanlarPhoto} className="p-1" alt="" />
            <span className="ms-2">Mekanlar</span>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a id="message" href="#" className="" onClick={handleMessage}>
            <img src={messagePhoto} className="p-1" alt="" />
            <span className="ms-2">Mesajlarım</span>
          </a>
        </li>

        <li className="nav-item mb-3">
          <a id="logout" href="#" className="" onClick={handleLogout}>
            <img src={logoutPhoto} className="p-1" alt="" />
            <span className="ms-2">Çıkış Yap</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
