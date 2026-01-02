import React, { useEffect, useState } from "react";
import "./Desktop.css";

// Widgets
import CalendarWidget from "./widgets/CalendarWidget.jsx";
import ClockWidget from "./widgets/ClockWidget";
import MusicPlayerWidget from "./widgets/MusicPlayerWidget";
import song from "../assets/music/caribbean-blue.mp3";
import TodoWidget from "./widgets/TodoWidget";
import MessageWidget from "./widgets/MessageWidget";
import avatarNattie from "../assets/images/nattie.jpeg";
import avatarNAaron from "../assets/images/blocked.jpeg";

// Applications
import MessengerApplication from "./apps/MessengerApplication";
import MailApplication from "./apps/MailApplication";
import MusicPlayerApplication from "./apps/MusicPlayerApplication";
import DocumentsApplication from "./apps/DocumentsApplication";
import BrowserApplication from "./apps/BrowserApplication";

export default function Desktop({ onLogOff }) {
  function formatTime(date) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const [time, setTime] = useState(formatTime(new Date()));

  // window visibility
  const [showMessenger, setShowMessenger] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);

  // Linked clicked site in browser
  const [browserForcedSiteId, setBrowserForcedSiteId] = useState(null);

  // Folder opening in Documents
  const [documentsInitialFolder, setDocumentsInitialFolder] = useState("root");

  // Active conversation in Messenger
  const [activeMessengerId, setActiveMessengerId] = useState("natalie");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 60 * 1000);

    setTime(formatTime(new Date()));
    return () => clearInterval(id);
  }, []);

  // Toggle Messages visibility
  function handleMessengerClick() {
    setShowMessenger((prev) => !prev);
  }

  // Helpers for Messages
  function openMessengerConversation(conversationId) {
    setActiveMessengerId(conversationId);
    setShowMessenger(true);
  }

  // Helpers för Documents
  function openDocumentsAt(folderId) {
    setDocumentsInitialFolder(folderId);
    setShowDocuments(true);
  }

  // Helpers för Browser
  function openBrowserAt(siteId) {
    setBrowserForcedSiteId(siteId ?? null);
    setShowBrowser(true);
  }

  return (
    <div className="desktop-screen">
      <div className="desktop-content">
        {/* Widget grid */}
        <div className="desktop-widget-area">
          {/* Left column */}
          <div className="widget-column">
            <CalendarWidget />
            <MusicPlayerWidget src={song} />
            <MessageWidget
              name="Nattie <3"
              message="Attached a file."
              avatarSrc={avatarNattie}
              onClick={() => openMessengerConversation("natalie")}
            />
            <MessageWidget
              name="Aaron"
              message="This user has been blocked."
              avatarSrc={avatarNAaron}
              onClick={() => openMessengerConversation("aaron")}
            />
          </div>

          {/* Right column */}
          <div className="widget-column">
            <ClockWidget />
            <TodoWidget />
          </div>
        </div>

        <div className="desktop-widgets" />
        {/* Mail */}
        {showMail && (
          <MailApplication
            onClose={() => setShowMail(false)}
            onOpenBrowser={({ siteId }) => openBrowserAt(siteId)}
          />
        )}

        {/* Messages */}
        {showMessenger && (
          <MessengerApplication
            onClose={() => setShowMessenger(false)}
            activeId={activeMessengerId}
            onChangeActive={setActiveMessengerId}
          />
        )}

        {/* Music Player */}
        {showMusicPlayer && (
          <MusicPlayerApplication onClose={() => setShowMusicPlayer(false)} />
        )}

        {/* Documents */}
        {showDocuments && (
          <DocumentsApplication
            onClose={() => setShowDocuments(false)}
            initialFolderId={documentsInitialFolder}
          />
        )}

        {/* Internet Browser */}
        {showBrowser && (
          <BrowserApplication
            onClose={() => {
              setShowBrowser(false);
              setBrowserForcedSiteId(null);
            }}
            forcedSiteId={browserForcedSiteId}
          />
        )}
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <div className="taskbar-left">
          <button
            className="logoff-button"
            onClick={onLogOff}
            title="Log off"
            type="button"
          >
            ⏻
          </button>
        </div>

        <div className="taskbar-center">
          {/* Trash */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={() => openDocumentsAt("trash")}
            title="Open Trash"
          >
            🗑️
          </button>

          {/* Documents (root) */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={() => {
              if (showDocuments) {
                setShowDocuments(false);
              } else {
                openDocumentsAt("root");
              }
            }}
            title="Open Documents"
          >
            📁
          </button>

          {/* Mail */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={() => setShowMail((v) => !v)}
            title="Open Mail"
          >
            📧
          </button>

          {/* Messages */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={handleMessengerClick}
            title="Open Messenger"
          >
            💬
          </button>

          {/* Music Player */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={() => setShowMusicPlayer((v) => !v)}
            title="Open Music Player"
          >
            🎵
          </button>

          {/* Internet/browser */}
          <button
            type="button"
            className="taskbar-app-button"
            onClick={() => {
              setShowBrowser((v) => {
                const next = !v;
                if (!next) setBrowserForcedSiteId(null);
                return next;
              });
            }}
            title="Open Internet"
          >
            🌐
          </button>
        </div>

        <div className="taskbar-right">
          <div className="taskbar-clock">{time}</div>
        </div>
      </div>
    </div>
  );
}