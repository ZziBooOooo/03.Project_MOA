import React, { useContext, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import t_style from "@/styles/generate/type.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";

import { useRouter } from "next/router";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";

const ImgType = () => {
  const typeArr = [
    "스테인 글라스",
    "픽셀아트",
    "유화",
    "일러스트",
    "디지털 아트",
    "수채화",
  ];

  const [selectType, setSelectType] = useState(null);
  const [activeBtnClass, setActiveBtnClass] = useState(false);

  const { userSentence, setUserSentence } = useContext(userSentenceContext);

  const router = useRouter();

  const goImgResultPage = () => {
    if (selectType) {
      router.push("/generate/imgStyle", undefined, { scroll: false });
    }
  };

  function saveTypeToContext() {
    setUserSentence(`${userSentence},${selectType}`);
  }

  function selectTypeStyle() {
    setActiveBtnClass(true);
  }
  return (
    <div className={`${style.fullBox} ${t_style.fullBox}`}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={`${style.bottomMainBox} ${t_style.bottomMainBox}`}>
          <div className={style.b_textBox}>
            <p className={style.checkIWrap}>
              <Image
                src="/assets/images/generate/check.png"
                alt="checkIcon"
                width={35}
                height={35}
              />
            </p>
            <p className={style.mainText}>이미지 타입을 선택해 주세요</p>
          </div>
          {/* 
          선택한 타입을 state에 저장시킨다.
          */}
          <div className={t_style.cardBox}>
            {typeArr.map((type, key) => {
              return (
                <div
                  className={
                    selectType == type
                      ? `${t_style.imgTypeCard} ${t_style.currentSelect}`
                      : `${t_style.imgTypeCard}`
                  }
                  key={key}
                  onClick={() => {
                    setSelectType(type);
                    selectTypeStyle();
                  }}
                >
                  <p></p>
                  <p>{type}</p>
                  <p></p>
                  <p></p>
                </div>
              );
            })}
          </div>
          <div className={t_style.completeBtnBox}>
            <p></p>
            <button
              className={activeBtnClass ? `${t_style.activeBtn}` : ""}
              onClick={() => {
                goImgResultPage();
                saveTypeToContext();
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

export default ImgType;
