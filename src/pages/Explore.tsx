import { Link } from "react-router";

function Explore() {
  return (
    <div className="explore-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          NEXORA
        </Link>

        <div className="nav-links">
          <Link to="/login">Log in</Link>

          <Link to="/signup" className="nav-button">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="explore-content">
        <div className="hero-badge">
          ✦ Explore NEXORA
        </div>

        <h1>
          One workspace.
          <br />
          <span>Infinite possibilities.</span>
        </h1>

        <p>
          NEXORA brings intelligent tools for learning,
          creating, coding and productivity into one
          modern workspace.
        </p>

        <section className="explore-grid">
          <div className="explore-card">
            <div className="explore-icon">✦</div>

            <span>LEARNING</span>

            <h2>AI Study</h2>

            <p>
              Turn PDFs and study material into notes,
              quizzes and flashcards.
            </p>
          </div>

          <div className="explore-card">
            <div className="explore-icon">◇</div>

            <span>PRODUCTIVITY</span>

            <h2>AI Tools</h2>

            <p>
              A collection of intelligent tools designed
              to help you get things done faster.
            </p>
          </div>

          <div className="explore-card">
            <div className="explore-icon">⌘</div>

            <span>DEVELOPMENT</span>

            <h2>Coding</h2>

            <p>
              Explain, debug and improve your code with
              AI-powered assistance.
            </p>
          </div>

          <div className="explore-card">
            <div className="explore-icon">✧</div>

            <span>CREATION</span>

            <h2>Creator</h2>

            <p>
              Generate ideas, scripts and content for
              your creative workflow.
            </p>
          </div>
        </section>

        <div className="explore-actions">
          <Link to="/signup" className="primary-button">
            Get Started
          </Link>

          <Link to="/" className="secondary-button">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;