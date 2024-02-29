import React from "react";
import advertPhoto from "../../images/reklam.svg";

function Advertisement() {
  return (
    <div class="d-flex justify-content-lg-start  justify-content-center flex-column flex-md-row flex-lg-column  align-items-center">
      <img
        src={advertPhoto}
        alt=""
        class="mb-lg-3 mt-lg-5 img-fluid m-md-4 m-4"
      />
      <img src={advertPhoto} alt="" class="img-fluid" />
    </div>
  );
}

export default Advertisement;
