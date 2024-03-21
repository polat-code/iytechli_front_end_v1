import { savePostCompliment } from "../../helpers/complimentApi/complimentApi";
import ToastNotification from "../ToastNotification/ToastNotification";
import "./PostComplimentModal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostComplimentModal = ({ userId, postId }) => {
  const [description, setDescription] = useState("");
  const [reportReason, setReportReason] = useState("");
  const [isSuccessfull, setIsSuccessfull] = useState();
  const [isError, setIsError] = useState();
  const [toastShow, setToastShow] = useState();

  const handleSendCompliment = async () => {
    setIsSuccessfull(false);
    setIsError(false);
    setToastShow(false);
    const response = await savePostCompliment({
      userId,
      postId,
      description,
      reportReason,
    });
    console.log(response);
    if (response.success) {
      setIsSuccessfull(true);
    } else {
      setIsError(true);
      console.log("There is an error in post compliment");
    }
    setToastShow(true);
  };
  return (
    <div
      className="modal fade"
      id="post_compliment_modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id="exampleModalCenteredScrollableTitle"
            >
              Şikayet
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            {isSuccessfull && (
              <ToastNotification
                title={"Başarılı Şikayet"}
                message={
                  "Şikayetiniz başarılı bir şekilde kaydedildi.Burayı kapatabilirsiniz."
                }
                toastShow={toastShow}
                toastType={"success"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
            {isError && (
              <ToastNotification
                title={"Hata"}
                message={"Bir hata ile karşılaşıldı. "}
                toastShow={toastShow}
                toastType={"warning"}
                toggleToastShow={() => setToastShow(!toastShow)}
              />
            )}
          </div>
          {/* Modal Header END */}

          {/* Modal Body */}
          <div className="modal-body">
            <form>
              {/* Select a Reason input */}

              <div className="form-group-row my-2">
                <label for="profileStatus" className="form-label">
                  Neden seçiniz :
                </label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="profileStatus"
                    onChange={(e) => setReportReason(e.target.value)}
                  >
                    <option selected value="INAPPROPRIATE">
                      Uygunsuz İçerik
                    </option>
                    <option value="HARASSMENT">Taciz ve Zorbalık</option>
                    <option value="HATE_SPEECH">Nefret Söylemi</option>
                    <option value="MISINFORMATION">
                      Yanıltıcı ve Yanlış Bilgi
                    </option>
                    <option value="COPYRIGHT">Telif Hakkı İhlali</option>
                    <option value="PRIVACY">
                      Özel Bilgilerin Paylaşılması
                    </option>
                    <option value="SPAM">Spam veya Reklam</option>
                    <option value="HEALTH_MISINFORMATION">
                      Sağlıkla İlgili Yanlış Bilgilendirme
                    </option>
                    <option value="THREAT">Başkalarını Tehdit Etme</option>
                    <option value="DRUGS">İllegal Madde Kullanımı</option>
                  </select>
                </div>
              </div>
              {/* Select a Reason input END */}

              {/* Description Input */}
              <div className="form-group-row mt-4">
                <label for="role" className="form-label">
                  Açıklama :
                </label>
                <div className="input-group">
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    id="role"
                    placeholder="Lütfen düşüncelerinizi yazınız..."
                    style={{ height: "120px" }}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              {/* Description Input END */}

              {/* Send Button */}
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn btn-primary"
                  onClick={handleSendCompliment}
                  type="reset"
                >
                  Gönder
                </button>
              </div>
              {/*  Send Button END */}
            </form>
          </div>
          {/* Modal Body END */}

          {/* Modal Footer */}
          <div className="modal-footer justify-content-center">
            <p className="fw-bold">Şikayetiniz dikkate alınacaktır.</p>
          </div>
          {/* Modal Footer END */}
        </div>
      </div>
    </div>
  );
};

export default PostComplimentModal;
