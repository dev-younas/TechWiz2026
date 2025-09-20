import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Registerevent from "./pages/Registerevent";
import EventCalendar from "./pages/EventCalendar.jsx";
import EventsCardsDet from "./pages/EventsCardsDet.jsx";
import RoleSelector from "./components/RoleSelector"; 

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
   
    const savedRole = localStorage.getItem("selectedRole");
    const savedTimestamp = localStorage.getItem("roleTimestamp");

    if (savedRole && savedTimestamp) {
      const now = Date.now();
      const diff = now - parseInt(savedTimestamp, 10);

      if (diff < 5 * 60 * 1000) {
       
        setRole(savedRole);
      } else {
       
        localStorage.removeItem("selectedRole");
        localStorage.removeItem("roleTimestamp");
      }
    }
  }, []);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem("selectedRole", selectedRole);
    localStorage.setItem("roleTimestamp", Date.now().toString());
  };

  if (!role) {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home selectedRole={role} />} />
        <Route path="/EventsCardsDet/:id" element={<EventsCardsDet />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/register" element={<Registerevent />} />
        <Route path="/calendar" element={<EventCalendar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
