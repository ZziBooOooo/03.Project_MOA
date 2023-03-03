import React, { useContext } from "react";
import style from "@/styles/generate/generate.module.scss";
import GenerateTop from "@/components/generate/GenerateTop";
import Image from "next/image";
import { useRouter } from "next/router";
import { TargetIdContext } from "@/context/generate/wordCount";

const Index = () => {
  const textArray = [
    {
      title: "단어 2개",
      description: "2가지 단어로만 조합해요. 간단한 문장이예요",
      example: "예시 : 돌고래가 수영한다.",
      iconPath: "/assets/images/generate/word2.png",
    },
    {
      title: "단어 3개",
      description: "3가지 단어로 만든 기본적인 문장이예요",
      example: "예시 : 고양이가 침대에서 잔다",
      iconPath: "/assets/images/generate/word3.png",
    },
    {
      title: "단어 4개",
      description: "4가지 단어로 만든 디테일한 문장이예요",
      example: "예시 : 강아지가 공과 풀숲에서 논다",
      iconPath: "/assets/images/generate/word4.png",
    },
  ];

  const router = useRouter();
  const { setTargetId } = useContext(TargetIdContext);

  // 단어개수 선택값을 context 이용해서 저장 + 페이지넘김
  const handleClick = (e) => {
    setTargetId(e.target.id);
    router.push("/generate/word", undefined, { scroll: false });
  };

  return (
    <div className={style.fullBox}>
      <GenerateTop />
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
            <p className={style.mainText}>단어의 개수를 선택해 주세요</p>
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
                    <p>{item.example}</p>
                  </div>

                  <div className={style.btnPositionBox}>
                    <p></p>
                    <button
                      id={key + 2}
                      className={style.selectBtn}
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    >
                      선택하기
                    </button>
                    <p></p>
                  </div>
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

export default Index;
