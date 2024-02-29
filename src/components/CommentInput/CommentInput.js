import React from "react";
import "./CommentInput.css";

const CommentInput = () => {
  return (
    <div className="mb-3 ms-4 me-5">
      <textarea
        className="form-control"
        aria-label="With textarea"
        id="postDetail"
        placeholder="Lütfen düşüncelerinizi yazınız..."
        style={{ height: "120px" }}
      ></textarea>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary">Yorum Yap</button>
      </div>
    </div>
  );
};

export default CommentInput;
