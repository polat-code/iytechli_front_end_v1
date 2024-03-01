import React, { useState } from "react";
import "./Login.css";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isToastShow, setIsToastShow] = useState(false);
  const [isInputsBlank, setIsInputsBlank] = useState(false);

  const handleLogin = () => {
    // Reset InputsBlank Notification status
    setIsInputsBlank(false);
    setIsToastShow(false);

    if (email && password) {
      // Send to database and check whether it is correct or not.
      navigation("/anonymous", { state: { login: "success" } });
    } else {
      setIsInputsBlank(true);
      setIsToastShow(true);
      // Show a toast notification named email and password cant be empty
    }
  };
  return (
    <>
      <div className="relative-div color-block-background"></div>
      <div className="relative-div input-container d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between">
        <div className="relative-div d-flex justify-content-center align-items-center w-50">
          <div className="relative-div d-flex flex-column">
            {/* Title */}
            <h6 className="welcome-back-style">
              Hoşgeldin <span className="fw-bold">IYTECHLI</span> !!!
            </h6>
            <h1>Giriş Yap</h1>
            {/* Title END */}

            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label htmlFor="email" className="email-text">
                Email
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="border rounded-2 border-secondary p-2 email-text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative-div d-flex flex-column email input-group w-100">
              <label htmlFor="password" className="password-text mt-4">
                Şifre
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="border rounded-2 border-secondary p-2 password-text"
                onClick={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex justify-content-center mt-5">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handleLogin}
              >
                Giriş Yap
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>
            <div className="relative-div d-flex justify-content-center mt-3">
              <a href="#" className="forget-password-button">
                Şifremi Unuttum?
              </a>
            </div>
            <div className="relative-div d-flex flex-row justify-content-center mt-4 mb-lg-0 mb-5">
              <span className="account-message me-3">
                Henüz bir hesabım yok?
              </span>
              <a href="#" className="sign-up-button fw-bold">
                Ücretsiz Kaydol.
              </a>
            </div>
            {isInputsBlank && (
              <ToastNotification
                title={"Kullanıcı Adı ve Şifre"}
                message={"Lütfen Kullancı adınızı ve şifrenizi giriniz!"}
                toastShow={isToastShow}
                toastType={"warning"}
                toggleToastShow={() => setIsToastShow(!isToastShow)}
              />
            )}
          </div>
        </div>

        <div className="relative-div">
          <img src={animePhoto} alt="" className="img-fluid anime-photo-size" />
        </div>
      </div>
    </>
  );
}

export default Login;
