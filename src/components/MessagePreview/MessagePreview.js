import React from "react";
import "./MessagePreview.css";
import userIconPhoto from "../../images/icons/user_icon.svg";

function MessagePreview() {
  return (
    <a href="" class="message">
      <div class="border-bottom">
        {/*  Message 1 Title */}
        <div class="d-flex ms-3">
          <img src={userIconPhoto} alt="" />
          <div class="ms-3">
            <span class="time-definition">3 dk önce</span>
            <h6 class="fw-bold message-font-size">Özgürhan Polat</h6>
          </div>
        </div>
        {/*  Message 1 Title END */}

        {/*  Message 1 Message Detail */}
        <div class="mx-md-5 ms-3 me-2 mb-2 message-font-size">
          <span class=" fw-bold">Kadir : </span>
          <span class="">İzmir’ e bu hafta sonu ne zaman gideceksiniz ?</span>
        </div>
        {/*  Message 1 Message Detail END */}
      </div>
    </a>
  );
}

export default MessagePreview;
