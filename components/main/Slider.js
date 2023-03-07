import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style2 from '@/styles/main/style.module.css';
import style from '@/styles/main/main.module.css';
import Image from  "next/image";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    waitForAnimate: true,
    centerMode: false,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
        settings.setPaused(true);
    },
    afterChange: () => {
        settings.setPaused(true);
    },
    setPaused: () => {}, // default value
  };
  
  const SliderComponent = () => {
    const [paused, setPaused] = useState(false);

    settings.setPaused = setPaused;
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className={`slider-item ${paused ? "paused" : ""}`}>
          <Image src="/assets/images/main/img01.png"
                          alt='img01'
                          width={239}
                          height={139}
                          className={style.picture} />
          </div>
          <div className={`slider-item ${paused ? "paused" : ""}`}>
            <img src="https://via.placeholder.com/600x300/00ff00/ffffff" alt="Slide 2" />
          </div>
          <div className={`slider-item ${paused ? "paused" : ""}`}>
            <img src="https://via.placeholder.com/600x300/0000ff/ffffff" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default SliderComponent;