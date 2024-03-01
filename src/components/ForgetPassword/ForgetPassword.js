import React, { useState } from "react";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import "./ForgetPassword.css";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState();

  const handleResetPassword = () => {
    // Make invisible for email.
    const verificationCodeBlock = document.querySelector(
      "#password-email-verification-code"
    );
    verificationCodeBlock.classList.toggle("d-none");
    const resetPasswordButton = document.querySelector("#resetPasswordButton");
    resetPasswordButton.disabled = true;

    // Make visible for email code.
    const emailVerificationCodeBlock = document.querySelector(
      "#email-verification"
    );
    emailVerificationCodeBlock.classList.toggle("d-none");
  };

  const handleVerificationCode = () => {};

  return (
    <>
      <div className="relative-div color-block-background"></div>
      <div className="relative-div d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between">
        <div className="relative-div d-flex justify-content-center align-items-center w-50">
          <div className="relative-div d-flex flex-column">
            {/* Title */}

            <h1 className="d-flex justify-content-center">Şifre Yenileme</h1>
            {/* Title END */}
            <div id="email-verification">
              <div className="relative-div d-flex flex-column email responsive-input-grup">
                <label
                  htmlFor="email"
                  className="email-text d-flex justify-content-center mb-2"
                >
                  Lütfen emailinizi giriniz :
                </label>
                <input
                  type="text"
                  name=""
                  id="email"
                  className="border rounded-2 border-secondary p-2 email-text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative-div d-flex justify-content-center mt-5">
                <button
                  id="resetPasswordButton"
                  className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                  onClick={handleResetPassword}
                >
                  Yenile
                  <img src={loginButtonIconPhoto} alt="" />
                </button>
              </div>
            </div>

            {/* Email Code */}
            <div id="password-email-verification-code" className="d-none">
              <div className="relative-div d-flex flex-column email responsive-input-grup mt-4">
                <label
                  htmlFor="email"
                  className="email-text d-flex justify-content-center mb-2"
                >
                  Lütfen emailinizi gönderilen kodu giriniz :
                </label>
                <input
                  type="text"
                  name=""
                  id="email"
                  className="border rounded-2 border-secondary p-2 email-text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
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
        </div>

        <div className="relative-div">
          <img src={animePhoto} alt="" className="img-fluid anime-photo-size" />
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
