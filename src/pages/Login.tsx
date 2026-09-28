import { Link } from "react-router";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-home-link">
          ← Back to Home
        </Link>

        <div className="logo">NEXORA</div>

        <h1>Welcome back</h1>

        <p>Log in to continue to NEXORA.</p>

        <form>
          <input
            type="email"
            placeholder="Email address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Log in
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </div>

        <Link to="/" className="auth-home-bottom">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;