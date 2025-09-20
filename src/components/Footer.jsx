import React from "react";
import { Link } from "react-router-dom";
import '../css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-title">CampusConnect</h5>
            <p className="small">
              Your central hub for all college events, activities, and
              announcements. Stay informed and engaged with campus life.
            </p>
            <div className="social-links">
              <Link>
             <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to='/events'>Upcoming Events</Link>
              </li>
              <li>
                <Link to='/calendar'>Event Calendar</Link>
              </li>
              <li>
                <Link to='/gallery'>Photo Gallery</Link>
              </li>
              <li>
                <Link to='/register'>Register Event</Link>
              </li>
              <li>
                <Link to='/login'>Student Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-title">Resources</h5>
            <ul className="footer-links">
              <li>
              <Link to="/about">About Us</Link>
              </li>
              <li>
                 <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/events">Event Policies</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="footer-title">Stay Updated</h5>
            <p className="small">
              Subscribe to get notifications about upcoming events and important
              announcements.
            </p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Your email address" />
              <button className="btn  w-100">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 small">
                © 2025 CampusConnect - College Event Management System. All
                rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 small">
                Designed with for better campus engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
