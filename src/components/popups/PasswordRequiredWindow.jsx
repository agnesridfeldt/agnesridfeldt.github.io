import React, { useState, useRef, useEffect } from "react";
import "./PasswordRequiredWindow.css";

export default function PasswordRequiredWindow({ onClose, onSubmit, hint }) {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showHint, setShowHint] = useState(false);

  const [position, setPosition] = useState(() => {
    const windowWidth = 520;
    const windowHeight = 280;
    return {
      x: (window.innerWidth - windowWidth) / 2,
      y: (window.innerHeight - windowHeight) / 2,
    };
  });

  const dragDataRef = useRef(null);

  function handleTitleMouseDown(e) {
    e.preventDefault();
    dragDataRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!dragDataRef.current) return;
    const { startX, startY, origX, origY } = dragDataRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    setPosition({ x: origX + dx, y: origY + dy });
  }

  function handleMouseUp() {
    dragDataRef.current = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const ok = onSubmit(password);

    if (!ok) {
      setErrorMessage("Wrong password.");
      if (hint) {
        setShowHint(true);
      }
    }
  }

  return (
    <div
      className="password-window strips"
      style={{ top: position.y, left: position.x }}
    >
      <div
        className="password-titlebar window-header"
        onMouseDown={handleTitleMouseDown}
      >
        <p className="password-title">Password Required</p>
        <div className="window-buttons">
          <button className="window-button close-pink" onClick={onClose}>
            &#10005;
          </button>
        </div>
      </div>

      <div className="password-inner">
        <div className="password-body">
          <div className="password-content">
            <p className="password-message">
              This file is password protected. To continue opening the file,
              please enter the correct password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="password-input-group">
                <label htmlFor="password-input" className="password-label">
                  Enter password:
                </label>
                <input
                  id="password-input"
                  type="password"
                  className="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>

              {/* Error message after failed attempt */}
              {errorMessage && (
                <p className="password-error">
                  {errorMessage}
                </p>
              )}

              {/* Hint is shown after first failed attempt */}
              {showHint && hint && (
                <p className="password-hint">
                  Password hint: {hint}
                </p>
              )}

              <div className="password-button-row">
                <button type="submit" className="button primary-button-background">
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}