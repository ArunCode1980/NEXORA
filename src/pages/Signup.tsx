import { Link } from "react-router";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-home-link">
          ← Back to Home
        </Link>

        <div className="logo">NEXORA</div>

        <h1>Create your account</h1>

        <p>Start building your personal AI workspace.</p>

        <form>
          <input
            type="text"
            placeholder="Your name"
          />

          <input
            type="email"
            placeholder="Email address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Create account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </div>

        <Link to="/" className="auth-home-bottom">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Signup;