import React from "react";
import "./MusicPlayerApplication.css";

export default function PlaylistModal({
  playlist,
  tracks,
  onClose,
  onPlayTrack,
}) {
  if (!playlist) return null;

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

  return (
    <aside className="playlist-panel">
      <header className="playlist-panel-header">
        <div className="playlist-panel-meta">
          <div
            className="playlist-panel-cover"
            style={getCoverStyle(playlist)}
          />
          <div className="playlist-panel-text">
            <span className="playlist-panel-label">Playlist</span>
            <h2 className="playlist-panel-title">{playlist.name}</h2>
          </div>
        </div>

        <button
          type="button"
          className="playlist-panel-close"
          onClick={onClose}
        >
          ✕
        </button>
      </header>

      <ul className="playlist-panel-tracklist">
        {tracks.map((track) => (
          <li key={track.id} className="playlist-panel-track-row">
            <button
              type="button"
              className="playlist-panel-track-button"
              onClick={() => onPlayTrack(track)}
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}