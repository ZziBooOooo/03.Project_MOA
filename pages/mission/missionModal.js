import React from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";

import Image from "next/image";
import MissionCatch from "@/components/mission/MissionCatch";
import MissionTree from "@/components/mission/MissionTree";
import MissionDiary from "@/components/mission/MissionDiary";
import MissonMotionBox from "@/components/mission/MissonMotionBox";
import MissionClickCount from "@/components/mission/MissionClickCount";
import MissionTypeWithKeyBoard from "@/components/mission/MissionTypeWithKeyBoard";
import MissionCoinBox from "@/components/mission/MissionCoinBox";

//list에 컴포넌트 타입 넣기
const componentList = [
  MissonMotionBox,
  MissionClickCount,
  MissionTypeWithKeyBoard,
  MissionTree,
  MissionDiary,
  MissionCatch,
  MissionCoinBox,
];

// 랜덤한 컴포넌트를 생성하여 반환
const getRandomComponent = () => {
  const randomIndex = Math.floor(Math.random() * componentList.length);
  const RandomComponent = componentList[randomIndex];
  return <RandomComponent />;
};

const Mission = () => {
  const router = useRouter();

  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.missionModal}>{getRandomComponent()}</div>
      </div>
    </>
  );
};

export default Mission;
