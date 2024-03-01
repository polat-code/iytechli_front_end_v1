import React, { useState } from "react";
import soonPhoto from "../../images/SoonPhoto.svg";
import "./SoonPage.css";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../Sidebar/Sidebar";
import ContentContainer from "../ContentContainer/ContentContainer";
import PageTitle from "../PageTitle/PageTitle";
import Advertisement from "../Advertisement/Advertisement";

const SoonPage = ({ pageName }) => {
  // Sidebar and sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <MainContainer>
        <Sidebar />
        <div
          className="vertical-line"
          style={{ width: "2px", backgroundColor: "#F5F5F5" }}
        ></div>
        <ContentContainer>
          <PageTitle pageName={pageName} toggleSidebar={toggleSidebar} />,
          <hr style={{ margin: "0px" }}></hr>
          <div class="d-flex flex-column flex-lg-row justify-content-lg-around justify-content-center">
            {/*  Content */}
            <div className="ps-xxl-5 ps-xl-2 ps-lg-3 ps-sm-5 ps-2">
              <img className="img-fluid" src={soonPhoto} alt="soon Photo" />
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
};

export default SoonPage;
