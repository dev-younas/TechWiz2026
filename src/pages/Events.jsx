import React, { useEffect, useRef, useState } from "react";
import cards from "../Json/home.json";
import '../css/events.css';
import eventsData from "../Json/events.json";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const containerRef = useRef();
  const heroRef = useRef();
  const upcomingEventsRef = useRef();
  const previousEventsRef = useRef();

  useEffect(() => {
    // Filter functionality for previous events (scoped to previous section)
    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        document.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Show/hide events based on filter (scoped to previous-events)
        document.querySelectorAll(".previous-events .event-card").forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-category").toLowerCase() === filter
          ) {
            card.parentElement.classList.remove("d-none");
          } else {
            card.parentElement.classList.add("d-none");
          }
        });
      });
    });
  }, []);

  useGSAP(() => {
    // Hero section animation
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          heroRef.current.querySelector(".overlay"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      },
    });

    // Upcoming Events section animation
    ScrollTrigger.create({
      trigger: upcomingEventsRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          upcomingEventsRef.current.querySelector(".section-title"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          upcomingEventsRef.current.querySelectorAll(".filter-buttons div"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.2,
          }
        );
        gsap.fromTo(
          upcomingEventsRef.current.querySelectorAll(".event-card"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      },
    });

    // Previous Events section animation
    ScrollTrigger.create({
      trigger: previousEventsRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          previousEventsRef.current.querySelector(".section-title"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          previousEventsRef.current.querySelectorAll(".filter-btn"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.2,
          }
        );
        gsap.fromTo(
          previousEventsRef.current.querySelectorAll(".event-card"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      },
    });
  }, { scope: containerRef });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? cards.upEvents
      : cards.upEvents.filter((e) => e.category === selectedCategory);

  return (
    <div className="events-page" ref={containerRef}>
      {/* HERO BANNER */}
      <section className="events-hero" ref={heroRef}>
        <div className="overlay">
          <h1>Campus Events</h1>
          <p>
            Stay updated with all upcoming and past events – technical,
            cultural, sports & workshops.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <div className="container" ref={upcomingEventsRef}>
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="section-title">Upcoming Events</h3>

            {/* FILTER BUTTONS */}
            <div
              className="filter-buttons"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              {["All", "Technical", "Cultural", "Sports", "Workshops"].map(
                (category) => (
                  <div
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category === "All" ? "All" : category)
                    }
                    style={{
                      padding: "8px 18px",
                      borderRadius: "20px",
                      border:
                        selectedCategory === category
                          ? "2px solid #8B4513"
                          : "1px solid #ccc",
                      backgroundColor:
                        selectedCategory === category ? "#8B4513" : "#fff",
                      color: selectedCategory === category ? "#fff" : "#333",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedCategory === category ? "#5c3010" : "#f3f3f3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedCategory === category ? "#8B4513" : "#fff")
                    }
                  >
                    {category} Events
                  </div>
                )
              )}
            </div>

            {/* UPDATED CARDS */}
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {filteredData.map((upCard) => (
                <div
                  key={upCard.id}
                  style={{
                    flex: "0 1 280px",
                    minWidth: "250px",
                    maxWidth: "280px",
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    className="event-card"
                    data-category={upCard.category.toLowerCase()}
                  >
                    <Link to={`/EventsCardsDet/${upCard.id}`}>
                      <img
                        src={upCard.img}
                        alt={upCard.heading}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <div style={{ padding: "15px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#8B4513",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {upCard.date}
                      </div>
                      <h5 style={{ marginBottom: "8px", fontSize: "18px" }}>
                        {upCard.heading}
                      </h5>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          minHeight: "50px",
                        }}
                      >
                        {upCard.p}
                      </p>
                      <div
                        style={{
                          marginTop: "10px",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#333",
                        }}
                      >
                        {upCard.category}
                      </div>
                      <Link to={'/register'}>
                        <button
                          style={{
                            padding: "8px 20px",
                            borderRadius: "10px",
                            border: "2px solid #8B4513",
                            backgroundColor: "white",
                            color: "white",
                            fontSize: "12px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#8B4513";
                            e.target.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "white";
                          }}
                        >
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Previous Events - Updated Code */}
      <div className="container" ref={previousEventsRef}>
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="section-title">Previous Events</h3>

            {/* FILTER BUTTONS */}
            <div
              className="filter-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <div className="filter-btn active ab" data-filter="all">
                All Events
              </div>
              <div className="filter-btn ab" data-filter="technical">
                Technical
              </div>
              <div className="filter-btn ab" data-filter="cultural">
                Cultural
              </div>
              <div className="filter-btn ab" data-filter="sports">
                Sports
              </div>
              <div className="filter-btn ab" data-filter="workshop">
                Workshops
              </div>
            </div>

            {/* EVENTS LIST - Added wrapper class for scoping */}
            <div
              className="row previous-events"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  style={{
                    flex: "0 1 280px",
                    minWidth: "250px",
                    maxWidth: "280px",
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    className="event-card"
                    data-category={event.category.toLowerCase()}
                  >
                    <img
                      src={event.image}
                      alt={event.heading}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ padding: "15px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#8B4513",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {event.event_date}
                      </div>
                      <h5 style={{ marginBottom: "8px", fontSize: "18px" }}>
                        {event.heading}
                      </h5>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          minHeight: "50px",
                        }}
                      >
                        {event.description}
                      </p>
                      <div
                        style={{
                          marginTop: "10px",
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#333",
                        }}
                      >
                        {event.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;