import React, { useState, useRef, useEffect } from "react";
import style from "@/styles/mission/mission.module.scss";
import { useRouter } from "next/router";

const MissionClickCount = () => {
  const router = useRouter();
  const [time, setTime] = useState(10);
  const [clickCount, setClickCount] = useState(0);
  const [bgColor, setBgColor] = useState(false);
  const [boxAni, setBoxAni] = useState(false);

  function addClickCount() {
    setBgColor(true);
    setClickCount((prevClickCount) => prevClickCount + 1);

    if (clickCount == 45) {
      setBoxAni(true);
      setTimeout(() => {
        router.push("/mission/missionSuccess");
      }, 800);
    }
  }

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
      }, 800);
    }
  }, [time, router]);

  return (
    <div className={`${style.missionClickCount} ${bgColor ? style.bgOn : ""} `}>
      <>
        <div className={style.timeBox}>
          <p>00:{time < 10 ? `0${time}` : time}</p>
        </div>
        <div className={style.textBox}>
          <p>손가락 단련 - 클릭 미션!</p>
          <p>제한시간안에 박스를 클릭해 목표클릭 수에 도달하세요</p>
        </div>
        <div className={style.goalBox}>
          <p>목표 : 45</p>
        </div>
        <div
          className={`${style.missionBox} ${boxAni ? style.boxAniOn : ""}`}
          onClick={addClickCount}
        >
          <p>{clickCount}</p>
        </div>
      </>
    </div>
  );
};

export default MissionClickCount;
