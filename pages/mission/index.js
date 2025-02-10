import React, { useState, useEffect } from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

const Index = () => {
  const router = useRouter();
  const [countNum, setCountNum] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = sessionStorage.getItem("userData");

      if (storedUserData) {
        try {
          const parsedData = JSON.parse(storedUserData);
          let email;

          if (parsedData?.users?.name === "게스트") {
            email = parsedData?.users?.useremail || null;
          } else {
            email = parsedData?.useremail || null;
          }

          if (email) {
            setUserEmail(email); //  이메일 상태 저장
            fetchUserData(email); //  유저 데이터 가져오기
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

  async function fetchUserData(email) {
    try {
      const response = await axios.get("/api/buy/userBuy", {
        params: { email: email },
      });

      if (response.data.status === "exist") {
        setCountNum(response.data.users.missionCount ?? 0);
      } else {
        console.warn("User does not exist.");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  }

  //  미션 성공 시 missionCount 증가
  async function addCoinCounter() {
    if (!userEmail) return;

    try {
      const response = await axios.post("/api/mission/addCounter", {
        email: userEmail,
      });

      console.log("POST request successful:", response.data);

      //  성공적으로 증가하면 다시 DB에서 최신 데이터 가져오기
      fetchUserData(userEmail);
    } catch (err) {
      console.error("Error in POST request:", err);
    }
  }

  // 미션 시작 시 countNum 확인 후 페이지 이동
  const checkMissionCount = () => {
    if (countNum < 3) {
      addCoinCounter(); //  미션 카운트 증가
      router.push("/mission/missionModal");
    } else {
      router.push("/mission/missionEnd");
    }
  };

  return (
    <section className={style.mainSection}>
      <div className={style.description_container}>
        <div className={style.description}>
          <h1>
            매일 새롭게 주어지는 <br /> 미션에 도전해 보세요.
          </h1>
          <p>
            미션을 통해 코인을 모아 단어를 구매하고, <br /> 나만의 문장을 만들어
            보세요.
          </p>
        </div>
        <div className={style.example}>
          <Image
            className={style.exampleImg}
            layout="responsive"
            src="/assets/images/mission/example.png"
            alt="example"
            width={650}
            height={250}
          />
        </div>
      </div>
      <p className={style.alert}>버튼을 클릭하면 미션이 바로 시작돼요.</p>
      <button onClick={checkMissionCount}>미션 시작하기</button>
    </section>
  );
};

export default Index;
