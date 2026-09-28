function Dashboard() {
  return (
    <>
      <section className="dashboard-welcome">
        <div>
          <p className="small-text">Good afternoon</p>

          <h1>Welcome back, Arun 👋</h1>

          <p className="welcome-description">
            Everything you need to learn, create and get things done.
          </p>
        </div>

        <button className="new-workspace-button">
          + New workspace
        </button>
      </section>

      <section className="dashboard-stats">
        <div className="stat-card">
          <span>STUDY</span>
          <strong>0</strong>
          <p>Sessions completed</p>
        </div>

        <div className="stat-card">
          <span>NOTES</span>
          <strong>0</strong>
          <p>AI notes created</p>
        </div>

        <div className="stat-card">
          <span>QUIZ</span>
          <strong>0</strong>
          <p>Quizzes completed</p>
        </div>

        <div className="stat-card">
          <span>ACTIVITY</span>
          <strong>0</strong>
          <p>Day streak</p>
        </div>
      </section>

      <section className="workspace-section">
        <div className="section-heading">
          <div>
            <p className="small-text">Your workspace</p>
            <h2>What do you want to do?</h2>
          </div>
        </div>

        <div className="workspace-grid">
          <div className="workspace-card workspace-card-large">
            <div className="workspace-icon">✦</div>

            <div className="workspace-card-content">
              <span className="card-label">LEARNING</span>

              <h3>AI Study</h3>

              <p>
                Turn PDFs and study material into notes,
                quizzes and flashcards with AI.
              </p>

              <button>
                Open Study →
              </button>
            </div>
          </div>

          <div className="workspace-card">
            <div className="workspace-icon">✧</div>

            <div className="workspace-card-content">
              <span className="card-label">PRODUCTIVITY</span>

              <h3>AI Tools</h3>

              <p>
                Useful AI tools designed to help you
                work faster.
              </p>

              <button>
                Explore →
              </button>
            </div>
          </div>

          <div className="workspace-card">
            <div className="workspace-icon">⌘</div>

            <div className="workspace-card-content">
              <span className="card-label">DEVELOPMENT</span>

              <h3>Coding</h3>

              <p>
                Explain, debug and improve your code
                with AI assistance.
              </p>

              <button>
                Open Coding →
              </button>
            </div>
          </div>

          <div className="workspace-card">
            <div className="workspace-icon">◇</div>

            <div className="workspace-card-content">
              <span className="card-label">CREATION</span>

              <h3>Creator</h3>

              <p>
                Generate ideas, scripts and content
                for your creative workflow.
              </p>

              <button>
                Open Creator →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;