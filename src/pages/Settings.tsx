import { Link } from "react-router";

function Settings() {
  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <div>
          <p className="small-text">ACCOUNT</p>
          <h1>Settings</h1>
          <p>
            Manage your NEXORA workspace and preferences.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="feature-empty-state">
        <div className="feature-empty-icon">⚙</div>

        <h2>Settings</h2>

        <p>
          Account, preferences and other settings will
          be available here.
        </p>
      </div>
    </div>
  );
}

export default Settings;