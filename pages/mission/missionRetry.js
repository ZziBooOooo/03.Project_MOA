import React from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const MissionRetry = () => {
  const router = useRouter();

  return (
    <div className={style.missionRetry}>
      <p className={style.slogan}>아쉽군요! 다음에 다시 도전하세요.</p>
      <Image
        src="/assets/images/mission/fail.gif"
        alt="retry"
        width={300}
        height={325}
        style={{ marginRight: "2%" }}
      />
      <button onClick={() => router.push("/generate")}>
        단어함 페이지 이동
      </button>
    </div>
  );
};

export default MissionRetry;
