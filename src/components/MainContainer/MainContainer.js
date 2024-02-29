import React from "react";

function Container({ children }) {
  return <div className="container-fluid p-0 d-flex h-100">{children}</div>;
}

export default Container;
