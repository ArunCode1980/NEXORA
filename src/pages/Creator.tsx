import { Link } from "react-router";

function Creator() {
  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <div>
          <p className="small-text">CREATION</p>
          <h1>Creator</h1>
          <p>
            Generate ideas, scripts and content for your
            creative workflow.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="feature-empty-state">
        <div className="feature-empty-icon">◇</div>

        <h2>Your creator workspace</h2>

        <p>
          AI-powered creative tools will be available
          here.
        </p>
      </div>
    </div>
  );
}

export default Creator;