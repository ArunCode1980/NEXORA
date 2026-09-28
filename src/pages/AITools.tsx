import { Link } from "react-router";

function AITools() {
  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <div>
          <p className="small-text">PRODUCTIVITY</p>
          <h1>AI Tools</h1>
          <p>
            Intelligent tools designed to help you work
            faster.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="feature-empty-state">
        <div className="feature-empty-icon">✧</div>

        <h2>Your AI toolkit</h2>

        <p>
          Useful AI-powered tools will be available here.
        </p>
      </div>
    </div>
  );
}

export default AITools;