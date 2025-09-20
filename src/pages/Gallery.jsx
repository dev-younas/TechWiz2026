import React, { useState, useEffect, useRef } from "react";
import "../css/gallery.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  { id: 1, imageThumbnail: "/18.png", date: "February 28, 2024", category: ["sports", "2024"] },
  { id: 2, imageThumbnail: "/17.png", date: "November 22, 2023", category: ["sports", "2023"] },
  { id: 3, imageThumbnail: "/3.png", date: "March 8, 2024", category: ["technical", "2024"] },
  { id: 4, imageThumbnail: "/20.png", date: "April 5, 2024", category: ["cultural", "2024"] },
  { id: 5, imageThumbnail: "/14.png", date: "March 18, 2024", category: ["sports", "2024"] },
  { id: 6, imageThumbnail: "/19.png", date: "November 22, 2023", category: ["sports", "2023"] },
  { id: 7, imageThumbnail: "/3.png", date: "March 8, 2024", category: ["technical", "2024"] },
  { id: 8, imageThumbnail: "/12.png", date: "April 5, 2024", category: ["cultural", "2024"] },
  { id: 9, imageThumbnail: "/5.png", date: "March 18, 2024", category: ["sports", "2024"] },
  { id: 10, imageThumbnail: "/5.png", date: "March 18, 2022", category: ["sports", "2022"] },
  { id: 11, imageThumbnail: "/5.png", date: "March 18, 2021", category: ["sports", "2021"] },
];

function Gallery() {
  const containerRef = useRef();
  const titleRef = useRef();
  const filterButtonsRef = useRef();
  const galleryGridRef = useRef();
  const [filter, setFilter] = useState("All");
  const [bookmarked, setBookmarked] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  // Load bookmarks on first render
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
    setBookmarked(savedBookmarks);
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const toggleBookmark = (eventId) => {
    setBookmarked((prev) => {
      let updated;
      if (prev.includes(eventId)) {
        updated = prev.filter((id) => id !== eventId);
      } else {
        updated = [...prev, eventId];
      }

      // Immediately update localStorage
      localStorage.setItem("bookmarkedEvents", JSON.stringify(updated));
      return updated;
    });
  };

  const categories = [
    "All",
    ...Array.from(new Set(eventsData.flatMap((event) => event.category.map((c) => c.toLowerCase())))),
  ];

  // Filtering Logic
  let filteredEvents = eventsData;

  if (filter !== "All") {
    filteredEvents = filteredEvents.filter((event) =>
      event.category.some((c) => c.toLowerCase() === filter.toLowerCase())
    );
  }

  if (showBookmarks) {
    filteredEvents = filteredEvents.filter((event) => bookmarked.includes(event.id));
  }

  useGSAP(() => {
    // Title animation
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      },
    });

    // Filter buttons animation
    ScrollTrigger.create({
      trigger: filterButtonsRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          filterButtonsRef.current.querySelectorAll(".filter-btn"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          }
        );
      },
    });

    // Gallery grid animation
    ScrollTrigger.create({
      trigger: galleryGridRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          galleryGridRef.current.querySelectorAll(".gallery-card"),
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
          }
        );
        gsap.fromTo(
          galleryGridRef.current.querySelector("p"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      },
    });
  }, { scope: containerRef });

  return (
    <div className="gallery-page" ref={containerRef}>
      <h2 className="gallery-title" ref={titleRef}>Campus Events Gallery</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons" ref={filterButtonsRef}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}

        {/* Bookmark Toggle Button */}
        <button
          className={`filter-btn bookmark-btn ${showBookmarks ? "active" : ""}`}
          onClick={() => setShowBookmarks((prev) => !prev)}
        >
          🔖 Bookmarks ({bookmarked.length})
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid" ref={galleryGridRef}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="gallery-card">
              <img src={event.imageThumbnail} alt={`Event ${event.id}`} />
              <div className="card-info">
                <div className="card-info-top">
                  <span className="category-tag">{event.category.join(", ")}</span>
                  <span className="date-tag">{event.date}</span>
                </div>

                {/* Bookmark Icon */}
                <button
                  className={`bookmark-icon-bottom ${bookmarked.includes(event.id) ? "active" : ""}`}
                  onClick={() => toggleBookmark(event.id)}
                >
                  {bookmarked.includes(event.id) ? "🔖" : "📑"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            {showBookmarks ? "No bookmarked events yet." : "No events found."}
          </p>
        )}
      </div>
    </div>
  );
}

export default Gallery;