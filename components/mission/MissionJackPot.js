import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MissionJackPot() {
  return (
    <div className={style.missionJackPotBox}>
      <h2> 잭팟 터트리기!</h2>
      <p>룰렛을 돌려 코인을 획득하세요.</p>
      <div className={style.missionJackPot_item}>
        <img src="/assets/images/mission/jackpot.png" />
        <div className={style.jackPot}>
          <div>1코인</div>
          <div>2코인</div>
          <div>3코인</div>
        </div>
      </div>
    </div>
  );
}
