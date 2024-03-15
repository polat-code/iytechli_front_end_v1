import React, { useState } from "react";
import "./Login.css";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../ToastNotification/ToastNotification";
import { authenticate } from "../../helpers/authApi/authApi";
import { setToLocalStorage } from "../../helpers/LocalStorage";
import { encrytion } from "../../helpers/encryption";

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [toastShow, setToastShow] = useState(false);
  const [isInputsBlank, setIsInputsBlank] = useState(false);
  const [isUserCredentialsInvalid, setIsUserCredentialsInvalid] =
    useState(false);
  const [isEmailNotApproved, setIsEmailNotApproved] = useState(false);

  const handleForgetPassword = () => {
    navigation("/forget-password");
  };

  const handleRegistration = () => {
    navigation("/signup");
  };

  const handleLogin = async () => {
    // Reset InputsBlank Notification status
    setToastShow(false);
    setIsInputsBlank(false);
    setIsUserCredentialsInvalid(false);
    setIsUserCredentialsInvalid(false);
    setIsEmailNotApproved(false);

    if (email && password) {
      // Send to database and check whether it is correct or not.
      setIsLoading(true);
      const response = await authenticate({
        email: email,
        password: password,
      });
      setIsLoading(false);

      if (response.success) {
        if (response.data.statusCode === 200) {
          // Login and save the authentication token
          setToLocalStorage("_tkn", JSON.stringify(response.data.data.token));
          const encryptedUser = encrytion({
            userId: response.data.data.userId,
            name: response.data.data.name,
            surname: response.data.data.surname,
            email: response.data.data.email,
          });
          setToLocalStorage("_usr", encryptedUser);

          navigation("/anonymous");
        } else if (response.data.statusCode === 403) {
          // Username or password is wrong
          setIsUserCredentialsInvalid(true);
          setToastShow(true);
        } else if (response.data.statusCode === 410) {
          // Email is not approved
          setIsLoading(true);
          setIsEmailNotApproved(true);
          setToastShow(true);
          const data = { email: email, password: password };
          setTimeout(() => {
            navigation("/email-verification", { state: data });
          }, 3000);
        }
      } else {
        // Show unknown error
        setIsUserCredentialsInvalid(true);
        setToastShow(true);
      }
    } else {
      setIsInputsBlank(true);
      setToastShow(true);
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex justify-content-center mt-5">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handleLogin}
                disabled={isLoading}
              >
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
                  "Giriş Yap"
                )}
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>
            <div className="relative-div d-flex justify-content-center mt-3">
              <a
                href="#"
                className="forget-password-button"
                onClick={handleForgetPassword}
              >
                Şifremi Unuttum?
              </a>
            </div>
            <div className="relative-div d-flex flex-row justify-content-center mt-4 mb-lg-0 mb-5">
              <span className="account-message me-3">
                Henüz bir hesabım yok?
              </span>
              <a
                href="#"
                className="sign-up-button fw-bold"
                onClick={handleRegistration}
              >
                Ücretsiz Kaydol.
              </a>
            </div>
            {isInputsBlank && (
              <ToastNotification
                title={"Kullanıcı Adı ve Şifre"}
                message={"Lütfen Kullancı adınızı ve şifrenizi giriniz!"}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}

            {isEmailNotApproved && (
              <ToastNotification
                title={"Onaylanmamış Email"}
                message={
                  "Lütfen emailinizi onaylayın. Yönelendiriliyorsunuz..."
                }
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {isUserCredentialsInvalid && (
              <ToastNotification
                title={"Yanlış Kullanıcı Adı veya Şifre"}
                message={"Lütfen doğru kullanıcı adı ve şifre giriniz."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
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
