import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ToastNotification = ({
  message,
  title,
  toastShow,
  toggleToastShow,
  toastType,
}) => {
  const getBodyColor = (type) => {
    switch (type) {
      case "success":
        return "white";
      case "warning":
        return "dark";
      default:
        return "white"; // Default color
    }
  };
  return (
    <>
      <ToastContainer position="top-center">
        <Toast
          show={toastShow}
          onClose={toggleToastShow}
          delay={5000}
          // success ? "success" : warning ? "warning" : "danger"
          bg={toastType}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body style={{ color: getBodyColor(toastType) }}>
            {message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastNotification;
