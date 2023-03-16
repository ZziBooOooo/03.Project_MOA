import React, { useContext, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import t_style from "@/styles/generate/type.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";

import { useRouter } from "next/router";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";
import { selectTypeContext } from "@/contexts/generate/selectTypeContext";

const ImgType = () => {
  const typeArr = [
    "하이퍼 리얼리즘",
    "픽셀아트",
    "오일 페인팅",
    "일러스트",
    "디지털 아트",
    "수채화",
  ];

  const [selectType, setSelectType] = useState(null);
  const [activeBtnClass, setActiveBtnClass] = useState(false);

  const { userSentence, setUserSentence } = useContext(userSentenceContext);
  const { setImgType } = useContext(selectTypeContext);

  const router = useRouter();

  const goImgResultPage = () => {
    if (selectType) {
      router.push("/generate/imgStyle", undefined, { scroll: false });
    }
  };

  function saveTypeToContext() {
    setImgType(selectType);
    setUserSentence(`${userSentence},${selectType}`);
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? window.sessionStorage.setItem("type", selectType) || null
      : null;
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
              const isHyperRealism = type === "하이퍼 리얼리즘";
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
                  {isHyperRealism ? (
                    <>
                      <p className={t_style.typeBg}></p>
                      <div className={t_style.typeTxt}>
                        <p className={t_style.typeTxt1}>하이퍼</p>
                        <p>리얼리즘</p>
                      </div>
                      <p></p>
                    </>
                  ) : (
                    <>
                      <p className={t_style.typeBg}></p>
                      <p>{type}</p>
                      <p></p>
                      <p></p>
                    </>
                  )}
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
