import { Link } from "react-router";

function Study() {
  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <div>
          <p className="small-text">LEARNING</p>
          <h1>AI Study</h1>
          <p>
            Turn your study material into notes, quizzes
            and flashcards.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>
      </div>

      <div className="feature-empty-state">
        <div className="feature-empty-icon">✦</div>

        <h2>Your study workspace</h2>

        <p>
          PDF upload, AI notes, quizzes and flashcards
          will live here.
        </p>
      </div>
    </div>
  );
}

export default Study;