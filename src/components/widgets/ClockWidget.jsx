import React, { useEffect, useState } from "react";
import "./ClockWidget.css";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  const hRotation = 30 * (hh % 12) + mm / 2;
  const mRotation = 6 * mm;
  const sRotation = 6 * ss;

  return (
    <div className="clock-widget">
      <div className="clock-face">
        <div
          id="hour"
          className="hand hand-hour"
          style={{ transform: `rotate(${hRotation}deg)` }}
        >
          <i></i>
        </div>

        <div
          id="min"
          className="hand hand-minute"
          style={{ transform: `rotate(${mRotation}deg)` }}
        >
          <i></i>
        </div>

        <div
          id="sec"
          className="hand hand-second"
          style={{ transform: `rotate(${sRotation}deg)` }}
        >
          <i></i>
        </div>

        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="tick" style={{ "--i": i }} />
        ))}
      </div>
    </div>
  );
}