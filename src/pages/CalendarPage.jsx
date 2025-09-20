import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import './../css/calendar.css';

// JSON data
const eventData = [
  {
    id: 1,
    title: "Annual Hackathon",
    start: "2025-07-20",
    description: "24-hour coding competition open to all students."
  },
  {
    id: 2,
    title: "Cultural Festival",
    start: "2025-07-25",
    description: "Music, dance, and art performances by students."
  },
  {
    id: 3,
    title: "Sports Meet",
    start: "2025-08-28",
    description: "Inter-university sports competitions."
  },
  {
    id: 4,
    title: "Football Final",
    start: "2025-09-01",
    description: "Inter-university sports competitions."
  }
  ,
  {
    id: 4,
    title: "Kashmir Day",
    start: "2025-09-25",
    description: "Inter-university sports competitions."
  }
];

export default function MyCalendar() {
  const [events] = useState(eventData); 

  const handleEventClick = (info) => {
    alert(info.event.title + "\n" + info.event.extendedProps.description);
  };

  return (
    <div>
      <h2> Events Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        events={events}
        eventClick={handleEventClick}
        height="auto"
      />
    </div>
  );
}
