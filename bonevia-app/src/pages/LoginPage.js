import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // This state will track whether we show the 'email' or 'mobile' form
  const [loginMethod, setLoginMethod] = useState('email'); 

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Welcome back</h2>

        {/* --- TABS TO SWITCH BETWEEN LOGIN METHODS --- */}
        <div className="login-tabs">
          <button 
            className={`tab-btn ${loginMethod === 'email' ? 'active' : ''}`}
            onClick={() => setLoginMethod('email')}
          >
            Email
          </button>
          <button 
            className={`tab-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
            onClick={() => setLoginMethod('mobile')}
          >
            Mobile
          </button>
        </div>

        {/* --- CONDITIONAL FORM DISPLAY --- */}
        {loginMethod === 'email' ? (
          // If 'email' is selected, show this form
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-options">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        ) : (
          // If 'mobile' is selected, show this form
          <form>
            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" placeholder="Enter your 10-digit mobile number" />
            </div>
            {/* NOTE: Actually sending an OTP requires a backend server */}
            <button type="submit" className="btn btn-primary">Send OTP</button>
          </form>
        )}

        <p className="form-footer-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;