import React, { useState } from "react";
import "./EmailVerification.css";
import { useLocation, useNavigate } from "react-router-dom";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import { verifyOtp } from "../../helpers/authApi/authApi";
import ToastNotification from "../ToastNotification/ToastNotification";

function EmailVerification() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const { email, password } = location.state;
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigate();

  // Toast Notifications
  const [toastShow, setToastShow] = useState(false);
  const [isOtpInvalid, setIsOtpInvalid] = useState(false);
  const [isOtpExpired, setIsOtpExpired] = useState(false);
  const [isUserNotFound, setIsUserNotFound] = useState(false);
  const [isCredentialsInvalid, setIsCredentialsInvalid] = useState(false);
  const [isUnknownError, setIsUnknownError] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);

  const handleVerificationCode = async () => {
    // Disable all other toastNotifications
    setToastShow(false);
    setIsOtpInvalid(false);
    setIsOtpExpired(false);
    setIsUserNotFound(false);
    setIsCredentialsInvalid(false);
    setIsUnknownError(false);

    setIsLoading(true);
    const response = await verifyOtp({ email, password, otp });
    setIsLoading(false);

    if (response.success) {
      if (response.data.statusCode === 200) {
        setIsLoading(true);
        setIsOtpValid(true);
        setToastShow(true);
        setTimeout(() => {
          navigation("/");
        }, 2000);
        // Send successfull message
      } else if (response.data.statusCode === 411) {
        // Otp is not valid
        setIsOtpInvalid(true);
        setToastShow(true);
      } else if (response.data.statusCode === 498) {
        // otp is expired
        setIsOtpExpired(true);
        setToastShow(true);
      } else if (response.data.statusCode === 404) {
        // user is not found
        setIsUserNotFound(true);
        setToastShow(true);
      } else if (response.data.statusCode === 403) {
        // username and password is wrong
        setIsCredentialsInvalid(true);
        setToastShow(true);
      }
    } else {
      // Show unknown error message
      setIsUnknownError(true);
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
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <div className="relative-div d-flex justify-content-center mt-5">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handleVerificationCode}
                disabled={isLoading}
              >
                {" "}
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Yükleniyor...
                  </>
                ) : (
                  "Doğrula"
                )}
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>
          </div>
          {isOtpValid && (
            <ToastNotification
              title={"Doğrulandı"}
              message={"Onay kodunuz başarılı bir şekilde onaylandı!"}
              toastShow={toastShow}
              toastType={"success"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}

          {isUnknownError && (
            <ToastNotification
              title={"Bilinmeyen hata"}
              message={"Bilinmeyen bir hata oluştu."}
              toastShow={toastShow}
              toastType={"warning"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}

          {isCredentialsInvalid && (
            <ToastNotification
              title={"Credentials"}
              message={"Credentials are invalid"}
              toastShow={toastShow}
              toastType={"warning"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}

          {isUserNotFound && (
            <ToastNotification
              title={"Email bulunamadı."}
              message={"Email Geçersiz. Lütfen kayıt olunuz."}
              toastShow={toastShow}
              toastType={"warning"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}

          {isOtpExpired && (
            <ToastNotification
              title={"Onay kodu süresi"}
              message={
                "Girdiğiniz onay kodu artık geçersiz. Yeni bir onay kodu emailinize gönderildi."
              }
              toastShow={toastShow}
              toastType={"warning"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}
          {isOtpInvalid && (
            <ToastNotification
              title={"Onay kodu"}
              message={"Girdiğiniz onay kodu yanlış."}
              toastShow={toastShow}
              toastType={"warning"}
              toggleToastShow={() => setToastShow(!toastShow)}
            />
          )}
        </div>

        <div className="relative-div">
          <img src={animePhoto} alt="" className="img-fluid anime-photo-size" />
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
