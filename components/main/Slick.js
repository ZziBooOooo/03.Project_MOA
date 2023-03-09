import React, { useState } from "react";
import Slider from "react-slick";
// import "@/styles/main/slick.css";
// import "@/styles/main/slick-theme.css";
import style from "/styles/main/style.module.css";
import Image from "next/image";
import { faL } from "@fortawesome/free-solid-svg-icons";


const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  waitForAnimate: true,
  centerMode: false,
  adaptiveHeight: true,
  nextArrow: false,
  prevArrow: false,

  beforeChange: (current, next) => {
    settings.setPaused(true);
  },
  afterChange: () => {
    settings.setPaused(true);
  },
  setPaused: () => {}, // default value
};

const Slick = () => {
  const [paused, setPaused] = useState(false);

  settings.setPaused = setPaused;

  return (
    <div className="slider_container">
      <Slider {...settings}>
        <div className={`slider-item ${paused ? "paused" : ""}`}>
          <Image
            src="/assets/images/main/cute.png"
            alt="Slide 1"
            width={160}
            height={160}
            className={style.slickPicture}
          />
          <p className={style.slickTitle}>
            귀여운
          </p>
        </div>
        <div className={`slider-item ${paused ? "paused" : ""}`}>
          <Image
            src="/assets/images/main/tree.png"
            alt="Slide 2"
            width={160}
            height={160}
            className={style.slickPicture}
          />
          <p className={style.slickTitle}>
            나무
          </p>
        </div>
        <div className={`slider-item ${paused ? "paused" : ""}`}>
          <Image
            src="/assets/images/main/waterDrop.png"
            alt="Slide 3"
            width={160}
            height={160}
            className={style.slickPicture}
          />
          <p className={style.slickTitle}>
            물방울
          </p>
        </div>
        <div className={`slider-item ${paused ? "paused" : ""}`}>
          <Image
            src="/assets/images/main/refresh.png"
            alt="Slide 4"
            width={160}
            height={160}
            className={style.slickPicture}
          />
          <p className={style.slickTitle}>
            상큼한
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
