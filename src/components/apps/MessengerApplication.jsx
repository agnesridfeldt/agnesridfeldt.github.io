import React, { useEffect, useRef, useState } from "react";
import "./MessengerApplication.css";

import { parseChatText } from "./parseChatText";
import katieNatalieUrl from "../../assets/chats/katie_natalie.txt?url";
import katieAaronUrl from "../../assets/chats/katie_aaron.txt?url";

import katiePfp from "../../assets/images/katie.jpeg";
import nataliePfp from "../../assets/images/nattie.jpeg";
import aaronPfp from "../../assets/images/blocked.jpeg";

const conversations = [
  {
    id: "natalie",
    displayName: "Nattie <3",
    status: "Offline",
    personalMessage: "Attached a file.",
    avatar: nataliePfp,
    isBlocked: false,
    headerTitle: "To: Natalie <3",
    headerDate: "June 14 2005",
    file: katieNatalieUrl,
  },
  {
    id: "aaron",
    displayName: "Aaron",
    status: "Offline",
    personalMessage: "You blocked this user.",
    avatar: aaronPfp,
    isBlocked: true,
    headerTitle: "To: Aaron",
    headerDate: "March 9 2005",
    file: katieAaronUrl,
  },
];

export default function MessengerApplication({
  onClose,
  activeId,
  onChangeActive,
}) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [position, setPosition] = useState({ x: 220, y: 80 });
  const dragDataRef = useRef(null);

  const effectiveId = activeId || conversations[0].id;
  const activeConversation =
    conversations.find((c) => c.id === effectiveId) || conversations[0];

  // Load messages whenever active conv changes
  useEffect(() => {
    if (!activeConversation) return;

    setIsLoading(true);

    fetch(activeConversation.file)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseChatText(text);
        setMessages(parsed);
      })
      .catch(() => {
        setMessages([
          {
            type: "message",
            sender: "System",
            text: "Could not load conversation.",
          },
        ]);
      })
      .finally(() => setIsLoading(false));
  }, [activeConversation]);

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
      className="msn-window strips"
      style={{ top: position.y, left: position.x }}
    >
      <div
        className="msn-titlebar window-header"
        onMouseDown={handleTitleMouseDown}
      >
        <p className="msn-title">Messages</p>

        <div className="window-buttons">
          <button className="window-button minimize">&#95;</button>
          <button className="window-button maximize">&#9633;</button>
          <button className="window-button close" onClick={onClose}>
            &#10005;
          </button>
        </div>
      </div>

      <div className="msn-inner window-body-wrapper">
        {/* Left column */}
        <div className="msn-sidebar">
          {/* Profile card */}
          <div className="msn-profile-card">
            <div
              className="msn-profile-avatar"
              style={{ backgroundImage: `url(${katiePfp})` }}
            />
            <div className="msn-profile-text">
              <div className="msn-profile-name-row">
                <span className="msn-profile-name">Katie &lt;3</span>
                <span className="msn-profile-status">(Offline)</span>
              </div>
              <div className="msn-profile-message">WH 00:30</div>
            </div>
          </div>

          <div className="msn-sidebar-divider" />

          {/* Contact list */}
          {conversations.map((conv) => {
            const isActive = conv.id === effectiveId;
            return (
              <button
                key={conv.id}
                className={
                  "msn-contact" + (isActive ? " msn-contact--active" : "")
                }
                onClick={() => onChangeActive && onChangeActive(conv.id)}
              >
                <div className="msn-contact-avatar-wrapper">
                  <div
                    className="msn-contact-avatar"
                    style={{ backgroundImage: `url(${conv.avatar})` }}
                  />
                </div>

                <div className="msn-contact-text">
                  <div className="msn-contact-name-row">
                    <span className="msn-contact-name">
                      {conv.displayName}
                    </span>
                    <span className="msn-contact-status">
                      ({conv.status})
                    </span>
                  </div>
                  <div className="msn-contact-message">
                    {conv.personalMessage}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="msn-chat-column window-body">
          <div className="msn-chat-header">
            <span className="msn-chat-header-title">
              {activeConversation?.headerTitle || ""}
            </span>
          </div>

          <div className="msn-chat-body">
            <div className="msn-chat-scroll">
              {isLoading && (
                <div className="msn-chat-loading">Loading…</div>
              )}

              {!isLoading &&
                messages.map((entry, index) => {
                  if (entry.type === "date") {
                    return (
                      <div key={index} className="msn-date-separator">
                        {entry.text}
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="msn-message-block">
                      <p className="msn-message-label">
                        {entry.sender} says:
                      </p>
                      <p className="msn-message-text">
                        {entry.text.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}