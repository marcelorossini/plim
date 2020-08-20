import React, { useState } from "react";
import "./style.css";

export default (props) => {
  const [showLoading, setShowLoading] = useState(props.loading || false);

  return (
    <>
      {showLoading ? (
        <div className="loading">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      ) : null}
      {props.children}
    </>
  );
};
