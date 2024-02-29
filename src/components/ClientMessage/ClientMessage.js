import React from "react";
import "./ClientMessage";
import chatProfilePhoto from "../../images/Profile.svg";

function ClientMessage({ messageArray, time }) {
  return (
    <div className="d-flex align-items-baseline mb-5">
      <div className="position-relative avatar">
        <img
          src={chatProfilePhoto}
          className="img-fluid rounded-circle"
          alt=""
        />
      </div>
      <div className="pe-2">
        {messageArray.map((message) => {
          return <Message message={message} />;
        })}
        <div>
          <div className="small">{time}</div>
        </div>
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

export default ClientMessage;
