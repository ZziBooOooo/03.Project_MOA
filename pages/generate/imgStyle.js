import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import s_style from "@/styles/generate/style.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";
import SwiperCard from "@/components/generate/SwiperCard";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";
import { selectStyleContext } from "@/contexts/generate/selectStyleContext";

const ImgStyle = () => {
  const [selectStyle, setSelectStyle] = useState("");
  const [activeBtnClass, setActiveBtnClass] = useState(false);

  const { userSentence, setUserSentence } = useContext(userSentenceContext);
  const { setImgStyle } = useContext(selectStyleContext);

  const router = useRouter();

  const goImgResultPage = () => {
    if (selectStyle) {
      router.push("/generate/imgResults", undefined, { scroll: false });
    }
  };

  function saveStyleToContext() {
    setImgStyle(selectStyle);
    setUserSentence(`${selectStyle},${userSentence}`);
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? window.sessionStorage.setItem("style", selectStyle) || null
      : null;
  }

  return (
    <div className={`${style.fullBox} ${s_style.fullBox}`}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={`${style.bottomMainBox} ${s_style.bottomMainBox}`}>
          <div className={`${style.b_textBox} ${s_style.b_textBox}`}>
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
            <SwiperCard
              setSelectStyle={setSelectStyle}
              selectStyle={selectStyle}
              setActiveBtnClass={setActiveBtnClass}
            />
          </div>
          <div className={s_style.completeBtnBox}>
            <p></p>
            <button
              className={activeBtnClass ? `${s_style.activeBtn}` : ""}
              onClick={() => {
                goImgResultPage();
                saveStyleToContext();
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgStyle;
