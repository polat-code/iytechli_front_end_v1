import React from "react";
import "./LikeCountModal.css";
import LikeCountModalUser from "../LikeCountModalUser/LikeCountModalUser";

const LikeCountModal = ({ fullNameList, numberOfUserLike }) => {
  return (
    <div
      className="modal fade"
      id="users_like"
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
              Likes
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
            {/* Users */}
            <div className="users">
              {/* User List */}
              {fullNameList &&
                fullNameList.map((fullName) => {
                  return (
                    <>
                      <LikeCountModalUser fullName={fullName} /> <hr />
                    </>
                  );
                })}
              {/* User List END */}
            </div>
            {/* Users END */}
          </div>
          {/* Modal Body END */}

          {/* Modal Footer */}
          <div className="modal-footer">
            <p>
              <span className="fw-bold">{numberOfUserLike}</span>
              kişi postu beğendi
            </p>
          </div>
          {/* Modal Footer END */}
        </div>
      </div>
    </div>
  );
};

export default LikeCountModal;
