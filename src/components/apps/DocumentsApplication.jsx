import React, { useEffect, useRef, useState } from "react";
import "./DocumentsApplication.css";
import folderIcon from "../../assets/images/folder.jpeg";
import PasswordRequiredWindow from "../popups/PasswordRequiredWindow.jsx";
import AmbiguousQuestionWindow from "../popups/AmbiguousQuestionWindow.jsx";

// Diary files
import diary2005Text from "../../assets/text/diary_2005.txt?raw";
import finalEntryText from "../../assets/text/final_entry.txt?raw";

const DIARY_PASSWORD = "1012";

// Fake file system structure
const folders = {
  root: {
    id: "root",
    name: "Documents",
    parentId: null,
    fakePath: "C:\\Users\\Katie\\Documents",
    folderIds: ["diary", "school", "photos", "trash"],
    fileIds: [],
  },
  diary: {
    id: "diary",
    name: "Diary",
    parentId: "root",
    fakePath: "C:\\Users\\Katie\\Documents\\Diary",
    folderIds: [],
    fileIds: ["diary_2005"],
  },
  school: {
    id: "school",
    name: "School",
    parentId: "root",
    fakePath: "C:\\Users\\Katie\\Documents\\School",
    folderIds: [],
    fileIds: ["schedule_fall"],
  },
  photos: {
    id: "photos",
    name: "Photos",
    parentId: "root",
    fakePath: "C:\\Users\\Katie\\Documents\\Photos",
    folderIds: [],
    fileIds: [],
  },
  trash: {
    id: "trash",
    name: "Trash",
    parentId: "root",
    fakePath: "C:\\Users\\Katie\\Documents\\Trash",
    folderIds: [],
    fileIds: ["deleted_draft"],
  },
};

// Fake files
const files = {
  diary_2005: {
    id: "diary_2005",
    name: "diary_2005.rtf",
    type: "diary",
    modified: "15/09/2005 22:04",
    snippet:
      "The first summer with the laptop. Everything felt bigger than this town...",
    body: diary2005Text,
  },
  deleted_draft: {
    id: "deleted_draft",
    name: "deleted_draft.txt",
    type: "diary",
    modified: "01/09/2007 23:58",
    snippet: "The last thing I wrote before everything shifted...",
    body: finalEntryText,
  },
  schedule_fall: {
    id: "schedule_fall",
    name: "fall_2005_class_schedule.xls",
    type: "sheet",
    modified: "01/08/2005 16:02",
    snippet: "English 10, Algebra II, U.S. History, Chemistry...",
    body: `Fall 2005 – class schedule

- AP Litterature
- AP Psychology
- AP US History
- Honors Chemistry
- Spanish 3
Pre-Calculus`,
  },
};

// Build trail for navigation
function buildBreadcrumb(folderId) {
  const segments = [];
  let current = folderId;
  while (current) {
    const f = folders[current];
    if (!f) break;
    segments.unshift({ id: f.id, name: f.name });
    current = f.parentId;
  }
  return segments;
}

// Separate diary/notes window
function DiaryWindow({ file, onClose }) {
  const [position, setPosition] = useState({ x: 260, y: 120 });
  const dragRef = useRef(null);

  if (!file) return null;

  function handleMouseDown(e) {
    e.preventDefault();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!dragRef.current) return;
    const { startX, startY, origX, origY } = dragRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    setPosition({ x: origX + dx, y: origY + dy });
  }

  function handleMouseUp() {
    dragRef.current = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  useEffect(
    () => () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    },
    []
  );

  const lines = (file.body || "").split(/\r?\n/);

  function renderDiaryLines() {
    return lines.map((rawLine, index) => {
      const line = rawLine.trim();

      if (line === "") {
        return (
          <p
            key={`empty-${index}`}
            className="diary-paragraph diary-paragraph--empty"
          >
            &nbsp;
          </p>
        );
      }

      const headingMatch = line.match(/^\*{1,2}(.+?)\*{1,2}$/);
      if (headingMatch) {
        const title = headingMatch[1].trim();
        return (
          <p key={`heading-${index}`} className="diary-heading">
            {title}
          </p>
        );
      }

      return (
        <p key={`p-${index}`} className="diary-paragraph">
          {rawLine}
        </p>
      );
    });
  }

  return (
    <div
      className="diary-window strips"
      style={{ top: position.y, left: position.x }}
    >
      <div
        className="diary-titlebar window-header"
        onMouseDown={handleMouseDown}
      >
        <p className="msn-title">{file.name}</p>
        <div className="window-buttons">
          <button className="window-button minimize" type="button">
            &#95;
          </button>
          <button className="window-button maximize" type="button">
            &#9633;
          </button>
          <button
            className="window-button close"
            type="button"
            onClick={onClose}
          >
            &#10005;
          </button>
        </div>
      </div>

      <div className="diary-body">
        <div className="diary-meta">
          <span className="diary-meta-name">{file.name}</span>
          <span className="diary-meta-dot">•</span>
          <span className="diary-meta-label">Modified:</span>
          <span className="diary-meta-value">{file.modified}</span>
        </div>

        <div className="diary-content">
          <div className="diary-text">{renderDiaryLines()}</div>
        </div>
      </div>
    </div>
  );
}

export default function DocumentsApplication({
  onClose,
  initialFolderId = "root",
}) {
  const [position, setPosition] = useState({ x: 210, y: 80 });
  const dragRef = useRef(null);

  const [currentFolderId, setCurrentFolderId] = useState(initialFolderId);
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [openDiaryId, setOpenDiaryId] = useState(null);

  const [showDiaryPasswordPrompt, setShowDiaryPasswordPrompt] = useState(false);
  const [pendingDiaryId, setPendingDiaryId] = useState(null);

  const [showAmbiguousPrompt, setShowAmbiguousPrompt] = useState(false);
  const [pendingAmbiguousId, setPendingAmbiguousId] = useState(null);

  // When initialFolderId changes update current folder
  useEffect(() => {
    if (folders[initialFolderId]) {
      setCurrentFolderId(initialFolderId);
      setSelectedFileId(null);
    }
  }, [initialFolderId]);

  const currentFolder = folders[currentFolderId];
  const breadcrumb = buildBreadcrumb(currentFolderId);
  const selectedFile = selectedFileId ? files[selectedFileId] : null;
  const openDiaryFile = openDiaryId ? files[openDiaryId] : null;

  function handleTitleMouseDown(e) {
    e.preventDefault();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!dragRef.current) return;
    const { startX, startY, origX, origY } = dragRef.current;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    setPosition({ x: origX + dx, y: origY + dy });
  }

  function handleMouseUp() {
    dragRef.current = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  useEffect(
    () => () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    },
    []
  );

  function openFolder(folderId) {
    setCurrentFolderId(folderId);
    setSelectedFileId(null);
  }

  function openFile(fileId) {
    const file = files[fileId];
    if (!file) return;

    if (fileId === "deleted_draft") {
      setPendingAmbiguousId(fileId);
      setShowAmbiguousPrompt(true);
      return;
    }

    // If diary file prompt for password
    if (file.type === "diary") {
      setPendingDiaryId(fileId);
      setShowDiaryPasswordPrompt(true);
      return;
    }

    setSelectedFileId(fileId);
  }

  function handleBreadcrumbClick(segmentId) {
    if (segmentId === currentFolderId) return;
    setCurrentFolderId(segmentId);
    setSelectedFileId(null);
  }

  // Player clicks "Proceed" on ambiguous prompt
  function handleAmbiguousProceed() {
    if (pendingAmbiguousId) {
      setPendingDiaryId(pendingAmbiguousId);
      setShowDiaryPasswordPrompt(true);
    }
    setShowAmbiguousPrompt(false);
  }

  function handleAmbiguousClose() {
    setShowAmbiguousPrompt(false);
    setPendingAmbiguousId(null);
  }

  // Handle diary password submission
  function handleDiaryPasswordSubmit(enteredPassword) {
    const trimmed = enteredPassword.trim();

    if (trimmed.toUpperCase() === DIARY_PASSWORD) {
      if (pendingDiaryId) {
        setOpenDiaryId(pendingDiaryId);
      }
      setPendingDiaryId(null);
      setShowDiaryPasswordPrompt(false);
      return true;
    }

    return false;
  }

  return (
    <>
      <div
        className="docs-window strips"
        style={{ top: position.y, left: position.x }}
      >
        <div
          className="docs-titlebar window-header"
          onMouseDown={handleTitleMouseDown}
        >
          <p className="msn-title">Documents</p>

          <div className="window-buttons">
            <button className="window-button minimize" type="button">
              &#95;
            </button>
            <button className="window-button maximize" type="button">
              &#9633;
            </button>
            <button
              className="window-button close"
              type="button"
              onClick={onClose}
            >
              &#10005;
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="docs-inner window-body-wrapper">
          {/* Left column */}
          <div className="docs-sidebar">
            <div className="docs-sidebar-header">Folders</div>
            <ul className="docs-folder-tree">
              <li className="docs-folder-root">
                <span className="docs-folder-icon-root">📁</span>
                <span className="docs-folder-root-label">My Documents</span>
              </li>

              <li
                className={
                  "docs-folder-leaf" +
                  (currentFolderId === "root"
                    ? " docs-folder-leaf--active"
                    : "")
                }
                onClick={() => openFolder("root")}
              >
                <span className="docs-folder-bullet">•</span>
                <span className="docs-folder-label">Documents</span>
              </li>

              <li
                className={
                  "docs-folder-leaf" +
                  (currentFolderId === "diary"
                    ? " docs-folder-leaf--active"
                    : "")
                }
                onClick={() => openFolder("diary")}
              >
                <span className="docs-folder-bullet">•</span>
                <span className="docs-folder-label">Diary</span>
              </li>

              <li
                className={
                  "docs-folder-leaf" +
                  (currentFolderId === "school"
                    ? " docs-folder-leaf--active"
                    : "")
                }
                onClick={() => openFolder("school")}
              >
                <span className="docs-folder-bullet">•</span>
                <span className="docs-folder-label">School</span>
              </li>

              <li
                className={
                  "docs-folder-leaf" +
                  (currentFolderId === "photos"
                    ? " docs-folder-leaf--active"
                    : "")
                }
                onClick={() => openFolder("photos")}
              >
                <span className="docs-folder-bullet">•</span>
                <span className="docs-folder-label">Photos</span>
              </li>

              <li
                className={
                  "docs-folder-leaf" +
                  (currentFolderId === "trash"
                    ? " docs-folder-leaf--active"
                    : "")
                }
                onClick={() => openFolder("trash")}
              >
                <span className="docs-folder-bullet">•</span>
                <span className="docs-folder-label">Trash</span>
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div className="docs-main window-body">
            <div className="docs-path-strip">
              <div className="docs-path-breadcrumb">
                <span className="docs-crumb-icon">📂</span>
                {breadcrumb.map((seg, index) => {
                  const isLast = index === breadcrumb.length - 1;
                  return (
                    <span key={seg.id} className="docs-crumb-wrapper">
                      {index > 0 && <span className="docs-crumb-sep">›</span>}
                      <button
                        type="button"
                        className={
                          "docs-crumb" + (isLast ? " docs-crumb--active" : "")
                        }
                        onClick={() =>
                          !isLast && handleBreadcrumbClick(seg.id)
                        }
                      >
                        {seg.name}
                      </button>
                    </span>
                  );
                })}
              </div>
              <div className="docs-path-fake">{currentFolder.fakePath}</div>
            </div>
            <div className="docs-main-split">
              <div className="docs-list">
                <div className="docs-list-header">
                  <div className="docs-col docs-col-name">Name</div>
                  <div className="docs-col docs-col-type">Type</div>
                  <div className="docs-col docs-col-modified">Modified</div>
                </div>

                <div className="docs-list-scroll">
                  {/* Folders */}
                  {currentFolder.folderIds.map((fid) => {
                    const folder = folders[fid];
                    return (
                      <button
                        key={folder.id}
                        type="button"
                        className="docs-row docs-row--folder"
                        onClick={() => openFolder(folder.id)}
                      >
                        <div className="docs-col docs-col-name">
                          <img src={folderIcon} alt="" className="docs-row-icon" />
                          <span className="docs-row-name">{folder.name}</span>
                        </div>
                        <div className="docs-col docs-col-type">Folder</div>
                        <div className="docs-col docs-col-modified">—</div>
                      </button>
                    );
                  })}

                  {/* Files */}
                  {currentFolder.fileIds.map((fileId) => {
                    const file = files[fileId];
                    const isActive = selectedFileId === file.id;
                    return (
                      <button
                        key={file.id}
                        type="button"
                        className={
                          "docs-row docs-row--file" +
                          (isActive ? " docs-row--active" : "")
                        }
                        onClick={() => openFile(file.id)}
                      >
                        <div className="docs-col docs-col-name">
                          <span className="docs-row-fileicon">📄</span>
                          <span className="docs-row-name">{file.name}</span>
                        </div>
                        <div className="docs-col docs-col-type">{file.type}</div>
                        <div className="docs-col docs-col-modified">
                          {file.modified}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prewview */}
              <div className="docs-preview">
                {selectedFile ? (
                  <>
                    <div className="docs-preview-header">
                      <div className="docs-preview-title">{selectedFile.name}</div>
                      <div className="docs-preview-meta">
                        <span className="docs-preview-label">Type:</span>
                        <span className="docs-preview-value">{selectedFile.type}</span>
                        <span className="docs-preview-dot">•</span>
                        <span className="docs-preview-label">Modified:</span>
                        <span className="docs-preview-value">{selectedFile.modified}</span>
                      </div>
                    </div>
                    <div className="docs-preview-body">
                      {selectedFile.body.split("\n").map((line, idx) => (
                        <p key={idx} className="docs-preview-paragraph">
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="docs-preview-empty">
                    Select a document to preview its contents.
                    (Diary files open in a separate window.)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separate diary window */}
      {openDiaryFile && (
        <DiaryWindow file={openDiaryFile} onClose={() => setOpenDiaryId(null)} />
      )}

      {/* Ambiguous question before deleted_draft */}
      {showAmbiguousPrompt && pendingAmbiguousId && (
        <AmbiguousQuestionWindow
          onProceed={handleAmbiguousProceed}
          onClose={handleAmbiguousClose}
        />
      )}

      {/* Password popup for diary files */}
      {showDiaryPasswordPrompt && (
        <PasswordRequiredWindow
          onClose={() => {
            setShowDiaryPasswordPrompt(false);
            setPendingDiaryId(null);
          }}
          onSubmit={handleDiaryPasswordSubmit}
          hint="Four digits"
        />
      )}
    </>
  );
}