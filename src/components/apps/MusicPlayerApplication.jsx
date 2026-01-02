import React, { useEffect, useRef, useState } from "react";
import "./MusicPlayerApplication.css";

// Playlist and track data
import { playlists } from "../../data/playlists";
import { tracks } from "../../data/tracks";
import PlaylistModal from "./PlaylistModal";

// Icons
import backTrackIcon from "../../assets/desktop/back-track.png";
import forwardTrackIcon from "../../assets/desktop/forward-track.png";
import buttonBaseIcon from "../../assets/desktop/button-base.png";
import shuffleIcon from "../../assets/desktop/shuffle.png";
import repeatIcon from "../../assets/desktop/repeat.png";
import volumeIcon from "../../assets/desktop/volume.png";

export default function MusicPlayerApplication({ onClose }) {
  const [position, setPosition] = useState({ x: 130, y: 60 });
  const dragRef = useRef(null);
  const [activeYear, setActiveYear] = useState("all");

  // Playlist overlay
  const [openPlaylistId, setOpenPlaylistId] = useState(null);

  // Player state
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Filter playlists by year
  const filteredPlaylists = playlists.filter((pl) =>
    activeYear === "all" ? true : pl.year === Number(activeYear)
  );

  const openPlaylist = (id) => setOpenPlaylistId(id);
  const closePlaylist = () => setOpenPlaylistId(null);

  const activePlaylist =
    playlists.find((p) => p.id === openPlaylistId) || null;

  const activePlaylistTracks = activePlaylist
    ? activePlaylist.trackIds
      .map((id) => tracks.find((t) => t.id === id))
      .filter(Boolean)
    : [];

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

  // Cover image, color fallback
  function getCoverStyle(playlist) {
    const cover = playlist?.cover;

    if (cover?.type === "image" && cover.src) {
      return {
        backgroundImage: `url(${cover.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
      };
    }

    return { backgroundColor: playlist?.coverColor ?? "#B5537D" };
  }

  useEffect(
    () => () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    },
    []
  );

  // Playback controls
  function playTrack(track) {
    const audio = audioRef.current;
    if (!audio || !track) return;

    audio.pause();

    if (!currentTrack || currentTrack.id !== track.id) {
      audio.src = track.src;
      setCurrentTrack(track);
    }

    audio.load();
    audio.currentTime = 0;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("Audio play error:", err);
      });
  }

  function togglePlayPause() {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Audio play error", err));
    }
  }

  function stopPlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }

  const yearLabel =
    activeYear === "all" ? "All Playlists" : `Playlists (${activeYear})`;

  return (
    <>
      <audio ref={audioRef} />

      <div
        className="music-window strips"
        style={{ top: position.y, left: position.x }}
      >
        <div
          className="music-titlebar window-header"
          onMouseDown={handleTitleMouseDown}
        >
          <p className="msn-title">Music Player</p>
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

        <div className="music-inner window-body-wrapper">
          <div className="music-sidebar">
            <div className="music-sidebar-header">Library</div>
            <ul className="music-folder-tree">
              <li className="music-folder-root">
                <span className="music-folder-icon">📂</span>
                <span className="music-folder-label">Playlists</span>
              </li>

              {/* All playlists */}
              <li
                className={
                  "music-folder-child" +
                  (activeYear === "all"
                    ? " music-folder-child--active"
                    : "")
                }
                onClick={() => setActiveYear("all")}
              >
                <span className="music-folder-bullet">•</span>
                <span className="music-folder-label">All</span>
              </li>

              {/* 2005 */}
              <li
                className={
                  "music-folder-child" +
                  (activeYear === "2005"
                    ? " music-folder-child--active"
                    : "")
                }
                onClick={() => setActiveYear("2005")}
              >
                <span className="music-folder-bullet">•</span>
                <span className="music-folder-label">2005</span>
              </li>

              {/* 2006 */}
              <li
                className={
                  "music-folder-child" +
                  (activeYear === "2006"
                    ? " music-folder-child--active"
                    : "")
                }
                onClick={() => setActiveYear("2006")}
              >
                <span className="music-folder-bullet">•</span>
                <span className="music-folder-label">2006</span>
              </li>

              {/* 2007 */}
              <li
                className={
                  "music-folder-child" +
                  (activeYear === "2007"
                    ? " music-folder-child--active"
                    : "")
                }
                onClick={() => setActiveYear("2007")}
              >
                <span className="music-folder-bullet">•</span>
                <span className="music-folder-label">2007</span>
              </li>
            </ul>
          </div>

          <div className="music-main window-body">
            <div className="music-breadcrumb-strip">
              <span className="music-crumb-icon">🎵</span>
              <span className="music-crumb">Music</span>
              <span className="music-crumb-sep">›</span>
              <span className="music-crumb">Library</span>
              <span className="music-crumb-sep">›</span>
              <span className="music-crumb music-crumb--active">
                {yearLabel}
              </span>
            </div>

            {/* Content area */}
            <div className="music-grid-wrapper">
              <div className="music-grid">
                {filteredPlaylists.map((pl) => (
                  <button
                    key={pl.id}
                    type="button"
                    className="music-playlist-card"
                    onClick={() => openPlaylist(pl.id)}
                  >
                    <div
                      className="music-playlist-cover"
                      style={getCoverStyle(pl)}
                    />
                    <div className="music-playlist-title">{pl.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Playlist side panel */}
            <PlaylistModal
              playlist={activePlaylist}
              tracks={activePlaylistTracks}
              onClose={closePlaylist}
              onPlayTrack={playTrack}
            />
          </div>
        </div>

        <div className="music-player-bar">
          <div className="music-player-inner">
            <div className="player-left-group">
              <button type="button" className="player-icon-button">
                <img src={shuffleIcon} alt="Shuffle" />
              </button>

              <button type="button" className="player-icon-button">
                <img src={repeatIcon} alt="Repeat" />
              </button>

              <span className="player-divider" />

              <button
                type="button"
                className="player-stop-button"
                onClick={stopPlayback}
              >
                <span />
              </button>
            </div>

            <div className="player-center-group">
              <button type="button" className="player-track-button">
                <img src={backTrackIcon} alt="Previous track" />
              </button>

              <button
                type="button"
                className="player-base-button"
                onClick={togglePlayPause}
                disabled={!currentTrack}
              >
                <img
                  src={buttonBaseIcon}
                  alt="Play"
                  className="player-base-img"
                />
                <span className="player-base-icon">
                  {isPlaying ? "❚❚" : "▶"}
                </span>
              </button>

              <button type="button" className="player-track-button">
                <img src={forwardTrackIcon} alt="Next track" />
              </button>
            </div>

            <div className="player-right-group">
              <img
                className="player-volume-icon"
                src={volumeIcon}
                alt="Volume"
              />
              <div className="player-volume-slider">
                <div className="player-volume-track" />
                <div className="player-volume-knob" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}