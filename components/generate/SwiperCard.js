import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/bundle";
import s_style from "@/styles/generate/style.module.scss";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

const SwiperCard = ({ selectStyle, setSelectStyle, setActiveBtnClass }) => {
  const imgStyleArr = [
    "귀여움",
    "마법",
    "사이버펑크",
    "컬러풀",
    "우주 컨셉",
    "몬스터",
    "빛나는",
    "디즈니",
    "슈퍼히어로",
    "파스텔 색감",
    "따뜻한 색감",
    "차가운 색감",
    "판타지",
    "레트로",
    "네온",
  ];

  return (
    <Swiper
      style={{ width: "100%", height: "110%" }}
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} ${s_style.pagination}"></span>`;
        },
      }}
    >
      {imgStyleArr.map((style, key) => {
        return (
          <SwiperSlide key={style}>
            <div
              className={
                selectStyle == style
                  ? `${s_style.cardContent} ${s_style.currentSelect}`
                  : `${s_style.cardContent}`
              }
              onClick={() => {
                setSelectStyle(style);
                setActiveBtnClass(true);
              }}
            >
              <p className={s_style.imgIWrap}>
                <Image
                  src={`/assets/images/generate/${style}.PNG`}
                  alt={`이미지 컨셉 : ${style}`}
                  width={275}
                  height={240}
                  placeholder="blur" // 추가
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </p>
              <p className={s_style.typeText}>{style}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCard;
