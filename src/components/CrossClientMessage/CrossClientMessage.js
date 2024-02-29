import React from "react";
import "./CrossClientMessage";
import chatOtherUserIcon from "../../images/icons/chat_ui_other_user_icon.svg";

function CrossClientMessage({ messageArray, time }) {
  return (
    <div className="d-flex align-items-baseline text-end justify-content-end mb-5">
      <div className="pe-2">
        {messageArray.map((message) => {
          return <Message message={message} />;
        })}
        <div>
          <div className="small">{time}</div>
        </div>
      </div>
      <div className="position-relative avatar">
        <img
          src={chatOtherUserIcon}
          style={{ width: "100px" }}
          className="img-fluid rounded-circle"
          alt=""
        />
      </div>
    </div>
  );
}

const Message = ({ message }) => {
  return (
    <div>
      <div
        className="card card-text d-inline-block p-2 px-3 m-1"
        style={{ backgroundColor: "#C8BCF6" }}
      >
        {message}
      </div>
    </div>
  );
};

export default CrossClientMessage;
