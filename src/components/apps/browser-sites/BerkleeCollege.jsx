import React from "react";
import "./BerkleeCollege.css";

export default function BerkleeCollege() {
  return (
    <div className="bk05-wrap">
      <a className="bk05-skip" href="#content">
        Skip to main content
      </a>

      {/* Header */}
      <div className="bk05-topbar">
        <div className="bk05-topbar-inner">
          <div className="bk05-brand">
            <span className="bk05-mark" aria-hidden="true">
              B
            </span>
            <div className="bk05-brandtext">
              <div className="bk05-school">Berklee College of Music</div>
              <div className="bk05-catalog">Undergraduate Catalog 2005–2006</div>
            </div>
          </div>

          <div className="bk05-utilnav">
            <a href="#">Home</a> | <a href="#">A–Z Index</a> |{" "}
            <a href="#">Search</a> | <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="bk05-tabs">
        <div className="bk05-tabs-inner">
          <a className="bk05-tab is-active" href="#">
            Majors &amp; Programs
          </a>
          <a className="bk05-tab" href="#">
            Departments
          </a>
          <a className="bk05-tab" href="#">
            Courses
          </a>
          <a className="bk05-tab" href="#">
            Admissions
          </a>
          <a className="bk05-tab" href="#">
            Student Services
          </a>
        </div>
      </div>
      <div className="bk05-crumbs">
        <strong>You are here:</strong> <a href="#">Home</a> &raquo;{" "}
        <a href="#">Undergraduate</a> &raquo; <a href="#">Composition</a> &raquo;{" "}
        <span>Bachelor of Music in Composition</span>
      </div>

      <div className="bk05-page">
        <div className="bk05-main">
          {/* Left column */}
          <aside className="bk05-sidebar" aria-label="Section navigation">
            <div className="bk05-sidebox">
              <div className="bk05-sidebox-title">In This Catalog Entry</div>
              <ul className="bk05-sidelinks">
                <li>
                  <a href="#overview">Program Overview</a>
                </li>
                <li>
                  <a href="#learn">What Will I Learn?</a>
                </li>
                <li>
                  <a href="#requirements">Requirements &amp; Credits</a>
                </li>
                <li>
                  <a href="#courses">Required Courses (Major)</a>
                </li>
                <li>
                  <a href="#notes">Advising &amp; Notes</a>
                </li>
              </ul>
            </div>

            <div className="bk05-sidebox">
              <div className="bk05-sidebox-title">Quick Links</div>
              <ul className="bk05-sidelinks">
                <li>
                  <a href="#">How to Apply</a>
                </li>
                <li>
                  <a href="#">Request Information</a>
                </li>
                <li>
                  <a href="#">Print-Friendly Version</a>
                </li>
                <li>
                  <a href="#">Download PDF</a>
                </li>
              </ul>
            </div>

            <div className="bk05-sidebox">
              <div className="bk05-sidebox-title">Contact</div>
              <div className="bk05-sidecontent">
                <div>
                  <strong>Composition Department</strong>
                </div>
                <div className="bk05-muted">
                  150 Massachusetts Avenue
                  <br />
                  Boston, MA 02115
                </div>
                <div className="bk05-muted">Phone: 617-747-8629</div>
                <div className="bk05-muted">
                  Email: <a href="#">composition@berklee.edu</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="bk05-content" id="content">
            <div className="bk05-hgroup">
              <h1 className="bk05-title">Bachelor of Music in Composition</h1>
              <div className="bk05-meta">
                <strong>Location:</strong> Boston, MA &nbsp;|&nbsp;{" "}
                <strong>Program:</strong> Four-Year (8 semesters)
              </div>
              <div className="bk05-meta bk05-meta-small">
                <strong>Department:</strong> Composition &nbsp;|&nbsp;{" "}
                <strong>Degree:</strong> B.M.
              </div>
            </div>

            <div className="bk05-alert">
              <strong>Catalog notice:</strong> Requirements and course offerings may change.
              Students should consult their adviser each term for current sequencing.
            </div>

            <h2 id="overview">Program Overview</h2>
            <p>
              Composition majors develop an individual compositional voice through active
              writing projects alongside study in orchestration, analysis, harmony, and
              counterpoint. Over eight semesters, students complete the core music
              curriculum and gain opportunities to work with performers, faculty, and
              visiting artists.
            </p>

            <div className="bk05-box">
              <div className="bk05-box-title">Full Description (Summary)</div>
              <p>
                The program emphasizes fundamentals and contemporary practices, preparing
                students to build a portfolio of scores (including solo, chamber, vocal,
                and orchestral works). Students also develop professional skills through
                rehearsals, conducting, producing performances, and recording original
                compositions.
              </p>
              <p className="bk05-muted" style={{ marginTop: 6 }}>
                Career paths may include composer, orchestrator/arranger, music director,
                educator, scholar, and related roles.
              </p>
            </div>

            <h2 id="learn">What Will I Learn?</h2>
            <ul className="bk05-bullets">
              <li>Compose original scores for solo, chamber, vocal/choir, and full orchestra.</li>
              <li>Develop an individual compositional voice.</li>
              <li>Analyze music across contemporary and historical styles.</li>
              <li>Master fundamentals in orchestration, harmony, counterpoint, techniques, and history.</li>
              <li>Synthesize historical practices into original creative work.</li>
              <li>Rehearse and conduct performances of original compositions.</li>
              <li>Produce recordings of original compositions.</li>
              <li>Evaluate historical, social, and cultural contexts of musical works.</li>
            </ul>

            <h2 id="requirements">Requirements &amp; Credits</h2>

            <h3 className="bk05-subhead">Entrance Requirements</h3>
            <p>There are no entrance requirements to declare this major.</p>

            <h3 className="bk05-subhead">Credit Summary</h3>
            <table className="bk05-table" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bk05-rowhead">
                  <td colSpan={2}>Degree Totals (Bachelor of Music)</td>
                </tr>
                <tr>
                  <td>Major-specific required credits (Composition)</td>
                  <td className="bk05-num">32</td>
                </tr>
                <tr>
                  <td>B.M. core music curriculum</td>
                  <td className="bk05-num">41</td>
                </tr>
                <tr>
                  <td>Liberal arts courses</td>
                  <td className="bk05-num">40</td>
                </tr>
                <tr>
                  <td>General electives</td>
                  <td className="bk05-num">7</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Credits</strong>
                  </td>
                  <td className="bk05-num">
                    <strong>120</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="bk05-muted">
              Note: In addition to the major-required credits listed below, Composition
              majors complete specific core music and music history requirements as part of
              the degree totals.
            </p>

            <h2 id="courses">Required Courses (Major)</h2>
            <table className="bk05-plan" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Title</th>
                  <th scope="col">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bk05-code">ISKB-211</td>
                  <td>Basic Keyboard Techniques 1</td>
                  <td className="bk05-num">1</td>
                </tr>
                <tr>
                  <td className="bk05-code">ISKB-212</td>
                  <td>Basic Keyboard Techniques 2</td>
                  <td className="bk05-num">1</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-221</td>
                  <td>Techniques of Tonal Writing</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CP-215</td>
                  <td>The Art of Counterpoint 2</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">MLAN-311</td>
                  <td>Analysis of Classical and Romantic Music</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-311</td>
                  <td>Contemporary Techniques in Composition 1</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-312</td>
                  <td>Contemporary Techniques in Composition 2</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-231</td>
                  <td>Instrumentation and Score Preparation</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">MLAN-312</td>
                  <td>Analysis of 20th- and 21st-Century Music</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-441</td>
                  <td>Scoring for Full Orchestra</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-398</td>
                  <td>Directed Study in Composition 1</td>
                  <td className="bk05-num">1</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-497</td>
                  <td>Directed Study in Composition 2</td>
                  <td className="bk05-num">1</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-498</td>
                  <td>Directed Study in Orchestral Composition 3</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">CM-490</td>
                  <td>Advanced Projects in Composition</td>
                  <td className="bk05-num">2</td>
                </tr>
                <tr>
                  <td className="bk05-code">—</td>
                  <td>Major Electives</td>
                  <td className="bk05-num">8</td>
                </tr>
                <tr>
                  <td className="bk05-code">—</td>
                  <td>Senior Portfolio</td>
                  <td className="bk05-num">—</td>
                </tr>
              </tbody>
            </table>

            <div className="bk05-footnotes">
              <div>
                <strong>Also required (counts within core/liberal arts totals):</strong>
              </div>
              <ul className="bk05-bullets" style={{ marginTop: 6 }}>
                <li>
                  <span className="bk05-code">ET-231</span> Solfege 1 (2 credits)
                </li>
                <li>
                  <span className="bk05-code">ET-232</span> Solfege 2 (2 credits)
                </li>
                <li>
                  <span className="bk05-code">MHIS-251</span> General Music History 1 (2 credits)
                </li>
                <li>
                  <span className="bk05-code">MHIS-252</span> General Music History 2 (2 credits)
                </li>
              </ul>
            </div>

            <h2 id="notes">Advising &amp; Notes</h2>
            <ul className="bk05-bullets">
              <li>
                Advising is required for accurate course sequencing and to confirm portfolio
                expectations and elective selections.
              </li>
              <li>
                Students are encouraged to take advantage of performance, rehearsal, and
                recording opportunities to build a strong portfolio.
              </li>
              <li className="bk05-muted">
                Department leadership and contact information are listed in the left column.
              </li>
            </ul>

            <div className="bk05-footer">
              <div className="bk05-footer-inner">
                <div>
                  &copy; 2005 Berklee College of Music • <a href="#">Privacy</a> •{" "}
                  <a href="#">Accessibility</a>
                </div>
                <div className="bk05-muted">
                  Page last updated: August 2005 • Maintained by: Academic Affairs Web Team
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}