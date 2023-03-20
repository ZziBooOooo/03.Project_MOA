import React from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const MissionEnd = () => {
  const router = useRouter();

  return (
    <div className={style.missionEnd}>
      <p className={style.slogan}>오늘은 이미 참여하셨어요.</p>
      <p className={style.end_message}>내일 다시 참여해주세요!</p>
      <Image
        src="/assets/images/mission/end.gif"
        alt="end"
        width={300}
        height={300}
      />
      <button onClick={() => router.push("/generate")}>
        단어함 페이지 이동
      </button>
    </div>
  );
};

export default MissionEnd;
