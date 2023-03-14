import React, { useState, useRef, useEffect } from "react";
import style from "@/styles/mission/mission.module.scss";
import MotionBox from "./MotionBox";
import Image from "next/image";
import { useRouter } from "next/router";

const MissonMotionBox = () => {
  const router = useRouter();
  const constraintsRef = useRef(null);
  const [background, setBackground] = useState("#DCDCDC");
  const colorArr = [
    "#8ACCE8",
    "#B68AE8",
    "#8BB4E9",
    "#FDD35E",
    "#FF81B8",
    "#C3E98B",
    "#FFB25A",
    "#A3F6F3",
    "#FFC6D3",
    "#C2AFFF",
  ];
  const [time, setTime] = useState(10);

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
      }, 1000);
    }
  }, [time, router]);

  const handleDragStart = (color) => {
    setBackground(color);
  };

  const handleDragEnd = () => {
    setBackground("#DCDCDC");
  };

  function goMissionSuccess() {
    setTimeout(() => {
      router.push("/mission/missionSuccess");
    }, 1000);
  }
  return (
    <div className={style.missionMotionBox}>
      <>
        <div className={style.timeBox}>
          <p>00:{time < 10 ? `0${time}` : time}</p>
        </div>
        <div className={style.textBox}>
          <p>박스 옮기기 미션</p>
          <p>제한시간안에 박스를 옮겨 코인을 클릭하세요!</p>
        </div>
        <div
          className={style.missionBox}
          ref={constraintsRef}
          style={{ backgroundColor: background }}
        >
          {colorArr.map((color, key) => {
            return (
              <MotionBox
                constraintsRef={constraintsRef}
                onDragStart={() => {
                  handleDragStart(color);
                }}
                onDragEnd={handleDragEnd}
                key={key}
              />
            );
          })}

          <Image
            src="/assets/images/generate/money.png"
            alt="moneyImage"
            width={80}
            height={80}
            onClick={goMissionSuccess}
          />
        </div>
      </>
    </div>
  );
};

export default MissonMotionBox;
