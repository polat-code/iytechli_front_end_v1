import React, { useState } from "react";
import "./EmailVerification.css";
import { useNavigate } from "react-router-dom";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";

function EmailVerification() {
  const [emailCode, setEmailCode] = useState("");
  const navigation = useNavigate();

  const handleVerificationCode = () => {
    navigation("/login");
  };
  return (
    <>
      <div className="relative-div color-block-background"></div>
      <div className="relative-div d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between">
        <div className="relative-div d-flex justify-content-center align-items-center w-50">
          <div className="relative-div d-flex flex-column">
            {/* Title */}

            <h1 className="d-flex justify-content-center">Email Onaylama</h1>
            {/* Title END */}

            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label
                htmlFor="email"
                className="email-text d-flex justify-content-center mb-2"
              >
                Emaile yollanan kodu giriniz :
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="border rounded-2 border-secondary p-2 email-text"
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
              />
            </div>

            <div className="relative-div d-flex justify-content-center mt-5">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handleVerificationCode}
              >
                Doğrula
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative-div">
          <img src={animePhoto} alt="" className="img-fluid anime-photo-size" />
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
