import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

    // Show alert with user data
    alert(
      `✅ Message Sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Please fill out the form below or use
            our contact information to reach us.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            {/* ... info items same as before ... */}
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Section (empty for now) */}
        <div className="social-section"></div>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.621581489075!2d-74.00594238459418!3d40.71288427932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23c7ad6e0f%3A0x87d658c2d56e41a7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623456789012!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        />
      </div>
    </div>
  );
};

export default Contact;
