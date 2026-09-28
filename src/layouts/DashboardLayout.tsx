import { Link, Outlet, useLocation } from "react-router";

function DashboardLayout() {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isStudy = location.pathname === "/study";
  const isAITools = location.pathname === "/ai-tools";
  const isCoding = location.pathname === "/coding";
  const isCreator = location.pathname === "/creator";
  const isSettings = location.pathname === "/settings";

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Link to="/" className="logo">
          NEXORA
        </Link>

        <nav className="sidebar-nav">
          <Link
            to="/dashboard"
            className={isDashboard ? "active" : ""}
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <div className="sidebar-section-title">
            WORKSPACE
          </div>

          <Link
            to="/study"
            className={`sidebar-item ${isStudy ? "active" : ""}`}
           >
             <span>▣</span>
             AI Study
            </Link>

          <Link
            to="/ai-tools"
            className={`sidebar-item ${isAITools ? "active" : ""}`}
          >
            <span>✦</span>
            AI Tools
          </Link>

          <Link
            to="/coding"
            className={`sidebar-item ${isCoding ? "active" : ""}`}
          >
            <span>⌘</span>
            Coding
          </Link>

          <Link
            to="/creator"
            className={`sidebar-item ${isCreator ? "active" : ""}`}
          >
            <span>◇</span>
            Creator
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <Link to="/settings"
           className={`sidebar-item ${isSettings ? "active" : ""}`}
          >
            <span>⚙</span>
            Settings
          </Link>

          <Link to="/" className="sidebar-item">
            <span>←</span>
            Back to Home
          </Link>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="mobile-logo">
            NEXORA
          </div>

          <div className="dashboard-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search NEXORA..."
            />
            <kbd>⌘ K</kbd>
          </div>

          <div className="dashboard-profile">
            <div className="profile">
              A
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;