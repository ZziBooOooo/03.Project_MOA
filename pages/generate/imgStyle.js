import React from "react";
import style from "@/styles/generate/generate.module.scss";
import s_style from "@/styles/generate/style.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";
import SwiperCard from "@/components/generate/SwiperCard";

const ImgStyle = () => {
  const router = useRouter();
  const goImgResultPage = () => {
    router.push("/generate/imgResults", undefined, { scroll: false });
  };
  return (
    <div className={`${style.fullBox} ${s_style.fullBox}`}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={`${style.bottomMainBox} ${s_style.bottomMainBox}`}>
          <div className={style.b_textBox}>
            <p className={style.checkIWrap}>
              <Image
                src="/assets/images/generate/check.png"
                alt="checkIcon"
                width={35}
                height={35}
              />
            </p>
            <p className={style.mainText}>이미지의 컨셉을 선택해 주세요</p>
          </div>
          <div className={s_style.cardBox}>
            <SwiperCard />
          </div>
          <div className={s_style.completeBtnBox}>
            <p></p>
            <button onClick={goImgResultPage}>다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgStyle;
