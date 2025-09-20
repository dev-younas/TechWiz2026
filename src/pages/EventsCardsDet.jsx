import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import "../css/eventsCarddet.css";
import eventCardDet from "../Json/EventsCards.json";

function EventsCardsDet() {
  const { id } = useParams();
  
  // Correct way to find the event by id
  const eventcardsdet = eventCardDet.find((e) => e.id === parseInt(id));

  // If event not found, show error message
  if (!eventcardsdet) {
    return (
      <div className="container text-center mt-5">
        <h2>Event not found!</h2>
        <p>The requested event could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="football-icon">
          <i className="fas fa-futbol" />
        </div>
        <div className="container">
          <h1 className="display-3 fw-bold text-light">{eventcardsdet.heading}</h1>
          <p className="lead">{eventcardsdet.subtitle}</p>
          <p>{eventcardsdet.desc}</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="container mb-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">{eventcardsdet.heading2}</h2>
            <p>{eventcardsdet.p1}</p>
            <p>{eventcardsdet.p2}</p>
          </div>
        </div>
      </section>

      {/* Stats Section - Dynamic */}
      <section className="container mb-5">
        <h2 className="section-title text-center">{eventcardsdet.heading3}</h2>
        <div className="stats-container">
          {eventcardsdet.stats && eventcardsdet.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                <i className={stat.icon} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cards Data Section */}
      <section className="container mb-5">
        <h2 className="section-title text-center">The Essence of {eventcardsdet.heading}</h2>
        <div className="row g-4">
          {eventcardsdet.cardsData && eventcardsdet.cardsData.map((cardsData, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="football-card">
                <img
                  src={cardsData.image || "https://images.unsplash.com/photo-1596510913920-85d87a1800d2?ixlib=rb-4.0.3"}
                  className="football-img"
                  alt={cardsData.title}
                />
                <div className="card-content">
                  <h3 className="rules-color">
                    <i className="fas fa-book me-2" /> {cardsData.title}
                  </h3>
                  <p>{cardsData.description}</p>
                  <ul>
                    <li>{cardsData.p1}</li>
                    <li>{cardsData.p2}</li>
                    <li>{cardsData.p3}</li>
                    <li>{cardsData.p4}</li>
                    <li>{cardsData.p5}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Participant Roles Section */}
      {eventcardsdet.participant_roles && (
        <section className="container mb-5">
          <h2 className="section-title text-center">
            {eventcardsdet.participant_roles.heading}
          </h2>
          <div className="row">
            {eventcardsdet.participant_roles.roles.map((role, index) => (
              <div key={index} className="col-md-6">
                <div className="skills-fact">
                  <h3>
                    <span className="position-badge">{role.role}</span>
                  </h3>
                  <p>{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Essential Skills Section */}
      {eventcardsdet.essential_skills && (
        <section className="skills-showcase">
          <div className="container">
            <h2 className="section-title text-center">
              {eventcardsdet.essential_skills.heading}
            </h2>
            <div className="row">
              {eventcardsdet.essential_skills.skills.map((skill, index) => (
                <div key={index} className="col-md-6">
                  <div className="skills-fact">
                    <div className="icon-container">
                      <i className={skill.icon || "fas fa-futbol"} />
                    </div>
                    <h3>{skill.skill}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.progress || "95%" }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section */}
      {eventcardsdet.timeline && (
        <section className="container my-5">
          <h2 className="section-title text-center">{eventcardsdet.timeline.heading}</h2>
          <div className="timeline">
            {eventcardsdet.timeline.events.map((timelineEvent, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <h3>{timelineEvent.year}</h3>
                  <p><strong>{timelineEvent.title}</strong></p>
                  <p>{timelineEvent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {eventcardsdet.gallery && (
        <section className="container my-5">
          <h2 className="section-title text-center">
            {eventcardsdet.gallery.heading || "Gallery"}
          </h2>
          <div className="image-gallery">
            {eventcardsdet.gallery.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className="gallery-img"
                alt={image.alt}
              />
            ))}
          </div>
        </section>
      )}

      {/* Quote Section */}
      {eventcardsdet.quote && (
        <section className="quote-section">
          <div className="container">
            <blockquote className="blockquote">
              <p>"{eventcardsdet.quote.text}"</p>
              {eventcardsdet.quote.author && (
                <footer className="blockquote-footer">
                  {eventcardsdet.quote.author}
                </footer>
              )}
            </blockquote>
          </div>
        </section>
      )}
    </div>
  );
}

export default EventsCardsDet;