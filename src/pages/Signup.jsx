import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save data to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account created successfully! Redirecting to login page...");

    // Redirect to login page
    navigate("/login");

    // Reset form (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      terms: false,
    });
  };

  return (
    <div className="body">
      <div className="containerr">
        {/* Left Panel */}
        <div className="left-panel">
          <h2>Join Our Community</h2>
          <p>
            Create an account to access exclusive features, personalized
            content, and connect with like-minded individuals.
          </p>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="form-header">
            <h1>Create Account</h1>
            <p>Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  pattern="[A-Za-z\s]{2,}"
                  title="Please enter at least 2 letters (numbers not allowed)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  pattern="[A-Za-z\s]{2,}"
                  title="Please enter at least 2 letters (numbers not allowed)"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                pattern=".{8,}"
                title="Password must be at least 8 characters"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                pattern=".{8,}"
                title="Please confirm your password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select your country</option>
                <option value="pakistan">Pakistan</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
              </select>
            </div>

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button type="submit" className="btn">
              Create Account
            </button>

            <div className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
