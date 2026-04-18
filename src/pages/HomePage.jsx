import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-card">
        <p className="home-kicker">Operation Tracking Dashboard</p>
        <h1>React version of your group project</h1>
        <p>
          This app combines the login, welcome, dashboard, and ticket management pages into one shared React project.
        </p>
        <div className="home-links">
          <Link to="/login" className="home-link">Login</Link>
          <Link to="/welcome" className="home-link">Welcome</Link>
          <Link to="/dashboard" className="home-link">Dashboard</Link>
          <Link to="/tickets" className="home-link">Ticket Management</Link>
        </div>
      </div>
    </div>
  );
}
