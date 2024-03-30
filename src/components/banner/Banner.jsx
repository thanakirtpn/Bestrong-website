import React from 'react';
// Import Swiper React components and the modules you'll use

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./banner.scss"


const objects = [
    'Object 1',
    'Object 2',
    'Object 3',
    'Object 4',
    'Object 5',
  ];
const Banner = () => {
    const slides = [
        'Slide 1',
        'Slide 2',
        'Slide 3',
        'Slide 4',
        'Slide 5',
      ];
    return (
        <Swiper
        // Install Swiper modules
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        spaceBetween={30} // Space between slides
        slidesPerView={3} // Number of slides per view
        autoplay={{
          delay: 10000, // Delay in ms before auto-sliding
          disableOnInteraction: false, // Continue autoplay on swipe
        }}
        pagination={{ clickable: true }} // Add pagination
        navigation={true} // Add navigation arrows
        freeMode={true} // Allow drag and slide freely
        grabCursor={true} // Change cursor on slide grab
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    );
}

export default Banner