import React, { useState } from "react";
import "./RenewPassword.css";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";

function RenewPassword() {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const navigation = useNavigate();
  const [toastShow, setToastShow] = useState(false);

  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [isNotEnoughLength, setIsNotEnoughLength] = useState(false);
  const [isNotHaveValidChat, setIsNotHaveValidChat] = useState(false);
  const [isPasswordsNotEqual, setIsPasswordsNotEqual] = useState(false);

  const handlePassword = () => {
    // Reset The status of notifications
    setIsPasswordBlank(false);
    setIsNotEnoughLength(false);
    setIsNotHaveValidChat(false);
    setIsPasswordsNotEqual(false);
    setToastShow(false); // Hide any existing toast

    // Check inputs
    if (firstPassword && secondPassword) {
      if (firstPassword.length >= 8 && secondPassword.length >= 8) {
        if (!/\s/.test(firstPassword) && !/\s/.test(secondPassword)) {
          if (firstPassword === secondPassword) {
            navigation("/login");
          } else {
            setIsPasswordsNotEqual(true);
            setToastShow(true);
          }
        } else {
          setIsNotHaveValidChat(true);
          setToastShow(true);
        }
      } else {
        setIsNotEnoughLength(true);
        setToastShow(true);
      }
    } else {
      setIsPasswordBlank(true);
      setToastShow(true);
    }
  };

  return (
    <>
      <div className="relative-div color-block-background"></div>
      <div className="relative-div d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between">
        <div className="relative-div d-flex justify-content-center align-items-center w-50">
          <div className="relative-div d-flex flex-column">
            {/* Title */}

            <h1 className="d-flex justify-content-center">Yeni Şifre Girme</h1>
            {/* Title END */}

            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label
                htmlFor="email"
                className="email-text d-flex justify-content-center mb-2"
              >
                Yeni Şifrenizi Girin :
              </label>
              <input
                type="password"
                name=""
                id="email"
                className="border rounded-2 border-secondary p-2 email-text"
                value={firstPassword}
                onChange={(e) => setFirstPassword(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label
                htmlFor="email"
                className="email-text d-flex justify-content-center mb-2"
              >
                Yeni Şifrenizi Tekrar Girin :
              </label>
              <input
                type="password"
                name=""
                id="email"
                className="border rounded-2 border-secondary p-2 email-text"
                value={secondPassword}
                onChange={(e) => setSecondPassword(e.target.value)}
              />
            </div>

            <div className="relative-div d-flex justify-content-center mt-5">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handlePassword}
              >
                Şifreyi Yenile
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative-div">
          <img src={animePhoto} alt="" className="img-fluid anime-photo-size" />
        </div>

        {isPasswordBlank && (
          <ToastNotification
            title={"Şifre"}
            message={"Şifre Boş Olamaz!"}
            toastShow={toastShow}
            toastType={"warning"}
            toggleToastShow={() => setToastShow(!toastShow)}
            key={1}
          />
        )}
        {isNotEnoughLength && (
          <ToastNotification
            title={"Şifre"}
            message={"Şifre en az 8 karakterden oluşması lazım."}
            toastShow={toastShow}
            toastType={"warning"}
            toggleToastShow={() => setToastShow(!toastShow)}
          />
        )}
        {isNotHaveValidChat && (
          <ToastNotification
            title={"Şifre"}
            message={"Şifre de boşluk bulunamaz."}
            toastShow={toastShow}
            toastType={"warning"}
            toggleToastShow={() => setToastShow(!toastShow)}
          />
        )}

        {isPasswordsNotEqual && (
          <ToastNotification
            title={"Şifre"}
            message={
              "Şifreler ayni değil. Lütfen şifrenizi 2 defa doğru giriniz."
            }
            toastShow={toastShow}
            toastType={"warning"}
            toggleToastShow={() => setToastShow(!toastShow)}
          />
        )}
      </div>
    </>
  );
}

export default RenewPassword;
