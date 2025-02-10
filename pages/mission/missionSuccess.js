import React from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const MissionSuccess = () => {
  const router = useRouter();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const wrapper = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = sessionStorage.getItem("userData");
      // console.log("Stored userData in sessionStorage:", storedUserData);

      if (storedUserData) {
        try {
          const parsedData = JSON.parse(storedUserData);
          let email;

          if (parsedData?.users?.name === "게스트") {
            email = parsedData?.users?.useremail || null;
          } else {
            email = parsedData?.useremail || null;
          }

          // console.log("Selected email:", email);

          if (email) {
            async function addCoinCounter() {
              try {
                const response = await axios.post("/api/mission/addCoin", {
                  email: email,
                });
                // console.log("POST request successful:", response.data);
              } catch (err) {
                console.error("Error in POST request:", err);
              }
            }

            addCoinCounter();
          } else {
            console.warn("No valid email found in sessionStorage.");
          }
        } catch (error) {
          console.error("Error parsing session data:", error);
        }
      } else {
        console.warn("No userData found in sessionStorage.");
      }
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
