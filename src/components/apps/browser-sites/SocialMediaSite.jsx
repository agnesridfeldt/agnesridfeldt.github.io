import React, { useMemo, useState } from "react";
import "./SocialMediaSite.css";

import albumPic from "../../../assets/images/shepherd-moons.jpeg";
import katePfp from "../../../assets/images/aero-pfp.png";
import natPfp from "../../../assets/images/nat-pfp.png";
import aaronPfp from "../../../assets/images/aaron-pfp.png";

const initialFriendPosts = [
  {
    id: "f1",
    name: "Nat",
    handle: "@natcat89",
    time: "Jul 26, 2007",
    text: "bought strawberry lip gloss omg... it smells like SUMMER <3",
  },
  {
    id: "f2",
    name: "Aaron",
    handle: "@aaronH89",
    time: "Jul 24, 2007",
    text: "just got back from the lake, had a blast w/ the katie @07katie07! :)",
  },
  {
    id: "f3",
    name: "Jun",
    handle: "@jupiter88",
    time: "Jul 23, 2007",
    text: "if i was a girl (i'd quit my job lol)",
  },
  {
    id: "f4",
    name: "Jenna",
    handle: "@jennafromtheblock",
    time: "Jul 22, 2007",
    text: "i am soooo bored, anyone wanna hang out later???",
  },
  {
    id: "f5",
    name: "Mark",
    handle: "@markme",
    time: "Jul 21, 2007",
    text: "natalie msg me back!!!",
  },
];

function PinkHeader({ children, right }) {
  return (
    <div className="sm-header">
      <div className="sm-header__title">{children}</div>
      {right ? <div className="sm-header__right">{right}</div> : null}
    </div>
  );
}

export default function SocialMediaSite() {
  const [status, setStatus] = useState("");
  const [friendPosts, setFriendPosts] = useState(initialFriendPosts);

  const [wallPosts] = useState([
    {
      id: "w1",
      name: "Sophie",
      handle: "@sophiex90",
      text: "missed you in badn this year <3",
    },
    {
      id: "w2",
      name: "Jenna",
      handle: "@jennafromtheblock",
      text:
        "miss u katie, can't belive you would've graduated with us today, love you and miss u sm <3",
    },
    {
      id: "w3",
      name: "Mark",
      handle: "@markme",
      text: "she's not dead you idiot. stop spreading rumors.",
    },
    {
      id: "w4",
      name: "Emily",
      handle: "@emilyxox",
      text: "rip :(",
    },
    {
      id: "w5",
      name: "Julie",
      handle: "@julie90",
      text: "you were an amazing friend, i'll never forget you!",
    },
  ]);

  const canPost = status.trim().length > 0;

  const yourPost = useMemo(
    () => ({
      id: `you-${Date.now()}`,
      name: "Katie",
      handle: "@katie",
      time: "Jul 24, 2007 • 11:08 PM",
      text: status.trim(),
    }),
    [status]
  );

  function postStatus() {
    if (!canPost) return;
    setFriendPosts((prev) => [yourPost, ...prev]);
    setStatus("");
  }

  return (
    <div className="sm-wrap" aria-label="Social media content">
      <div className="sm-grid">
        {/* Left column */}
        <aside className="sm-left" aria-label="Profile column">
          <div className="sm-card sm-profileCard">
            <div className="sm-nameRow">
              <div className="sm-name">KATIE ✧♡</div>
            </div>

            <img className="sm-photoImg" src={katePfp} alt="Profile photo" />
            <div className="sm-subline">17 / Pine Lake / NYU</div>
          </div>

          <div className="sm-card">
            <PinkHeader>Now Playing</PinkHeader>
            <div className="sm-nowPlaying">
              <div className="sm-album" aria-label="Album art">
                <img
                  className="sm-albumImg"
                  src={albumPic}
                  alt="Shepherd Moons album art"
                />
              </div>

              <div className="sm-track">
                <div className="sm-trackTitle">Caribbean Blue</div>
                <div className="sm-trackArtist">Enya</div>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <PinkHeader>Top Friends</PinkHeader>
            <div className="sm-topFriends">
              <button className="sm-friendTile" type="button" aria-label="Natalie">
                <img className="sm-friendImg" src={natPfp} alt="" />
              </button>

              <button className="sm-friendTile" type="button" aria-label="Aaron">
                <img className="sm-friendImg" src={aaronPfp} alt="" />
              </button>
            </div>
          </div>

          <div className="sm-card sm-stats">
            <div>
              <strong>profile views:</strong> 2736
            </div>
            <div>
              <strong>last login:</strong> 07/24/07
            </div>
          </div>
        </aside>

        {/* Middle column */}
        <main className="sm-mid" aria-label="Main column">
          <div className="sm-midInner">
            {/* Status */}
            <div className="sm-card sm-composer">
              <PinkHeader right={<span className="sm-muted">keep it short ✿</span>}>
                Write a Status
              </PinkHeader>

              <div className="sm-composerBody">
                <textarea
                  className="sm-textarea"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="what’s going on?"
                  rows={3}
                  maxLength={240}
                />

                <div className="sm-composerFooter">
                  <div className="sm-muted">{status.length}/240</div>
                  <button
                    className={`sm-btn ${!canPost ? "is-disabled" : ""}`}
                    type="button"
                    onClick={postStatus}
                    disabled={!canPost}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>

            {/* Feed */}
            <div className="sm-card sm-feedCard" aria-label="Friends feed">
              <PinkHeader right={<span className="sm-muted">scroll</span>}>
                Friends
              </PinkHeader>

              <div className="sm-feed">
                {friendPosts.map((p) => (
                  <div className="sm-post" key={p.id}>
                    <div className="sm-postTop">
                      <span className="sm-postName">{p.name}</span>
                      <span className="sm-postHandle">{p.handle}</span>
                      <span className="sm-dot">•</span>
                      <span className="sm-postTime">{p.time}</span>
                    </div>

                    <div className="sm-postText">{p.text}</div>
                    <div className="sm-postActions" aria-label="Post actions">
                      <span className="sm-actionText">like</span>
                      <span className="sm-dot">•</span>
                      <span className="sm-actionText">comment</span>
                      <span className="sm-dot">•</span>
                      <span className="sm-actionText">share</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Right column */}
        <aside className="sm-right" aria-label="Media column">
          <div className="sm-card">
            <PinkHeader>Katie&apos;s Media</PinkHeader>
            <div className="sm-mediaGrid">
              <div className="sm-mediaTile" aria-label="Media tile 1" role="img" />
              <div className="sm-mediaTile" aria-label="Media tile 2" role="img" />
              <div className="sm-mediaTile" aria-label="Media tile 3" role="img" />
              <div className="sm-mediaTile" aria-label="Media tile 4" role="img" />
            </div>
          </div>

          <div className="sm-card sm-wallCard">
            <PinkHeader>Katie&apos;s Wall</PinkHeader>
            <div className="sm-wallBody">
              <div className="sm-wallList" aria-label="Wall posts">
                {wallPosts.map((p) => (
                  <div className="sm-wallPost" key={p.id}>
                    <div className="sm-wallMeta">
                      <span className="sm-wallName">{p.name}</span>
                      <span className="sm-wallHandle">{p.handle}</span>
                    </div>
                    <div className="sm-wallText">{p.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}