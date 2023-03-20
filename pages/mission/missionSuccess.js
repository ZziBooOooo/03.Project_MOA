import React from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const MissionSuccess = () => {
  const router = useRouter();

  const parsedUserEmail =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? JSON.parse(window.sessionStorage.getItem("userData")).useremail || null
      : null;

  const [size, setSize] = useState({ width: 0, height: 0 });
  const wrapper = useRef(null);

  async function addCoinCounter() {
    try {
      await axios.post("/api/mission/addCoin", {
        email: parsedUserEmail,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    addCoinCounter();
  }, []);

  useEffect(() => {
    if (wrapper.current) {
      const width = wrapper.current.offsetWidth;
      const height = wrapper.current.offsetHeight;
      setSize({ width, height });
    }
  }, []);

  return (
    <>
      <div className={style.confettiBox}>
        <Confetti
          style={{ pointerEvents: "none" }}
          width={1940}
          height={1100}
          numberOfPieces={150}
          recycle={false}
          gravity={0.2}
          onConfettiComplete={(confetti) => {
            confetti.reset();
          }}
        />
      </div>
      <div className={style.missionSuccess} ref={wrapper}>
        <p className={style.slogan}>미션에 성공하셨어요! </p>
        <p className={style.reward}>
          {" "}
          +<span>1</span>코인{" "}
        </p>
        <Image
          src="/assets/images/mission/successCoin.png"
          alt="success"
          width={400}
          height={400}
        />
        <button onClick={() => router.push("/generate")}>
          단어함 페이지 이동
        </button>
      </div>
    </>
  );
};

export default MissionSuccess;
