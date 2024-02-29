import React from "react";
import "./PageTitle.css";
import menuIcon from "../../images/icons/menu-icon.svg"

function PageTitle({ pageName ,toggleSidebar}) {

  return (
    <div className="d-flex">
      <div className="p-2 d-lg-none d-flex text-black pt-4 pb-0">
        <a
          href="#"
          className="text-white"
          data-bs-toggle="offcanvas"
          data-bs-target="#bdSidebar"
          onClick={(e) => {
            e.preventDefault();
            toggleSidebar();
          }}
        >
          <img src={menuIcon} alt="" className="pb-2" />
        </a>
      </div>

      <div
        className="d-flex page-title justify-content-center pt-2"
        style={{ width: "100%" }}
      >
        <span className="d-flex justify-content-center align-items-center fs-1 ">
          {pageName}
        </span>
      </div>
    </div>
  );
}

export default PageTitle;
