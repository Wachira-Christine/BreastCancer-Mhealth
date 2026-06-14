/*Simport { Link } from "react-router-dom";
import "./Dashboard.css";

/*export default function Dashboard() {
  return (
    <div className="dash-root">
      <div className="top-bar">
        <div className="logo-type">
          Empower<span>Her</span>
        </div>

        <div className="top-nav">
          <Link className="tn-pill active" to="/dashboard">Overview</Link>
          <Link className="tn-pill" to="/education">Learn</Link>
          <Link className="tn-pill" to="/self-exam">Self-exam</Link>
          <Link className="tn-pill" to="/facilities">Facilities</Link>
        </div>

        <div className="top-right">
          <span className="bell">🔔</span>
          <div className="av">CW</div>
        </div>
      </div>

      <div className="dash-body">
        <main className="dash-main">
          <p className="dateline">Sunday, 14 June 2026</p>

          <h1 className="headline">
  Welcome Back,
  <br />
  <em>Christine.</em>
</h1>

          <p className="subline">
            Track your awareness journey, follow guided self-examination steps,
            and stay consistent with monthly reminders.
          </p>

          <div className="exam-strip">
            <div>
              <p className="es-label">Monthly self-exam</p>
              <p className="es-title">Ready for your June check?</p>

              <div className="es-track">
                <div className="es-fill"></div>
              </div>

              <p className="es-meta">65% through your cycle · ~5 minutes</p>
            </div>

            <Link to="/self-exam" className="es-btn">
              Begin now
            </Link>
          </div>

          <p className="section-label">Your toolkit</p>

          <div className="bento">
            <div className="b-card">
              <div className="bc-num">6</div>
              <p className="bc-label">Checks this year</p>
              <p className="bc-sub">Last completed 14 days ago</p>
            </div>

            <Link to="/education" className="b-card">
              <div className="bc-icon">📖</div>
              <p className="bc-label">Breast cancer education</p>
              <p className="bc-sub">Symptoms, myths and risks explained clearly</p>
              <span className="bc-arrow">→</span>
            </Link>

            <Link to="/symptoms" className="b-card dark">
              <div className="bc-icon light-icon">👁</div>
              <p className="bc-label light">Symptom awareness</p>
              <p className="bc-sub light">Know what to look for and when to act</p>
              <span className="bc-arrow light">→</span>
            </Link>

            <Link to="/facilities" className="b-card">
              <div className="bc-icon">🏥</div>
              <p className="bc-label">Healthcare facilities</p>
              <p className="bc-sub">Clinics and screening centres near you</p>
              <span className="bc-arrow">→</span>
            </Link>

            <Link to="/reminders" className="b-card wide">
              <div className="wide-content">
                <div>
                  <div className="bc-icon">🔔</div>
                  <p className="bc-label">Reminders</p>
                  <p className="bc-sub">
                    Next reminder in 16 days — customise your reminder schedule
                  </p>
                </div>
                <span className="bc-arrow big">→</span>
              </div>
            </Link>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sb-section">
            <p className="sb-section-label">Your stats</p>

            <div className="sb-stat">
              <div className="sb-stat-val">6</div>
              <div className="sb-stat-label">Checks completed in 2026</div>
            </div>

            <hr className="sb-divider" />

            <div className="sb-stat">
              <div className="sb-stat-val">14</div>
              <div className="sb-stat-label">Days since last exam</div>
            </div>

            <hr className="sb-divider" />

            <div className="sb-stat">
              <div className="sb-stat-val">16</div>
              <div className="sb-stat-label">Days until next reminder</div>
            </div>
          </div>

          <div className="sb-section">
            <p className="sb-section-label">Recent activity</p>

            <div className="activity-row">
              <div className="ar-dot done"></div>
              <div>
                <p className="ar-text">Self-exam completed</p>
                <p className="ar-sub">31 May 2026</p>
              </div>
            </div>

            <div className="activity-row">
              <div className="ar-dot done"></div>
              <div>
                <p className="ar-text">Education module read</p>
                <p className="ar-sub">Myths and facts · 28 May</p>
              </div>
            </div>

            <div className="activity-row">
              <div className="ar-dot next"></div>
              <div>
                <p className="ar-text">June exam due</p>
                <p className="ar-sub">Reminder set for 30 Jun</p>
              </div>
            </div>
          </div>

          <div className="sb-section">
            <p className="sb-section-label">Did you know</p>

            <div className="tip-card">
              <p className="tip-tag">Monthly tip</p>
              <p className="tip-text">
                Regular self-awareness can help you notice unusual breast changes
                early. Always seek professional care if you notice concerning signs.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}