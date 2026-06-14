import { Link } from "react-router-dom";
import authImage from "../assets/auth-image.jpg";
import "./Landing.css";
import logo from "../assets/logo.png";

export default function Landing() {
  return (
    <div className="eh-wrap">
      <nav className="eh-nav">
        <div className="eh-logo">
  <img src={logo} alt="EmpowerHer" className="eh-logo-img" />
</div>


        <Link to="/register" className="eh-btn-primary small-btn">
          Get Started
        </Link>
      </nav>

      <section className="eh-hero">
        <div className="eh-left">
          <p className="eh-eyebrow">Breast Health Awareness</p>

          <h1 className="eh-headline">
            Empowering Women
            <br />
            Through <em>Knowledge</em>
            <br />
            & Early Action
          </h1>

          <p className="eh-sub">
            Learn about breast cancer, follow guided self-examination steps,
            receive reminders, and know when to seek professional care.
          </p>

          <div className="eh-ctas">
            <Link to="/register" className="eh-btn-primary">
              Get Started
            </Link>

            <Link to="/login" className="eh-btn-secondary">
              Log In
            </Link>
          </div>
        </div>

        <div className="eh-right">
          <div className="eh-blob1"></div>
          <div className="eh-blob2"></div>

          <div className="eh-image-card">
            <img src={authImage} alt="Women empowerment" />
          </div>
        </div>
      </section>

      <section className="eh-stats">
        <div className="eh-stat">
          <div className="eh-stat-num">Awareness</div>
          <div className="eh-stat-label">
            Learn breast cancer signs, symptoms, myths, and prevention practices.
          </div>
        </div>

        <div className="eh-stat">
          <div className="eh-stat-num">Self-Check</div>
          <div className="eh-stat-label">
            Follow guided self-examination steps using simple instructions.
          </div>
        </div>

        <div className="eh-stat">
          <div className="eh-stat-num">Support</div>
          <div className="eh-stat-label">
            Receive reminders and know when to seek professional medical care.
          </div>
        </div>
      </section>

      <section className="eh-features">
        <p className="eh-features-title">What you'll find here</p>

        <div className="eh-feature-cards">
          <div className="eh-feature-card">
            <div className="eh-fc-icon">🔍</div>
            <p className="eh-fc-title">Guided self-exam</p>
            <p className="eh-fc-desc">
              Step-by-step instructions to support breast self-awareness.
            </p>
          </div>

          <div className="eh-feature-card">
            <div className="eh-fc-icon">🔔</div>
            <p className="eh-fc-title">Monthly reminders</p>
            <p className="eh-fc-desc">
              Set reminders for regular breast self-checks and screening.
            </p>
          </div>

          <div className="eh-feature-card">
            <div className="eh-fc-icon">♡</div>
            <p className="eh-fc-title">When to seek care</p>
            <p className="eh-fc-desc">
              Clear guidance on warning signs and when to visit a health facility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}