import React, { useContext, useEffect, useRef } from "react";
import style from "@/styles/generate/generate.module.scss";
import GenerateTop from "@/components/generate/GenerateTop";
import Image from "next/image";
import { useRouter } from "next/router";
import { wordCountContext } from "@/contexts/generate/wordCountContext";
import { AnimatePresence, motion } from "framer-motion";

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
  const { setWordCount } = useContext(wordCountContext);

  // 단어개수 선택값을 context 이용해서 저장 + 페이지넘김
  const handleClick = (e) => {
    const id = e.currentTarget.id || e.currentTarget.parentElement.id;
    setWordCount(id);

    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? window.sessionStorage.setItem("wordCount", id)
      : null;
    router.push("/generate/word", undefined, { scroll: false });
  };

  // 새로고침해도 선택한 단어의 개수가 필요함 -> 이거는 세션스토리지에 저장한다.

  return (
    <div className={style.fullBox}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <AnimatePresence>
          <motion.div
            className={style.bottomMainBox}
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                  <div
                    key={key}
                    id={key + 2}
                    className={style.selectCard}
                    onClick={(e) => {
                      handleClick(e);
                    }}
                  >
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
                      <button className={style.selectBtn}>선택하기</button>
                      <p></p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.dummyBox}></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
