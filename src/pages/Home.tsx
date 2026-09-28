import { Link } from "react-router";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">NEXORA</div>

        <div className="nav-links">
          <Link to="/login">Log in</Link>
          <Link to="/signup" className="nav-button">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-badge">
          ✦ Your intelligent workspace
        </div>

        <h1>
          Learn smarter.
          <br />
          <span>Create better.</span>
        </h1>

        <p>
          NEXORA brings AI-powered tools for learning,
          creating, coding and getting things done.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="primary-button">
            Get Started
          </Link>

          <Link to="/explore" className="secondary-button">
            Explore NEXORA
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;