import React from "react";
import "./spinner.css";

export default function LoadingSpinner({text}) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <div className="loading-text">{text}</div>
    </div>
  );
}