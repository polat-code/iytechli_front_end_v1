import React from "react";
import "./NotFound404.css";
import svg from "../../images/404.svg";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Oops! Sayfa Bulunamadı</h2>
      <p>Aradığınız sayfa mevcut değil ya da taşınmış olabilir.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
};

export default NotFound404;
