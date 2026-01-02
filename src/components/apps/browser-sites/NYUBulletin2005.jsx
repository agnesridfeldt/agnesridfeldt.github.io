import React from "react";
import "./NYUBulletin2005.css";

export default function NYUBulletin2005() {
  return (
    <div className="nyu05-wrap">
      <a className="nyu05-skip" href="#content">
        Skip to main content
      </a>

      {/* Header */}
      <div className="nyu05-topbar">
        <div className="nyu05-topbar-inner">
          <div className="nyu05-brand">
            <span className="nyu05-crest" aria-hidden="true">
              ■
            </span>
            <div className="nyu05-brand-text">
              <div className="nyu05-uni">New York University</div>
              <div className="nyu05-bulletin">Undergraduate Bulletin 2005–2006</div>
            </div>
          </div>

          <div className="nyu05-utilnav">
            <a href="#">NYU Home</a> | <a href="#">A–Z Index</a> |{" "}
            <a href="#">Search</a> | <a href="#">Contact</a>
          </div>
        </div>
      </div>

      <div className="nyu05-tabs">
        <div className="nyu05-tabs-inner">
          <a className="nyu05-tab is-active" href="#">
            College of Arts &amp; Science
          </a>
          <a className="nyu05-tab" href="#">
            Departments
          </a>
          <a className="nyu05-tab" href="#">
            Programs
          </a>
          <a className="nyu05-tab" href="#">
            Courses
          </a>
          <a className="nyu05-tab" href="#">
            Policies
          </a>
        </div>
      </div>

      <div className="nyu05-crumbs">
        <strong>You are here:</strong> <a href="#">Home</a> &raquo;{" "}
        <a href="#">Undergraduate</a> &raquo; <a href="#">College of Arts &amp; Science</a>{" "}
        &raquo; <a href="#">Programs</a> &raquo; <span>Music (B.A.)</span>
      </div>

      {/* Main content */}
      <div className="nyu05-page">
        <div className="nyu05-main">
          {/* Left column */}
          <aside className="nyu05-sidebar" aria-label="Section navigation">
            <div className="nyu05-sidebox">
              <div className="nyu05-sidebox-title">On This Page</div>
              <ul className="nyu05-sidelinks">
                <li>
                  <a href="#overview">Program Description</a>
                </li>
                <li>
                  <a href="#requirements">Program Requirements</a>
                </li>
                <li>
                  <a href="#plan">Sample Plan of Study</a>
                </li>
                <li>
                  <a href="#outcomes">Learning Outcomes</a>
                </li>
                <li>
                  <a href="#policies">Program Policies</a>
                </li>
              </ul>
            </div>

            <div className="nyu05-sidebox">
              <div className="nyu05-sidebox-title">Quick Links</div>
              <ul className="nyu05-sidelinks">
                <li>
                  <a href="#">Department Website</a>
                </li>
                <li>
                  <a href="#">Print-Friendly Version</a>
                </li>
                <li>
                  <a href="#">Download PDF</a>
                </li>
                <li>
                  <a href="#">How to Apply</a>
                </li>
              </ul>
            </div>

            <div className="nyu05-sidebox">
              <div className="nyu05-sidebox-title">Contact</div>
              <div className="nyu05-sidecontent">
                <div>
                  <strong>Department of Music</strong>
                </div>
                <div>College of Arts &amp; Science</div>
                <div className="nyu05-muted">Washington Square</div>
                <div className="nyu05-muted">(212) 998-XXXX</div>
                <div className="nyu05-muted">
                  <a href="#">music@nyu.edu</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="nyu05-content" id="content">
            <div className="nyu05-hgroup">
              <h1 className="nyu05-title">Music (B.A.)</h1>
              <div className="nyu05-meta">
                <strong>Department:</strong> Music &nbsp;|&nbsp;{" "}
                <strong>School:</strong> College of Arts and Science
              </div>
              <div className="nyu05-meta nyu05-meta-small">
                <strong>Taxonomy Codes:</strong> NYSED: 08060 &nbsp; HEGIS: 1005.00
                &nbsp; CIP: 50.0901
              </div>
            </div>

            <div className="nyu05-note">
              <strong>Bulletin notice:</strong> Requirements and policies are subject to
              change. Students should consult the department adviser each term.
            </div>

            <h2 id="overview">Program Description</h2>
            <p>
              The Department of Music offers both a major and a minor in Music. These
              programs give students opportunities to gain proficiency in music theory,
              history, and interpretation across musical traditions, while developing
              critical and listening skills. The major also provides opportunities for
              independent research during the final year.
            </p>
            <p>
              The department offers courses in ethnomusicology, popular music, cultural
              studies of music, and sound studies. Many courses are open to non-majors.
            </p>

            <div className="nyu05-box">
              <div className="nyu05-box-title">Examples of Recent Course Topics</div>
              <ul className="nyu05-bullets">
                <li>Music in the Post-9/11 World</li>
                <li>Introduction to World Music</li>
                <li>Music in New York</li>
                <li>Global Hip-Hop and the Politics of Culture</li>
                <li>Music, Sound, and Technology</li>
              </ul>
              <div className="nyu05-box-foot">
                <span className="nyu05-muted">
                  Facilities &amp; activities may include digital resources for composition
                  and research, department ensembles, and performance opportunities.
                </span>
              </div>
            </div>

            <h3 className="nyu05-subhead">Honors Program</h3>
            <p>
              Highly motivated students may apply for departmental honors, which culminate
              in a senior-year independent study supervised by a faculty member. Students
              must maintain a minimum <strong>3.65 GPA</strong> overall and in the major.
            </p>
            <p className="nyu05-muted">
              Honors applications are typically submitted by email to the Director of
              Undergraduate Studies by April of the junior year and include a brief project
              description plus the name of a faculty supervisor.
            </p>

            <h3 className="nyu05-subhead">Admissions</h3>
            <p>
              Undergraduate admissions information is handled through NYU’s Office of
              Undergraduate Admissions. See “How to Apply” for application requirements.
            </p>

            <h2 id="requirements">Program Requirements</h2>
            <p>
              The major requires <strong>ten 4-credit courses (40 credits)</strong> completed
              with a grade of <strong>C or better</strong>.
            </p>

            <table className="nyu05-table" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th scope="col">Requirement Area</th>
                  <th scope="col">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="nyu05-rowhead">
                  <td colSpan={2}>General Education Requirements</td>
                </tr>
                <tr>
                  <td>First-Year Seminar</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>EXPOS-UA 1 Writing as Inquiry</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Foreign Language (through Intermediate level)¹</td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td>Quantitative Reasoning</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Physical Science</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Life Science</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Texts and Ideas</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Cultures and Contexts</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Societies and the Social Sciences</td>
                  <td className="nyu05-num">4</td>
                </tr>

                <tr className="nyu05-rowhead">
                  <td colSpan={2}>Major Requirements (Music)</td>
                </tr>
                <tr>
                  <td>MUSIC-UA 193 Seminar:</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>MUSIC-UA 201 Music Theory I</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>MUSIC-UA 202 Music Theory II</td>
                  <td className="nyu05-num">4</td>
                </tr>
                <tr>
                  <td>Select two courses in “Music, History, and Cultures”</td>
                  <td className="nyu05-num">8</td>
                </tr>
                <tr>
                  <td>Select two courses in “Sonic Art”</td>
                  <td className="nyu05-num">8</td>
                </tr>
                <tr>
                  <td>Select three MUSIC-UA major electives²</td>
                  <td className="nyu05-num">12</td>
                </tr>

                <tr className="nyu05-rowhead">
                  <td colSpan={2}>Degree Totals</td>
                </tr>
                <tr>
                  <td>Other Elective Credits</td>
                  <td className="nyu05-num">40</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Credits</strong>
                  </td>
                  <td className="nyu05-num">
                    <strong>128</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="nyu05-footnotes">
              <div>
                <strong>¹</strong> The foreign language requirement is satisfied upon
                successful completion through the Intermediate level. If completed in fewer
                than 16 credits, remaining credits are made up with elective credit.
              </div>
              <div style={{ marginTop: 6 }}>
                <strong>²</strong> One of the three major electives must be designated as an{" "}
                <strong>advanced</strong> course in music (typically taken in fall of the
                senior year).
              </div>
            </div>

            <h2 id="plan">Sample Plan of Study</h2>
            <p className="nyu05-muted">
              Sample plans vary. Students should consult an adviser to confirm sequencing.
            </p>

            <table className="nyu05-plan" cellPadding="0" cellSpacing="0">
              <thead>
                <tr>
                  <th scope="col">Term</th>
                  <th scope="col">Suggested Courses</th>
                  <th scope="col">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="nyu05-term">1st</td>
                  <td>
                    MUSIC-UA 193 Seminar; Foreign Language; Texts &amp; Ideas; First-Year
                    Seminar
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">2nd</td>
                  <td>
                    MUSIC-UA 201 Music Theory I; EXPOS-UA 1 Writing as Inquiry; Foreign
                    Language; Cultures &amp; Contexts
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">3rd</td>
                  <td>
                    MUSIC-UA 202 Music Theory II; Music, History, and Cultures elective (1
                    of 2); Foreign Language; Quantitative Reasoning
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">4th</td>
                  <td>
                    Music, History, and Cultures elective (2 of 2); Sonic Art elective (1
                    of 2); Foreign Language; Societies &amp; the Social Sciences
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">5th</td>
                  <td>
                    Major elective (1 of 3); Sonic Art elective (2 of 2); Physical Science;
                    Elective
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">6th</td>
                  <td>Major elective (2 of 3); Life Science; Elective; Elective</td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">7th</td>
                  <td>
                    Major elective (3 of 3 — advanced); Elective; Elective; Elective
                  </td>
                  <td className="nyu05-num">16</td>
                </tr>
                <tr>
                  <td className="nyu05-term">8th</td>
                  <td>Elective; Elective; Elective; Elective</td>
                  <td className="nyu05-num">16</td>
                </tr>
              </tbody>
            </table>

            <h2 id="outcomes">Learning Outcomes</h2>
            <ol className="nyu05-ol">
              <li>
                Listen attentively to music and sound and describe aural experiences in
                precise terms.
              </li>
              <li>
                Interpret music and sound as historical and cultural artifacts (meanings,
                media, interactions, power).
              </li>
              <li>
                Work creatively in music and sound (performance, composition, or other sonic
                artifacts).
              </li>
              <li>
                Conduct research using ethnography, archives, library research, and relevant
                technologies.
              </li>
              <li>Present effectively in writing and orally.</li>
            </ol>

            <h2 id="policies">Program Policies</h2>

            <h3 className="nyu05-subhead">Grading Policy</h3>
            <p>
              A grade of <strong>C or higher</strong> is required for a course to count
              toward the Music major or minor. Pass/Fail courses do not count.
            </p>

            <h3 className="nyu05-subhead">Advanced Placement Policy</h3>
            <p>
              The College may award credit for AP Music Theory scores (elective credit toward
              the degree), but such credit does not count toward the Music major/minor.
            </p>

            <h3 className="nyu05-subhead">Internships and Independent Study</h3>
            <ul className="nyu05-bullets">
              <li>
                Internships are sponsored for Music majors only; proposals are coordinated
                through the Director of Undergraduate Studies.
              </li>
              <li>
                Up to <strong>4 credits</strong> of internship work may be applied toward
                the Music major (with approval).
              </li>
              <li>
                Independent Study may be available for research (and in some cases applied
                music instruction), generally for majors with departmental approval.
              </li>
            </ul>

            <h3 className="nyu05-subhead">Performance Credit</h3>
            <p>
              Students may count up to <strong>four credits</strong> of performance coursework
              (from this department or approved Steinhardt offerings) toward the Music major.
            </p>

            <div className="nyu05-footer">
              <div className="nyu05-footer-inner">
                <div>
                  &copy; 2005 New York University. All rights reserved. •{" "}
                  <a href="#">Privacy</a> • <a href="#">Accessibility</a>
                </div>
                <div className="nyu05-muted">
                  Page last updated: August 2005 • Maintained by: College of Arts &amp;
                  Science Web Services
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}