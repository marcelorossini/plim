import React, { useState } from "react";
import "./style.css";

export default (props) => {
  return (
    <>
      {props.loading || false ? (
        <div className="loading">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      ) : null}
      {props.children}
    </>
  );
};
