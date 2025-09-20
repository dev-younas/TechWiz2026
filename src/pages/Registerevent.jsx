import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

export default function EventRegistration() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    phone: "",
    affiliation: "",
    questions: "",
  });

  useEffect(() => {
    if (!user) {
      alert("Please login to register for events");
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: formData.phone,
      affiliation: formData.affiliation,
      questions: formData.questions,
      registeredAt: new Date().toLocaleString(),
    };

    // Save to localStorage
    let allRegistrations =
      JSON.parse(localStorage.getItem("eventRegistrations")) || [];
    allRegistrations.push(registrationData);
    localStorage.setItem("eventRegistrations", JSON.stringify(allRegistrations));

    alert("✅ Event Registered Successfully!");

    // Reset form
    setFormData({
      phone: "",
      affiliation: "",
      questions: "",
    });
  };

  return (
    <div className="body">
      <div className="container">
        <header>
          <h1>University Event Registration</h1>
          <p className="subtitle">Welcome, {user.firstName}!</p>
        </header>

        <div className="registration-form">
          <h2 className="form-title">Register for Event</h2>

          <p>Hello {user.firstName}, please fill in your details below:</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="required">
                  First Name
                </label>
                <input type="text" id="firstName" value={user.firstName} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="required">
                  Last Name
                </label>
                <input type="text" id="lastName" value={user.lastName} readOnly />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="required">
                Email Address
              </label>
              <input type="email" id="email" value={user.email} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="affiliation" className="required">
                University/Organization
              </label>
              <select
                id="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Organization --</option>
                <option value="Fast NUCES">Fast NUCES</option>
                <option value="LUMS">LUMS</option>
                <option value="UET Lahore">UET Lahore</option>
                <option value="IBA Karachi">IBA Karachi</option>
                <option value="GIKI">GIKI</option>
                <option value="Comsats">Comsats</option>
                <option value="NUST">NUST</option>
                <option value="Punjab University">Punjab University</option>
                <option value="Air University">Air University</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="questions">Questions or Comments</label>
              <textarea
                id="questions"
                rows="3"
                value={formData.questions}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Register Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
