import React from "react";
import "./WrongPassword.css";

import wrongSymbol from "../assets/desktop/wrong-symbol.png";

export default function WrongPassword({ onRetry }) {
  return (
    <div className="wrong-screen">
      <div className="wrong-box">
        <div className="error-message">
          <div className="wrong-symbol-wrapper">
            <img
              src={wrongSymbol}
              alt="Error"
              className="wrong-symbol"
            />
          </div>
          <p className="error-text">
            The user name or password is incorrect.
          </p>
        </div>
        <button
          className="button primary-button-background"
          onClick={onRetry}
          type="button"
        >
          OK
        </button>
      </div>
    </div>
  );
}