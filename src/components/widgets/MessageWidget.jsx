import React from "react";
import "./MessageWidget.css";

export default function MessageWidget({
  name = "Nattie <3",
  message = "Attached a file.",
  avatarSrc,
  onClick,
}) {
  const classes =
    "message-widget" + (onClick ? " message-widget--interactive" : "");

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="mw-left">
        <div className="mw-avatar">
          {avatarSrc ? (
            <img src={avatarSrc} alt={name} />
          ) : (
            <div className="mw-avatar-fallback" />
          )}
        </div>
      </div>

      <div className="mw-right">
        <div className="mw-name">{name}</div>
        <div className="mw-preview">{message}</div>
      </div>
    </div>
  );
}