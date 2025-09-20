import React from 'react'
import cards from '../Json/cards.json'

function Cards() {
  return (
    <>
    {cards.map((cards) => (
                <div className="event-card" key={cards.id}>
                  <div className="event-image">
                    <img
                      src={cards.image}
                      alt="Tech Symposium"
                    />
                  </div>
                  <div className="event-content">
                    <span className="event-date">
                      {cards.date}
                    </span>
                    <h3 className="event-title">{cards.title}</h3>
                    <p className="event-description">
                      {cards.description}
                    </p>
                    <div className="event-meta">
                      <span>{cards.location }</span>
                      <a href="#" className="event-button">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              ))}
    </>
  )
}

export default Cards