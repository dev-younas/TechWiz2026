import React from "react";
import { useParams, Link } from "react-router-dom";
import eventData from "../Json/details.json";
import "../css/tech.css";

const EventDetails = () => {
  const { id } = useParams('All');
  const event = eventData.find((e) => String(e.id) === String(id));

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h2>❌ Event Not Found</h2>
        <p>No data found for the requested event (id: {id})</p>
        <Link to="/" className="btn btn-secondary mt-3">
          ⬅ Back to Home
        </Link>
      </div>
    );
  }
  const { cardsData } = event
  console.log(cardsData);


  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <div className="container cat" style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} >
          <h1 className="display-3 fw-bold" style={{ color: "white" }}>{event.heading}</h1>
          <p className="lead text-light">{event.p}</p>
          <a href="#cards-section" className="btn btnBanner btn-custom  mt-3" style={{ height: '60px', width: '250px', color: 'balck' }} >
            Explore More
          </a>
        </div>
      </div>

      {/* Stats Section (fixed, optional numbers) */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">12+</div>
              <div className="stats-label">Projects/Events</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">25+</div>
              <div className="stats-label">Teams Joined</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">15+</div>
              <div className="stats-label">Achievements</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">8+</div>
              <div className="stats-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards-section" className="py-5">
        <div className="container">
          <h2 className="section-title">{event.heading2}</h2>
          <div className="row g-4">
            {cardsData.map((card, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card h-100">
                  <div
                    className="card-img-top"
                    style={{
                      backgroundSize: "cover",
                      // minHeight: "150px",
                    }}
                  >
                    <img src={card.img} alt="" style={{ height: '200px', width: '100%' }} />

                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>

                    <div className="skill-item">
                      <div className="d-flex justify-content-between">
                        <span>{card.title}</span>
                        <span className="skill-level">{card.levelText}</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${card.levelPercent}%` }}
                        />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">{event.heading3}</h2>
          <div className="row">
            <div className="col-lg-6">
              {event.img ? (
                <img
                  src={event.img}
                  alt="Event Achievements"
                  className="img-fluid rounded"
                />
              ) : (
                <img
                  src="/1.png"
                  alt="Fallback"
                  className="img-fluid rounded"
                />
              )}
            </div>
            <div className="col-lg-6">
              <h3>{event.sideTxtH}</h3>
              <p>{event.sideTxtP}</p>

            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule Section (always visible for sports) */}
      {event.tblId === '1' && (
        <section className="py-5">
          <div className="container">
            <h2 className="section-title">Training Schedule</h2>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Day</th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                    <th>Evening</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>Running (5km)</td>
                    <td>Strength Training</td>
                    <td>Football Practice</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>Swimming</td>
                    <td>Rest</td>
                    <td>Basketball Practice</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>Interval Training</td>
                    <td>Yoga</td>
                    <td>Tennis Practice</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>Swimming</td>
                    <td>Strength Training</td>
                    <td>Football Practice</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>Running (5km)</td>
                    <td>Rest</td>
                    <td>Basketball Practice</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>Match Day</td>
                    <td>Recovery</td>
                    <td>Strategy Session</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Active Recovery</td>
                    <td>Family Time</td>
                    <td>Planning Week Ahead</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventDetails;
