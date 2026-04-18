import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || password.trim().length < 4) return;
    navigate('/welcome');
  }

  return (
    <div className="login-page">
      <div className="page">
        <img src="/assets/login-welcome/Images/nokia.svg" className="logo" alt="nokia" />
        <div className="login-card">
          <div className="tabs">
            <button className="tab active" type="button">Sign In</button>
            <button className="tab" type="button">Sign Up</button>
            <div className="indicator"></div>
          </div>

          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={4}
            />

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />{' '}
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="divider">OR</p>

          <button className="social apple" type="button"><img src="/assets/login-welcome/Images/apple.svg" alt="apple" /></button>
          <button className="social google" type="button"><img src="/assets/login-welcome/Images/search.png" alt="google" /></button>
        </div>
      </div>
    </div>
  );
}
