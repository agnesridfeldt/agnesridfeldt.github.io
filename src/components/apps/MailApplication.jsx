import React, { useEffect, useRef, useState } from "react";
import "./MailApplication.css";
import folderIcon from "../../assets/images/folder.jpeg";

// Email content data
const emails = [
  {
    id: 1,
    folder: "Inbox",
    fromName: "New York University Admissions Office",
    fromAddress: "admissions.ops@nyu.edu",
    subject: "Enrollment Incomplete — No Classes Registered for Fall Term",
    received: "20/8/2007 9:50",
    isImportant: false,
    hasAttachment: false,
    body: `Hello Katie,

          Our system shows that you are admitted for Fall 2007 but are currently not registered in any courses. Students who fail to enroll by August 31 will lose active student status.

          To resolve this, log in to your Student Portal and complete course registration as soon as possible.

          If you have questions, please contact Student Services at support@nyu.edu.

          Thank you,
          Student Enrollment Services`,
  },
  {
    id: 2,
    folder: "Inbox",
    fromName: "Student Housing Services",
    fromAddress: "housing@nyu.edu",
    subject: "Move-in information for Fall 2007",
    received: "15/8/2007 14:22",
    isImportant: true,
    hasAttachment: true,
    body: `Dear Katie,

          We are excited to welcome you to campus this fall. Attached you will find your move-in checklist and information about your residence hall.

          Please review the document carefully and contact Housing Services if you have any questions.

          Best regards,
          Student Housing Services`,
  },
  {
    id: 3,
    folder: "Deleted",
    fromName: "Northeast Coach Lines",
    fromAddress: "tickets@northeastcoach.example",
    subject: "Booking Confirmation — Boston Trip (Jul 20, 2007)",
    received: "12/7/2007 18:04",
    isImportant: false,
    hasAttachment: false,
    bodyBlocks: [
      { type: "p", text: "Hello," },
      {
        type: "p",
        text:
          "This email confirms your bus booking to Boston. Please keep your confirmation number for your records.",
      },
      { type: "p", text: "Departure: 20 July 2007, 06:30 AM" },
      { type: "p", text: "Status: PAID" },
      { type: "p", text: "View and print your itinerary here:" },
      {
        type: "link",
        text: "Open booking confirmation page",
        siteId: "busconfirm",
      },
      { type: "p", text: "" },
      {
        type: "p",
        text:
          "If you did not make this booking, contact support immediately.",
      },
      { type: "p", text: "— Northeast Coach Lines Online Ticketing" },
    ],
  },
];

export default function MailApplication({ onClose, onOpenBrowser }) {
  const [activeMailId, setActiveMailId] = useState(emails[0].id);
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [position, setPosition] = useState({ x: 180, y: 70 });
  const dragDataRef = useRef(null);

  const activeMail = emails.find((m) => m.id === activeMailId) || null;
  const visibleEmails = emails.filter((m) => m.folder === activeFolder);

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

    setPosition({
      x: origX + dx,
      y: origY + dy,
    });
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

  useEffect(() => {
    const firstInFolder = emails.find((m) => m.folder === activeFolder);
    if (firstInFolder) setActiveMailId(firstInFolder.id);
    else setActiveMailId(null);
  }, [activeFolder]);

  // Render mail body
  function renderMailBody(mail) {
    if (mail?.bodyBlocks?.length) {
      return mail.bodyBlocks.map((b, idx) => {
        if (b.type === "link") {
          return (
            <p key={idx} className="mail-preview-paragraph">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenBrowser?.({ siteId: b.siteId });
                }}
              >
                {b.text}
              </a>
            </p>
          );
        }

        return (
          <p key={idx} className="mail-preview-paragraph">
            {b.text}
          </p>
        );
      });
    }

    // String body fallback
    return (mail.body ?? "").split("\n").map((line, idx) => (
      <p key={idx} className="mail-preview-paragraph">
        {line}
      </p>
    ));
  }

  return (
    <div className="mail-window strips" style={{ top: position.y, left: position.x }}>
      <div className="mail-titlebar window-header" onMouseDown={handleTitleMouseDown}>
        <p className="msn-title">Mail</p>
        <div className="window-buttons">
          <button className="window-button minimize" type="button">
            &#95;
          </button>
          <button className="window-button maximize" type="button">
            &#9633;
          </button>
          <button className="window-button close" type="button" onClick={onClose}>
            &#10005;
          </button>
        </div>
      </div>

      <div className="mail-inner window-body-wrapper">
        <div className="mail-sidebar">
          <ul className="mail-folder-tree">
            <li className="mail-folder-root">
              <span className="mail-folder-toggle">▾</span>
              <span className="mail-folder-root-label">Local Folders</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Inbox" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Inbox")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Inbox</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Outbox" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Outbox")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Outbox</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Sent" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Sent")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Sent Items</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Deleted" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Deleted")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Deleted Items</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Drafts" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Drafts")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Drafts</span>
            </li>

            <li
              className={"mail-folder-leaf" + (activeFolder === "Junk" ? " mail-folder-leaf--active" : "")}
              onClick={() => setActiveFolder("Junk")}
            >
              <img src={folderIcon} alt="" className="mail-folder-icon-img" />
              <span className="mail-folder-label">Junk E-mail</span>
            </li>

            <li className="mail-folder-separator" />
          </ul>
        </div>

        <div className="mail-main window-body">
          <div className="mail-toolbar">
            <button className="mail-toolbar-btn">+ Create Mail</button>
            <button className="mail-toolbar-btn">Reply</button>
            <button className="mail-toolbar-btn">Reply All</button>
            <button className="mail-toolbar-btn">Forward</button>
          </div>

          <div className="mail-main-split">
            <div className="mail-message-list">
              <div className="mail-list-header">
                <div className="mail-col mail-col-flag">!</div>
                <div className="mail-col mail-col-attach">📎</div>
                <div className="mail-col mail-col-from">From</div>
                <div className="mail-col mail-col-subject">Subject</div>
                <div className="mail-col mail-col-received">Received</div>
              </div>

              <div className="mail-list-scroll">
                {visibleEmails.map((mail) => {
                  const isActive = mail.id === activeMailId;
                  const both = mail.isImportant && mail.hasAttachment;

                  return (
                    <button
                      key={mail.id}
                      type="button"
                      className={"mail-list-row" + (isActive ? " mail-list-row--active" : "")}
                      onClick={() => setActiveMailId(mail.id)}
                    >
                      <div className="mail-col mail-col-flag">{both ? "X" : ""}</div>
                      <div className="mail-col mail-col-attach">{both ? "X" : ""}</div>
                      <div className="mail-col mail-col-from">{mail.fromName}</div>
                      <div className="mail-col mail-col-subject">{mail.subject}</div>
                      <div className="mail-col mail-col-received">{mail.received}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mail-preview">
              {activeMail ? (
                <>
                  <div className="mail-preview-header">
                    <div className="mail-preview-meta">
                      <span className="mail-preview-label">From:</span>
                      <span className="mail-preview-value">&lt;{activeMail.fromAddress}&gt;</span>
                    </div>
                    <div className="mail-preview-meta">
                      <span className="mail-preview-label">Subject:</span>
                      <span className="mail-preview-value">{activeMail.subject}</span>
                    </div>
                  </div>

                  <div className="mail-preview-body">{renderMailBody(activeMail)}</div>
                </>
              ) : (
                <div className="mail-preview-empty">Select a message to view it.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}