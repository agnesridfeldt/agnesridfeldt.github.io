import React, { useEffect, useRef, useState } from "react";
import "./AmbiguousQuestionWindow.css";

export default function AmbiguousQuestionWindow({ onProceed, onClose }) {
  const [position, setPosition] = useState(() => {
    const windowWidth = 520;
    const windowHeight = 230;
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

  return (
    <div
      className="ambig-window strips"
      style={{ top: position.y, left: position.x }}
    >
      <div
        className="ambig-titlebar window-header"
        onMouseDown={handleTitleMouseDown}
      >
        <p className="ambig-title">Open protected file</p>
        <div className="window-buttons">
          <button
            type="button"
            className="window-button close-pink"
            onClick={onClose}
          >
            &#10005;
          </button>
        </div>
      </div>

      <div className="ambig-inner">
        <div className="ambig-body">
          <div className="ambig-content">
            <div className="ambig-message-row">
              <div className="ambig-icon">
                <span>i</span>
              </div>
              <p className="ambig-message">
                This file is password protected and may contain sensitive
                information. Do you want to try to open it?
              </p>
            </div>

            <div className="ambig-button-row">
              <button
                type="button"
                className="button primary-button-background"
                onClick={onProceed}
              >
                Yes
              </button>
              <button
                type="button"
                className="button secondary-button-background"
                onClick={onClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}