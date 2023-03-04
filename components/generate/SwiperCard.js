import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/bundle";
import s_style from "@/styles/generate/style.module.scss";
import Image from "next/image";
// Import Swiper styles

SwiperCore.use([Navigation, Pagination]);

const SwiperCard = () => {
  return (
    <Swiper
      style={{ width: "100%", height: "110%" }}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} ${s_style.pagination}"></span>`;
        },
      }}
    >
      <SwiperSlide>
        <div className={s_style.cardContent}>
          <p className={s_style.imgIWrap}>
            <Image
              src="/assets/images/generate/glass.png"
              alt="checkIcon"
              width={300}
              height={240}
            />
          </p>
          <p className={s_style.typeText}>귀여움</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s_style.cardContent}>
          <p className={s_style.imgIWrap}>
            <Image
              src="/assets/images/generate/glass.png"
              alt="checkIcon"
              width={300}
              height={240}
            />
          </p>
          <p className={s_style.typeText}>귀여움</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s_style.cardContent}>
          <p className={s_style.imgIWrap}>
            <Image
              src="/assets/images/generate/glass.png"
              alt="checkIcon"
              width={300}
              height={240}
            />
          </p>
          <p className={s_style.typeText}>귀여움</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default SwiperCard;
