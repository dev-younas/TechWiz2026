import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // <-- navigate hook
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // LocalStorage se user data nikalna
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found! Please sign up first.");
      return;
    }

    if (
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      alert("✅ Login successful!");
      navigate("/"); // <-- home page pe redirect
    } else {
      alert("❌ Invalid email or password!");
    }
  };

  return (
    <div className="body">
      <div className="containerr">
        {/* Left Panel */}
        <div className="left-panel">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your journey with our community.</p>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="form-header">
            <h1>Login</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="remember-forgot">
              <div className="remember">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
               
            </div>

            <button type="submit" className="btn">
              Sign In
            </button>

            <div className="signup-link">
              Don&apos;t have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
