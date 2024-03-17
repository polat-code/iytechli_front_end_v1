import React, { useEffect, useState } from "react";
import "./CommentInput.css";
import ToastNotification from "../ToastNotification/ToastNotification";
import { createComment } from "../../helpers/commentApi/commentApi";
import { decryption } from "../../helpers/encryption";
import { getFromLocalStorage } from "../../helpers/LocalStorage";
import { useNavigate } from "react-router-dom";

const CommentInput = ({ postId, setCommentShowTrigger }) => {
  const [commentContent, setCommentContent] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const [isNotValidCommentLength, setIsNotValidCommentLength] = useState(false);

  const userFromLocal = decryption(getFromLocalStorage("_usr"));

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const navigation = useNavigate();

  const handleMakeComment = async () => {
    setToastShow(false);
    setIsNotValidCommentLength(false);
    setIsSuccessfull(false);

    setIsLoading(true);
    if (commentContent.length < 12) {
      setToastShow(true);
      setIsNotValidCommentLength(true);
    } else {
      // Make http request for creating comment
      const response = await createComment({
        userId: userFromLocal.userId,
        postId: postId,
        commentContent: commentContent,
      });
      if (response.success) {
        if (response.data.statusCode === 200) {
          setIsSuccessfull(true);
          setToastShow(true);
          setCommentShowTrigger(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        } else if (response.data.statusCode === 404) {
          console.log("user or post is not found");
        } else {
          console.log("Kodlanmayan Hata!");
        }
      } else {
        console.log("Undefined Error");
      }
    }
  };

  return (
    <div className="mb-3 ms-4 me-5">
      <textarea
        className="form-control"
        aria-label="With textarea"
        id="postDetail"
        placeholder="Lütfen düşüncelerinizi yazınız..."
        style={{ height: "120px" }}
        onChange={(e) => setCommentContent(e.target.value)}
      ></textarea>
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-primary"
          onClick={handleMakeComment}
          value={commentContent}
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
            "Yorum Yap"
          )}
        </button>
      </div>
      {isNotValidCommentLength && (
        <ToastNotification
          title={"Yorum uzunluğu hatası"}
          message={"Lütfen en az 10 karakterden oluşan bir yorum yazınız."}
          toastShow={toastShow}
          toastType={"warning"}
          toggleToastShow={() => setToastShow(!toastShow)}
        />
      )}
      {isSuccessfull && (
        <ToastNotification
          title={"Başarılı Yorum"}
          message={"Başarılı bir şekilde yorum yapıldı."}
          toastShow={toastShow}
          toastType={"success"}
          toggleToastShow={() => setToastShow(!toastShow)}
        />
      )}
    </div>
  );
};

export default CommentInput;
