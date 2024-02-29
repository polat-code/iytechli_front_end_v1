import React, { useEffect } from "react";
import "./Sidebar.css";
import profilePhoto from "../../images/Profile.svg";
import anonimPhoto from "../../images/icons/anonim.svg";
import hocalarPhoto from "../../images/icons/hocalar.svg";
import lessonsPhoto from "../../images/icons/dersler.svg";
import topluluklarPhoto from "../../images/icons/topluluklar.svg";
import bolumlerPhoto from "../../images/icons/bölümler.svg";
import mekanlarPhoto from "../../images/icons/mekanlar.svg";
import messagePhoto from "../../images/icons/mesajlarım.svg";
import logoutPhoto from "../../images/icons/cikisyap.svg";

const Sidebar = ({ email, name, surname,isOpen }) => {
  
  return (
    <div
      id="bdSidebar"
      className={`d-flex flex-column flex-shrink-0 p-3 offcanvas-lg offcanvas-start ${isOpen ? 'show' : ''}`}
      style={{ width: "280px" }}
    >
      <div
        className="d-flex"
        style={{ marginTop: "40px", marginBottom: "60px" }}
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
          <a href="../anonimler/index.html" className="">
            <img src={anonimPhoto} className="p-1" alt="" />
            Anonimler
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={hocalarPhoto} className="p-1" alt="" />
            Hocalar
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={lessonsPhoto} className="p-1" alt="" />
            Dersler
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="active">
            <img src={topluluklarPhoto} className="p-1" alt="" />
            Topluluklar
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={bolumlerPhoto} className="p-1" alt="" />
            Bölümler
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={mekanlarPhoto} className="p-1" alt="" />
            Mekanlar
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={messagePhoto} className="p-1" alt="" />
            Mesajlarım
          </a>
        </li>
        <li className="nav-item mb-3">
          <a href="#" className="">
            <img src={logoutPhoto} className="p-1" alt="" />
            Çıkış Yap
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
