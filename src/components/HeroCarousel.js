import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../components/css/HeroCarousel.css";
import Slider1 from "../assets/images/slider-1.jpg";
import Slider2 from "../assets/images/slider-2.jpg";
import Slider3 from "../assets/images/slider-3.jpg";

const ImageCarousel = ({ children }) => {
  return (
    <section aria-label="Hero Carousel" className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        className="hero-swiper"
      >
        {[Slider1, Slider2, Slider3].map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="slide" 
              style={{ backgroundImage: `url(${slide})` }}
            >
              {children}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageCarousel;