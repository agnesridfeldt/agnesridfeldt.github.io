import { useState } from "react";
import "./StartScreen.css";
import startBackground from "../assets/desktop/desktop-background.png";
import logo from "../assets/logo.png";

export default function StartScreen({ onStart, onHelp, onQuit }) {
  const [isFading, setIsFading] = useState(false);

  const handleStartClick = () => {
    // Trigger CSS-animation
    setIsFading(true);

    // Wait for animation to finish before calling onStart
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <div
      className={`start-screen ${isFading ? "start-screen--fadeout" : ""}`}
      style={{ backgroundImage: `url(${startBackground})` }}
    >
      <div className="start-screen__band" />
      <div className="start-screen__overlay">
        <div className="start-screen__left-panel">
          <img
            src={logo}
            alt="All That's Left logo"
            className="start-screen__logo"
          />
        </div>
        <div className="start-screen__right-panel">
          <button className="menu-button" onClick={handleStartClick}>
            START
          </button>
          <button className="menu-button" onClick={onHelp}>
            HELP
          </button>
          <button className="menu-button" onClick={onQuit}>
            QUIT
          </button>
        </div>
      </div>
    </div>
  );
}