import React, { useEffect, useRef, useState } from "react";
import "./BrowserApplication.css";

// Sites (bookmarked)
import NYUBulletin2005 from "./browser-sites/NYUBulletin2005.jsx";
import BerkleeCollege from "./browser-sites/BerkleeCollege.jsx";
import SocialMediaSite from "./browser-sites/SocialMediaSite.jsx";

// Hidden site (not bookmarked)
import BusBookingConfirmation from "./browser-sites/BusBookingConfirmation.jsx";

const SITES = [
  {
    id: "socialmedia",
    label: "Aero Social",
    url: "https://www.aerosocial.com/user/profile",
    Component: SocialMediaSite,
  },
  {
    id: "nyu",
    label: "NYU",
    url: "https://www.bulletins.nyu.edu/undergraduate/arts-science/programs/music-ba/",
    Component: NYUBulletin2005,
  },
  {
    id: "berklee",
    label: "Berklee College",
    url: "https://www.college.berklee.edu/composition/bachelor-of-music-in-composition",
    Component: BerkleeCollege,
  },
];

// Hidden sites
const HIDDEN_SITES = [
  {
    id: "busconfirm",
    label: "Booking Confirmation (Hidden)",
    url: "https://tickets.northeastcoach.example/confirm/BOS-7Q2K-1906",
    Component: BusBookingConfirmation,
  },
];

const ALL_SITES = [...SITES, ...HIDDEN_SITES];

export default function BrowserApplication({ onClose, initialSiteId, forcedSiteId }) {
  const [position, setPosition] = useState({ x: 150, y: 70 });
  const dragRef = useRef(null);

  const [currentSiteId, setCurrentSiteId] = useState(initialSiteId ?? SITES[0].id);

  // Open forced sites
  useEffect(() => {
    if (forcedSiteId) setCurrentSiteId(forcedSiteId);
  }, [forcedSiteId]);

  const currentSite = ALL_SITES.find((s) => s.id === currentSiteId) ?? SITES[0];

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

  return (
    <div className="browser-window strips" style={{ top: position.y, left: position.x }}>
      <div className="browser-titlebar window-header" onMouseDown={handleTitleMouseDown}>
        <p className="msn-title">Internet</p>

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

      <div className="browser-inner window-body-wrapper">
        <div className="browser-toolbar">
          <div className="browser-toolbar-left">
            <span className="browser-fav-icon">☺</span>
          </div>
          <div className="browser-address-wrapper">
            <input className="browser-address-input" type="text" value={currentSite.url} readOnly />
          </div>
        </div>

        <div className="browser-page-frame">
          {/* Bookmarks */}
          <div className="browser-bookmarks">
            {SITES.map((site) => (
              <button
                key={site.id}
                type="button"
                className={
                  "browser-bookmark" + (site.id === currentSiteId ? " browser-bookmark--active" : "")
                }
                onClick={() => setCurrentSiteId(site.id)}
              >
                {site.label}
              </button>
            ))}
          </div>

          <div className="browser-page-scroll">
            <currentSite.Component />
          </div>
        </div>
      </div>
    </div>
  );
}