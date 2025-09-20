import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.firstName) {
      setUserName(storedUser.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserName("");
    navigate("/login"); // logout ke baad login page pe redirect
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-xl">
        <a className="navbar-brand brand" style={{ color:" #8b4513 !important" }}>
          CampusConnect
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right side buttons */}
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {userName ? (
              <>
                <li className="nav-item ms-3">
                  <span className="text-dark btn-sm btnNav">
                    <i className="bi bi-person me-1" /> {userName}
                  </span>
                </li>
                <li className="nav-item ms-2">
                  <button
                    className="btn btn-outline-danger  text-light btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-3">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    "btn btn-outline-accent btnNav text-light" +
                    (isActive ? " active" : "")
                  }
                >
                  <i className="bi bi-person me-1" /> Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
