import React from "react";
import "./Help.css";
import RightArrowBtn from "../assets/desktop/right-arrow-button.png";

export default function Help({ onBack }) {
  return (
    <div className="help-screen">
      <div className="help-band" />
      <div className="help-overlay">
        {/* Header */}
        <header className="help-header">
          <button
            type="button"
            className="help-back"
            onClick={onBack}
            aria-label="Back"
            title="Back"
          >
            <img className="help-back-icon" src={RightArrowBtn} alt="" aria-hidden="true" />
          </button>

          <div className="help-header-text">
            <h1 className="help-title">Help & Hints</h1>
          </div>
        </header>

        {/* Body Instructions */}
        <div className="help-body">
          {/* Left column */}
          <section className="help-column help-column--left">
            <div className="help-card">
              <h2 className="help-section-title">What is this game?</h2>
              <p className="help-paragraph">
                <em>All That&apos;s Left</em> is about going through an old
                laptop from around 2007. There are no timers, no scores and no
                right order to do things. Your job is to read, listen, and pay
                attention to how pieces connect.
              </p>
            </div>

            <div className="help-card">
              <h2 className="help-section-title">Basic controls</h2>
              <ul className="help-list">
                <li>Click desktop icons to open apps and windows.</li>
                <li>Drag windows by their top bar to move them around.</li>
                <li>Scroll inside windows to read long messages or documents.</li>
                <li>Use the close button (×) on a window to close it again.</li>
                <li>
                  The <strong>Log off</strong> button in the taskbar takes you
                  back out of the desktop.
                </li>
              </ul>
            </div>

            <div className="help-card">
              <h2 className="help-section-title">Your goal</h2>
              <p className="help-paragraph">
                You&apos;re trying to understand who Katie was, what was
                happening in her life, and how her relationships looked at this
                point in time. Emails, documents, playlists, widgets and
                messages are all pieces of that picture.
              </p>
              <p className="help-paragraph">
                There&apos;s no single “correct” path – follow your curiosity,
                and notice what keeps repeating: names, dates, places, songs.
              </p>
            </div>

            <div className="help-card">
              <h2 className="help-section-title">Where to start</h2>
              <ul className="help-list">
                <li>
                  <strong>Mail</strong> – practical things like school,
                  housing, deadlines. It sets the stakes.
                </li>
                <li>
                  <strong>To Do</strong> – what Katie meant to do, but maybe
                  hasn&apos;t.
                </li>
                <li>
                  <strong>Documents</strong> – drafts, schoolwork and diary
                  files. This is where a lot of the story lives.
                </li>
                <li>
                  <strong>Music</strong> – not just background noise. Playlists
                  can hint at moods, memories and people.
                </li>
              </ul>
            </div>
          </section>

          {/* Roght column */}
          <section className="help-column help-column--right">
            <div className="help-card help-card--hints">
              <h2 className="help-section-title">Hints if you get stuck</h2>
              <p className="help-paragraph help-paragraph--small">
                Each section below opens in steps – start with the first hint,
                only open more if you really need to.
              </p>

              <details className="help-hint-group">
                <summary className="help-hint-summary">
                  I can&apos;t log in to the laptop
                </summary>
                <ol className="help-hint-list">
                  <li>
                    Look at the small text under the password field – it&apos;s
                    already trying to help you.
                  </li>
                  <li>
                    This isn&apos;t a complicated password, it&apos;s closer to
                    a <strong>first name</strong>.
                  </li>
                  <li>
                    Use a single name with the{" "}
                    <strong>first letter capitalised</strong> and the rest
                    lowercase. No spaces, numbers or symbols.
                  </li>
                </ol>
              </details>

              <details className="help-hint-group">
                <summary className="help-hint-summary">
                  I&apos;m on the desktop and don&apos;t know what to do
                </summary>
                <ol className="help-hint-list">
                  <li>
                    Start with the things that feel most like everyday life:
                    Mail, To Do and Documents.
                  </li>
                  <li>
                    Mail tells you what Katie is supposed to be doing right now.
                    To Do shows what she&apos;s telling herself she&apos;ll get
                    around to.
                  </li>
                  <li>
                    When something feels important – a date, a place, a name, a
                    code – mentally underline it. You may see it again in a
                    different app.
                  </li>
                </ol>
              </details>

              <details className="help-hint-group">
                <summary className="help-hint-summary">
                  Messenger is locked / asking for a password
                </summary>
                <ol className="help-hint-list">
                  <li>
                    Messenger is more private than email, so it&apos;s meant to
                    feel harder to get into.
                  </li>
                  <li>
                    Look for things that <strong>look like codes</strong> –
                    short strings mixing letters and numbers – in more formal
                    places first, like documents or mail.
                  </li>
                  <li>
                    If you&apos;ve looked through the obvious places and still
                    can&apos;t find anything, it might mean you&apos;ve seen
                    everything you&apos;re meant to in this version of the game.
                  </li>
                </ol>
              </details>

              <details className="help-hint-group">
                <summary className="help-hint-summary">
                  The diary files are locked
                </summary>
                <ol className="help-hint-list">
                  <li>
                    The diaries live under{" "}
                    <strong>Documents → Diary</strong>.
                  </li>
                  <li>
                    They&apos;re more personal than the rest of the files, so
                    they&apos;re extra protected on purpose.
                  </li>
                  <li>
                    If you don&apos;t come across a clear reference to a
                    password anywhere, don&apos;t panic – you might not be
                    meant to open them yet in this build.
                  </li>
                </ol>
              </details>

              <details className="help-hint-group">
                <summary className="help-hint-summary">
                  General tips for exploring
                </summary>
                <ol className="help-hint-list">
                  <li>You can&apos;t break anything. Open and close freely.</li>
                  <li>
                    Windows can overlap – sometimes it helps to move them
                    around and see things side by side.
                  </li>
                  <li>
                    If you&apos;re overwhelmed, pick one thread – a person, a
                    place, a date, a playlist – and follow only that for a
                    while.
                  </li>
                </ol>
              </details>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}