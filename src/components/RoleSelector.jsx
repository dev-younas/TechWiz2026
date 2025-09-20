// src/components/RoleSelector.jsx
import React, { useState } from "react";
import "../css/roleSelector.css";

function RoleSelector({ onRoleSelect }) {
  const [role, setRole] = useState(null);

  return (
    <div className="rolemain">
    <div className="role-overlay">
      <div className="role-box">
        {!role ? (
          <>
            <h2 className="role-title">Select Your Role</h2>
            <div className="role-buttons">
              <button onClick={() => setRole("student")} className="role-btn">
                🎓 Student
              </button>
              <button onClick={() => setRole("visitor")} className="role-btn">
                👋 Visitor
              </button>
              <button onClick={() => setRole("staff")} className="role-btn">
                👨‍🏫 Staff
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="role-welcome">
              {role === "student" && "🎓 Welcome Student!"}
              {role === "visitor" && "👋 Welcome Visitor!"}
              {role === "staff" && "👨‍🏫 Welcome Staff!"}
            </h2>
            <button className="continue-btn" onClick={() => onRoleSelect(role)}>
              Continue →
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default RoleSelector;
