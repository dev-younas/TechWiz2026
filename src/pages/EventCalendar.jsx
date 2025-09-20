import React, { useState } from "react";
import eventsData from "../Json/CalendarEvents.json";
import "../css/calendar.css";

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const EventCalender = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2025); // default year

  const getEventsForMonth = (year, month) => {
    return eventsData.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month
      );
    });
  };

  const getEventsForDate = (year, month, day) => {
    return eventsData.find(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day
      );
    });
  };

  const generateCalendar = (year, monthIndex) => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const weeks = [];
    let currentDay = 1 - firstDay;

    for (let row = 0; row < 6; row++) {
      const week = [];
      for (let col = 0; col < 7; col++) {
        if (currentDay > 0 && currentDay <= daysInMonth) {
          const event = getEventsForDate(year, monthIndex, currentDay);
          week.push(
            <td
              key={col}
              className={event ? "event-day" : ""}
              onClick={() => event && setSelectedEvent(event)}
            >
              {currentDay}
            </td>
          );
        } else {
          week.push(<td key={col}></td>);
        }
        currentDay++;
      }
      weeks.push(<tr key={row}>{week}</tr>);
    }
    return weeks;
  };

  return (
    <div className="calendar-container">
      <h1 className="mb-3"><strong>Event Calendar</strong></h1>
      
      {/* Year Filter Dropdown */}
      <div className="year-filter mb-3">
        <label htmlFor="year-select"><strong>Select Year: </strong></label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
        <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
          <option value={2027}>2027</option>
        </select>
      </div>

      <div className="calendar-grid">
        {months.map((month, index) => {
          const monthEvents = getEventsForMonth(selectedYear, index);
          return (
            <div className="month-card" key={index}>
              <h2 className="month-title">{month}</h2>
              <p className="year-label">{selectedYear}</p>
              <table>
                <thead>
                  <tr>
                    <th>Sun</th><th>Mon</th><th>Tue</th>
                    <th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                  </tr>
                </thead>
                <tbody>{generateCalendar(selectedYear, index)}</tbody>
              </table>
              {monthEvents.length > 0 && (
                <div className="event-list">
                  {monthEvents.map((event, idx) => (
                    <div key={idx} className="event-name">
                      {event.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modern styled popup */}
      {selectedEvent && (
        <div className="event-popup">
          <div className="event-card">
            <div className="event-header">
              <strong>Event Details</strong>
              <button className="close-button" onClick={() => setSelectedEvent(null)}>×</button>
            </div>
            <div className="event-body">
              <h2 className="event-title">{selectedEvent.title}</h2>
              <p className="event-date">
                📅 {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="event-description">
                <strong>Description:</strong>
                <p>{selectedEvent.description}</p>
              </div>
              <div className="event-id-box">
                <div className="event-id-content">
                  <span>Event ID</span>
                  <strong>#{selectedEvent.id}</strong>
                </div>
                <div className="event-id-icon">📅</div>
              </div>
              <button className="event-close-button" onClick={() => setSelectedEvent(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalender;