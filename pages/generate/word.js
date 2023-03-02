import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import w_style from "@/styles/generate/word.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";
import { TargetIdContext } from "@/context/wordCount";

const Word = () => {
  // wordArr 페이지 접속시 DB에서 받아오는걸로 변경해야함 - 25개씩 자르기
  const wordArr = [
    "고양이",
    "딸기",
    "먹는다",
    "소파",
    "다람쥐",
    "나무",
    "춤춘다",
    "도토리",
    "새",
    "물고기",
    "바다",
    "잔다",
    "강아지",
    "간식",
    "집",
    "강",
    "논다",
    "공",
    "사람",
    "아기",
    "리본",
    "공부한다",
    "파티한다",
    "달린다",
    "연필",
  ];

  const [wordCount, setWordCount] = useState(null);
  const [count, setCount] = useState(0);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");

  const { targetId } = useContext(TargetIdContext);
  const router = useRouter();

  // index.js에서 선택한 단어의 개수를 state에 저장한다. -> 조건에 따라 화면 렌더링이 다르기 때문
  useEffect(() => {
    setWordCount(targetId);
  }, []);

  const goTypePage = () => {
    router.push("/generate/imgType", undefined, { scroll: false });
  };

  function makeSentence(e) {
    console.log(e.target.id);
    if (count == 0) {
      setWord1(e.target.id);
    } else if (count == 1) {
      setWord2(e.target.id);
    } else if (count == 2) {
      setWord3(e.target.id);
    } else if (count == 3) {
      setWord4(e.target.id);
    }
    setCount(count + 1);
  }

  return (
    <div className={style.fullBox}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={style.bottomMainBox}>
          <div className={style.b_fullTextBox}>
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

            <p className={w_style.subText}>
              문장이 자연스러울수록 좋은 결과를 얻을 수 있어요
            </p>
          </div>

          <div className={w_style.selectBox}>
            <div className={w_style.sentenceBox}>
              <div className={w_style.sentenceWrap}>
                <div className={w_style.fisrtWord}>
                  <p>{word1}</p>
                  <p>가</p>
                  <div className={w_style.dropdown}>
                    <button className={w_style.dropbtn}>
                      <Image
                        src="/assets/images/generate/down.png"
                        alt="downIcon"
                        width={16}
                        height={16}
                      />
                    </button>
                    <div className={w_style.dropdown_content}>
                      <p>은</p>
                      <p>는</p>
                      <p>이</p>
                      <p>가</p>
                      <p>x</p>
                    </div>
                  </div>
                </div>

                {(wordCount && wordCount == 3) || wordCount == 4 ? (
                  <div className={w_style.secondWord}>
                    <p>{word2}</p>
                    <p>를</p>
                    <div className={w_style.dropdown}>
                      <button className={w_style.dropbtn}>
                        <Image
                          src="/assets/images/generate/down.png"
                          alt="downIcon"
                          width={16}
                          height={16}
                        />
                      </button>
                      <div className={w_style.dropdown_content}>
                        <p>을</p>
                        <p>를</p>
                        <p>와</p>
                        <p>과</p>
                        <p>x</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {wordCount && wordCount == 4 ? (
                  <div className={w_style.thirdWord}>
                    <p>{word3}에서</p>
                  </div>
                ) : null}

                <div className={w_style.fourthWord}>
                  <p>{word4}</p>
                </div>
              </div>
            </div>

            <div className={w_style.wordBox}>
              <div className={w_style.refreshBtnBox}>
                <p>새로고침</p>
                <p>
                  <Image
                    src="/assets/images/generate/refresh.png"
                    alt="downIcon"
                    width={16}
                    height={16}
                  />
                </p>
              </div>
              {wordArr.map((word, key) => {
                return (
                  <div className={w_style.wordBtn} key={key}>
                    <p id={word} onClick={makeSentence}>
                      {word}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={w_style.completeBtnBox}>
              <p></p>
              <button onClick={goTypePage}>다음</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word;
