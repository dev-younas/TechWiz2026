import React from "react";
import "../css/feedback.css";

const EventFeedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form. No data will be submitted.");
  };

  return (
    <div className="body">
    <div className="containerr">
      <header>
        <div className="logo">
          <i className="fas fa-calendar-alt"></i>
          <span>University Events</span>
        </div>
        <p className="tagline">Share your experience with us</p>
      </header>

      <div className="content">
        <h1>Event Feedback Form</h1>

        <div className="disclaimer">
          <i className="fas fa-info-circle"></i>
          <p>
            <strong>Note:</strong> Plzz share your experience.
          </p>
        </div>

        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
              Full Name
            </label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">
              <i className="fas fa-users"></i>
              User Type
            </label>
            <select id="userType">
              <option value="">Select your role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
              <option value="alumni">Alumni</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="event">
              <i className="fas fa-calendar-check"></i>
              Event Attended (Past Month)
            </label>
            <select id="event">
              <option value="">Select an event</option>
              <option value="tech-symposium">Tech Symposium 2023</option>
              <option value="career-fair">Annual Career Fair</option>
              <option value="cultural-fest">Cultural Festival</option>
              <option value="science-expo">Science Expo</option>
              <option value="leadership-workshop">Leadership Workshop</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <i className="fas fa-star"></i>
              Event Rating
            </label>
            <div className="rating-container">
              <div className="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label htmlFor="star5">★</label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label htmlFor="star4">★</label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label htmlFor="star3">★</label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label htmlFor="star2">★</label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label htmlFor="star1">★</label>
              </div>
              <div className="rating-labels">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Very Good</span>
                <span>Excellent</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comments">
              <i className="fas fa-comment"></i>
              Comments
            </label>
            <textarea
              id="comments"
              placeholder="Please share your thoughts about the event..."
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>

        <div className="thank-you">
          <i className="fas fa-check-circle"></i>
          <h2>Thank You For Your Feedback!</h2>
          <p>
            We appreciate you taking the time to share your experience with us.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventFeedback;
