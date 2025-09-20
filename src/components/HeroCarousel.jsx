import React from "react";
import "../css/carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Campus Life 1",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Campus Life 2",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    alt: "Campus Life 3",
  },
];

const HeroCarousel = () => (
  <div className="hero-carousel">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3500}
      transitionTime={900}
      dynamicHeight={false}
      swipeable
      emulateTouch
    >
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img.src} alt={img.alt} className="carousel-img" />
          <p className="legend">{img.alt}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default HeroCarousel;
