import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "https://source.unsplash.com/1200x500/?technology",
    "https://source.unsplash.com/1200x500/?sports",
    "https://source.unsplash.com/1200x500/?culture",
    "https://source.unsplash.com/1200x500/?education",
  ];

  const settings = {
    dots: true, // small navigation dots
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // auto slide
    autoplaySpeed: 3000, // 3 sec
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="container my-5">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="img-fluid rounded shadow"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
