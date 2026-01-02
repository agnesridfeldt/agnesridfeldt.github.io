import { useState } from "react";
import "./LoginScreen.css";

import profilePic from "../assets/images/aero-pfp.png";
import arrowButton from "../assets/desktop/right-arrow-button.png";

export default function LoginScreen({ onLogin, onWrongPassword }) {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);

  // Password format: capital letter + lowercase letters only
  const nameFormat = /^[A-Z][a-z]+$/;

  function handleLogin() {
    const trimmed = password.trim();

    if (nameFormat.test(trimmed)) {
      localStorage.setItem("siblingName", trimmed);
      onLogin();
    } else {
      onWrongPassword();
    }
  }

  function handleForgotPassword(e) {
    e.preventDefault();
    setShowHint(true);
  }

  return (
    <div className="login-screen">
      <div className="login-box">
        <img src={profilePic} alt="profile" className="profile-pic" />
        <h2 className="profile-name">Katie</h2>
        <div className="input-row">
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <img
            src={arrowButton}
            alt="login"
            className="arrow-button"
            onClick={handleLogin}
          />
        </div>
        <button className="forgot-link" onClick={handleForgotPassword}>
          Forgot password
        </button>

        {showHint && (
          <div className="password-hint">
            hint: fav sibling’s name (awkward if it’s not you) ;)
          </div>
        )}
      </div>
    </div>
  );
}