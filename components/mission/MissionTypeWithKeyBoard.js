import React, { useState, useRef, useEffect } from "react";
import style from "@/styles/mission/mission.module.scss";
import { useRouter } from "next/router";

const MissionTypeWithKeyBoard = () => {
  const [randomIdx, setRandomIdx] = useState(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const [time, setTime] = useState(10);
  const [lightOn, setLightOn] = useState(false);
  const [shakeOn, setShakeOn] = useState(false);
  const sentenceArr = [
    "AbCDefGHi",
    "A10B9C8D7",
    "늦었다고 생각할 때가 정말 늦었다",
    "가는 말이 고우면 얕본다",
    "감사의 표시는 돈으로 해라",
    "일찍 일어나는 새가 피곤하다",
    "티끌모아 티끌이다",
    "즐길 수 없으면 피해라",
    "새벽에먹는 치맥은 0칼로리",
  ];
  const arrLength = sentenceArr.length;

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      setTimeout(() => {
        router.push("/mission/missionRetry");
      }, 500);
    }
  }, [time, router]);

  useEffect(() => {
    setRandomIdx(Math.floor(Math.random() * arrLength));
    setLightOn(true);
    inputRef.current.focus();
  }, []);

  function checkSentence(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    if (sentenceArr[randomIdx] == inputRef.current.value) {
      console.log("true");
      setTimeout(() => {
        router.push("/mission/missionSuccess");
      }, 500);
    } else {
      setShakeOn(true);
      setTimeout(() => {
        setShakeOn(false);
      }, 400);
    }
  }

  return (
    <div className={`${style.missionTypeWithKeyBoard}`}>
      <>
        <div className={style.timeBox}>
          <p>00:{time < 10 ? `0${time}` : time}</p>
        </div>
        <div className={style.textBox}>
          <p>손가락 단련 - 키보드 미션!</p>
          <p>제한시간안에 제시된 문장을 똑같이 입력하세요!</p>
        </div>
        <div className={style.goalBox}>
          <p>{sentenceArr[randomIdx]}</p>
        </div>
        <div className={style.inputBox}>
          <form onSubmit={checkSentence}>
            <input
              type="text"
              ref={inputRef}
              className={shakeOn ? `${style.shake}` : null}
            ></input>
            <span className={lightOn ? `${style.highlight}` : null}></span>
          </form>
        </div>
      </>
    </div>
  );
};

export default MissionTypeWithKeyBoard;
