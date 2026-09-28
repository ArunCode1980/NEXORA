import { Link } from "react-router";

function Coding() {
  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <div>
          <p className="small-text">DEVELOPMENT</p>
          <h1>Coding</h1>
          <p>
            Explain, debug and improve your code with AI.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="feature-empty-state">
        <div className="feature-empty-icon">⌘</div>

        <h2>Your coding workspace</h2>

        <p>
          AI code explanation, debugging and development
          tools will live here.
        </p>
      </div>
    </div>
  );
}

export default Coding;