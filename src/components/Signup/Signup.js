import React, { useState } from "react";
import "./Signup.css";
import loginButtonIconPhoto from "../../images/icons/login_button_icon.svg";
import animePhoto from "../../images/anime_photo.svg";
import { useNavigate } from "react-router-dom";
import { putUserInfo } from "../../redux/userSlice";
import ToastNotification from "../ToastNotification/ToastNotification";
import { register } from "../../helpers/authApi/authApi";
function Signup() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Toast Notification
  const [toastShow, setToastShow] = useState(false);
  const [isSomeBlank, setIsSomeBlank] = useState(false);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [isNotValidTelephone, setIsNotValidTelephone] = useState(false);
  const [isNotSamePassword, setIsNotSamePassword] = useState(false);
  const [isNotValidLengthPassword, setIsNotValidLengthPassword] =
    useState(false);
  const [alreadyRegisteredEmail, setAlreadyRegisteredEmail] = useState(false);
  const [error, setError] = useState(false);
  const [isNotSentEmail, setIsNotSentEmail] = useState(false);

  //const dispatch = useDispatch();
  const navigation = useNavigate();
  //const selector = useSelector((state) => state.user.user);

  const handleSignUp = async () => {
    // Reset all statuses of states
    setIsSomeBlank(false);
    setToastShow(false);
    setIsNotValidEmail(false);
    setIsNotValidTelephone(false);
    setIsNotSamePassword(false);
    setIsNotValidLengthPassword(false);
    setAlreadyRegisteredEmail(false);
    setError(false);
    // Blank Check
    if (name && surname && email && telephone && password && passwordRepeat) {
      const emailExtension = email.split("@")[1];

      // Email check
      if (
        emailExtension === "std.iyte.edu.tr" ||
        emailExtension === "iyte.edu.tr"
      ) {
        // Telephone Check
        if (telephone.length === 10 && /^\d+$/.test(telephone)) {
          // Password Check
          if (password === passwordRepeat) {
            if (password.length >= 8) {
              // Trim email and Other things

              setName(name.trim());
              setSurname(surname.trim());
              setEmail(email.trim());
              setTelephone(telephone.trim());

              // Call register api
              setIsLoading(true);
              const response = await register({
                name: name,
                surname: surname,
                email: email,
                phoneNumber: telephone,
                password: password,
              });
              setIsLoading(false);

              if (response.success) {
                // Show error toast notification based on the error code
                if (response.data.statusCode === 200) {
                  const data = { email: email, password: password };
                  navigation("/email-verification", { state: data });
                } else if (response.data.statusCode === 409) {
                  setAlreadyRegisteredEmail(true);
                  setToastShow(true);
                  // Show toast notification for ALREADY_EXIST error
                } else if (response.data.statusCode === 411) {
                  // Show toast notification for NOT_VALID error (Email not found!)
                  setIsNotSentEmail(true);
                  setToastShow(true);
                }
              } else {
                // Show a generic error toast notification
                setError(true);
                setToastShow(true);
              }
            } else {
              setIsNotValidLengthPassword(true);
              setToastShow(true);
            }
          } else {
            setIsNotSamePassword(true);
            setToastShow(true);
          }
        } else {
          setIsNotValidTelephone(true);
          setToastShow(true);
        }
      } else {
        setIsNotValidEmail(true);
        setToastShow(true);
      }
    } else {
      // Show an warning there is at least one blank field
      setIsSomeBlank(true);
      setToastShow(true);
    }

    // Redux registration
    /* 
    dispatch(
      putUserInfo({
        id: "1",
        name: name,
        surname: surname,
        email: email,
        telephone: telephone,
        role: "Öğrenci",
        profileStatus: "Public",
      })
    );
    */

    //console.log(selector.name + selector.surname);
  };
  return (
    <>
      <div className="relative-div color-block-background"></div>
      <div className="relative-div d-flex flex-column-reverse flex-lg-row align-items-center justify-content-lg-between m-lg-5">
        <div className="relative-div d-flex justify-content-center align-items-center w-50">
          <div className="relative-div d-flex flex-column">
            {/* Title */}
            <h6 className="welcome-back-style">
              Hoşgeldin <span className="fw-bold">IYTECHLI</span> !!!
            </h6>
            <h1>Kayıt Ol</h1>
            {/* Title END */}

            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label htmlFor="name" className="email-text">
                Ad
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="border rounded-2 border-secondary p-2 email-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label htmlFor="surname" className="email-text mt-3">
                Soyad
              </label>
              <input
                type="text"
                name=""
                id="surname"
                className="border rounded-2 border-secondary p-2 email-text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label htmlFor="email" className="email-text mt-3">
                Okul Email
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
            <div className="relative-div d-flex flex-column email responsive-input-grup">
              <label htmlFor="telephone" className="email-text mt-3">
                Telefon numarası (+90 olmadan)
              </label>
              <input
                type="text"
                name=""
                id="telephone"
                className="border rounded-2 border-secondary p-2 email-text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>

            <div className="relative-div d-flex flex-column email input-group w-100">
              <label htmlFor="password" className="password-text mt-3">
                Şifre
              </label>
              <input
                type="password"
                name=""
                id="password"
                className="border rounded-2 border-secondary p-2 password-text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex flex-column email input-group w-100">
              <label htmlFor="password-repeat" className="password-text mt-3">
                Şifre Tekrar
              </label>
              <input
                type="password"
                name=""
                id="password-repeat"
                className="border rounded-2 border-secondary p-2 password-text"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </div>
            <div className="relative-div d-flex justify-content-center mt-5 mb-lg-0 m-4">
              <button
                className="btn-login rounded-5 border-1 border-dark py-2 px-4"
                onClick={handleSignUp}
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
                  "Kayıt Ol"
                )}
                <img src={loginButtonIconPhoto} alt="" />
              </button>
            </div>

            {isNotSentEmail && (
              <ToastNotification
                title={"Email Hatası"}
                message={"Doğrulama Emaili gönderirken hata oluştu."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {error && (
              <ToastNotification
                title={"Hata"}
                message={"Bilinmeyen bir hata oluştu."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}

            {alreadyRegisteredEmail && (
              <ToastNotification
                title={"Kayıtlı Email"}
                message={"Daha önceden kayıtlı bir email girdiniz."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}

            {isNotValidLengthPassword && (
              <ToastNotification
                title={"Şifre Uzunluğu"}
                message={"Lütfen en az 9 karakterli bir şifre belirleyin."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}

            {isNotValidTelephone && (
              <ToastNotification
                title={"Telefon Numarası"}
                message={
                  "Lütfen telefon geçerli bir numara giriniz ve numaranızın başına +90 eklemeyiniz."
                }
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {isNotSamePassword && (
              <ToastNotification
                title={"Şifre"}
                message={"Şifreler aynı değil. Lütfen aynı şifreleri giriniz!"}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {isSomeBlank && (
              <ToastNotification
                title={"Boş Alan"}
                message={"Lütfen Boş bir alan bırakmadan doldurun."}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {isNotValidEmail && (
              <ToastNotification
                title={"Email Hatası"}
                message={"Lütfen Okul Emailinizi giriniz..."}
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

export default Signup;
