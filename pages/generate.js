import React from "react";
import style from "../styles/generate/generate.module.scss";
import IconCard from "@/components/generate/IconCard";
import Image from "next/image";

const generate = () => {
  const imgPath = [
    "/assets/images/generate/crayons.png",
    "/assets/images/generate/money.png",
    "/assets/images/generate/chat.png",
    "/assets/images/generate/gallery.png",
    "/assets/images/generate/user.png",
  ];
  const textArray = [
    {
      title: "단어 2개",
      description: "2가지 단어로만 조합해요",
      example: "예시 : 사과의자",
      iconPath: "/assets/images/generate/heart.png",
    },
    {
      title: "단어 3개",
      description: "3가지 단어로 만든 기본적인 문장이예요",
      example: "예시 : 고양이가 침대에서 잔다",
      iconPath: "/assets/images/generate/heart.png",
    },
    {
      title: "단어 4개",
      description: "4가지 단어로 만든 디테일한 문장이예요",
      example: "예시 : 강아지가 공과 풀숲에서 논다",
      iconPath: "/assets/images/generate/heart.png",
    },
  ];

  return (
    <div className={style.fullBox}>
      <div className={style.topBox}>
        <div className={style.textBox}>
          <p>
            나만의 단어로 <br /> 이미지를 만들어보세요
          </p>
          <p>단어를 조합해 문장을 만들 수 있어요</p>
        </div>
        <div className={style.topImgBox}>
          {imgPath.map((imagePath, key) => {
            return <IconCard key={key} imagePath={imagePath} />;
          })}
        </div>
      </div>

      <div className={style.bottomBox}>
        <div className={style.bottomMainBox}>
          <div className={style.b_textBox}>
            <p className={style.checkIWrap}>
              <Image
                src="/assets/images/generate/check.png"
                alt="checkIcon"
                width={35}
                height={35}
              />
            </p>
            <p className={style.mainText}>단어를 선택해주세요</p>
          </div>
          <div className={style.cardBox}>
            {textArray.map((item, key) => {
              return (
                <div key={key} className={style.selectCard}>
                  <div className={style.cardTitle}>
                    <div className={style.b_iconWrap}>
                      <Image
                        src={item.iconPath}
                        alt="icon"
                        width={22}
                        height={22}
                      />
                    </div>
                    <p>{item.title}</p>
                  </div>
                  <div className={style.cardContent}>
                    <p>{item.description}</p>
                  </div>
                  <button className={style.selectBtn}>선택하기</button>
                </div>
              );
            })}
          </div>
          <div className={style.dummyBox}></div>
        </div>
      </div>
    </div>
  );
};

export default generate;
