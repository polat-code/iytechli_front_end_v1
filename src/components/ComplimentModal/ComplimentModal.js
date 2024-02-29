import React from "react";
import "./ComplimentModal.css";

function ComplimentModal() {
  return (
    <div
      className="modal fade"
      id="compliment_modal"
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
                  <select className="form-select" id="profileStatus">
                    <option selected>Choose...</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
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
                  ></textarea>
                </div>
              </div>
              {/* Description Input END */}

              {/* Send Button */}
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary">Gönder</button>
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
}

export default ComplimentModal;
