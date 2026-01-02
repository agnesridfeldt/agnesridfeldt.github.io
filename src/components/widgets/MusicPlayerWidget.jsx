import React, { useEffect, useRef, useState } from "react";
import "./MusicPlayerWidget.css";
import shuffleIcon from "../../assets/images/Shuffle.png";
import repeatIcon from "../../assets/images/Repeat.png";

export default function MusicPlayerWidget({
  title = "Carabiean Blue",
  src,
  onPrev,
  onNext,
}) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  function formatTime(sec) {
    if (!sec || Number.isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTogglePlay = () => {
    setIsPlaying((p) => !p);
  };

  const handleScrub = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="music-widget">
      <audio ref={audioRef} src={src} />

      <div className="mw-left">
        <div className="mw-circle">
          <div className="mw-volume-plus">+</div>
          <div className="mw-volume-minus">−</div>

          <button
            className="mw-skip mw-skip-prev"
            type="button"
            onClick={onPrev}
          >
            ◀
          </button>

          <button
            className="mw-skip mw-skip-next"
            type="button"
            onClick={onNext}
          >
            ▶
          </button>

          <button
            className="mw-play"
            type="button"
            onClick={handleTogglePlay}
          >
            {isPlaying ? (
              <span className="mw-pause-icon">
                <span />
                <span />
              </span>
            ) : (
              <span className="mw-play-icon">▶</span>
            )}
          </button>
        </div>
      </div>

      <div className="mw-right">
        <div className="mw-pink-panel">
          <div className="mw-title">{title}</div>

          <div className="mw-progress-row">
            <div className="mw-progress-track">
              <div
                className="mw-progress-fill"
                style={{
                  width:
                    duration > 0
                      ? `${(currentTime / duration) * 100}%`
                      : "0%",
                }}
              />
              <div
                className="mw-progress-thumb"
                style={{
                  left:
                    duration > 0
                      ? `${(currentTime / duration) * 100}%`
                      : "0%",
                }}
              />
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleScrub}
              />
            </div>
          </div>

          <div className="mw-bottom-row">
            <img
              src={shuffleIcon}
              alt="Shuffle"
              className="mw-icon-img"
            />
            <span className="mw-time">{formatTime(currentTime)}</span>
            <img
              src={repeatIcon}
              alt="Repeat"
              className="mw-icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}