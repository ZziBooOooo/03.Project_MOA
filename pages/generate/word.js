import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import w_style from "@/styles/generate/word.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";
import { TargetIdContext } from "@/context/generate/wordCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Word = () => {
  // wordArr 페이지 접속시 DB에서 받아오는걸로 변경해야함 - 25개씩 자르기

  // 추가 - 새로고침으로 할지 이전,다음 버튼으로 할지
  // 출력되는 단어가 바뀌어도 전의 버튼은 selected클래스 유지되어야한다. + 문장에서도 단어들이 유지되도록.

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
    "강",
    "논다",
    "공",
    "공부한다",
    "파티한다",
    "달린다",
  ];

  const [wordCount, setWordCount] = useState(null);
  const [count, setCount] = useState(0);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");

  const [postPosition1, setPostPosition1] = useState("");
  const [postPosition2, setPostPosition2] = useState("");

  const [selected, setSelected] = useState("");
  const [saveSelected, setSaveSelected] = useState([]);

  const { targetId } = useContext(TargetIdContext);
  const router = useRouter();

  // index.js에서 선택한 단어의 개수를 state에 저장한다. -> 조건에 따라 화면 렌더링이 다르기 때문
  useEffect(() => {
    setWordCount(targetId);
  }, []);

  // imgType페이지로 이동
  const goTypePage = () => {
    router.push("/generate/imgType", undefined, { scroll: false });
  };

  // 단어 누르면 문장박스에 출력하도록 하는 함수
  // count state를 만들어 단어의 순서를 관리한다.

  // wordCount에 따라 카운트개수 변경하기**
  function makeSentence(e) {
    if (wordCount == 2) {
      if (count == 0) {
        setWord1(e.target.id);
      } else if (count == 1) {
        setWord4(e.target.id);
      }
      setCount(count + 1);
    }

    if (wordCount == 3) {
      if (count == 0) {
        setWord1(e.target.id);
      } else if (count == 1) {
        setWord2(e.target.id);
      } else if (count == 2) {
        setWord4(e.target.id);
      }
      setCount(count + 1);
    }

    if (wordCount == 4) {
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
  }

  function addSelectedClass(selectWord) {
    setSelected(selectWord);
  }

  function saveSelectedClass(selectWord) {
    setSaveSelected([...saveSelected, selectWord]);
    console.log(saveSelected);
  }

  // 조사버튼 누르면 누른값으로 조사 변경
  function selectPostPosition1(e) {
    setPostPosition1(e.target.innerText);
  }
  function selectPostPosition2(e) {
    setPostPosition2(e.target.innerText);
  }

  function deleteSentence() {
    setCount(0);
    setWord1("");
    setWord2("");
    setWord3("");
    setWord4("");
    setSaveSelected([]);
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
                  <p>{postPosition1}</p>
                  <div className={w_style.dropdown}>
                    <button className={w_style.dropbtn}>
                      <Image
                        src="/assets/images/generate/down.png"
                        alt="downIcon"
                        width={16}
                        height={16}
                      />
                    </button>
                    <div
                      className={w_style.dropdown_content}
                      onClick={(e) => selectPostPosition1(e)}
                    >
                      <p>은</p>
                      <p>는</p>
                      <p>이</p>
                      <p>가</p>
                    </div>
                  </div>
                </div>

                {(wordCount && wordCount == 3) || wordCount == 4 ? (
                  <div className={w_style.secondWord}>
                    <p>{word2}</p>
                    <p>{postPosition2}</p>
                    <div className={w_style.dropdown}>
                      <button className={w_style.dropbtn}>
                        <Image
                          src="/assets/images/generate/down.png"
                          alt="downIcon"
                          width={16}
                          height={16}
                        />
                      </button>
                      <div
                        className={w_style.dropdown_content}
                        onClick={(e) => selectPostPosition2(e)}
                      >
                        <p>을</p>
                        <p>를</p>
                        <p>와</p>
                        <p>과</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {wordCount && wordCount == 4 ? (
                  <div className={w_style.thirdWord}>
                    <p>{word3}</p>
                    <p>에서</p>
                  </div>
                ) : null}

                <div className={w_style.fourthWord}>
                  <p>{word4}</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faDeleteLeft} onClick={deleteSentence} />
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
                const isSelected =
                  selected === key || saveSelected.includes(word);
                return (
                  <div
                    key={key}
                    className={`${w_style.wordBtn} ${
                      isSelected ? w_style.selected : ""
                    }`}
                  >
                    <p
                      id={word}
                      onClick={(e) => {
                        makeSentence(e);
                        addSelectedClass(word);
                        saveSelectedClass(word);
                      }}
                    >
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
