import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ModalSlider() {
  const images = [
    'assets/images/1_1.JPG',
    'assets/images/3.JPG',
    'assets/images/paint.JPG',
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/7.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
  ];

  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    outerWidth: 100,
  });

  return (
    <>
      <div>
        <h2>Single Item</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} className='h-96' alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ModalSlider;
