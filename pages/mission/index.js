import React, { useState, useEffect } from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

const Index = () => {
  const router = useRouter();

  // ✅ Store email in state
  const [parsedUserEmail, setParsedUserEmail] = useState(null);
  const [countNum, setCountNum] = useState(null);

  async function getUserDatas() {
    if (typeof window !== "undefined") {
      const storedUserData = sessionStorage.getItem("userData");

      if (storedUserData) {
        try {
          const parsedData = JSON.parse(storedUserData);
          const email =
            parsedData?.users?.useremail || parsedData?.useremail || null;
          setParsedUserEmail(email);
          // console.log("Parsed User Email:", email);
        } catch (error) {
          console.error("Error parsing userData from sessionStorage:", error);
        }
      } else {
        console.warn("No valid user email found in sessionStorage.");
      }
    }
  }

  async function getMissionCount() {
    if (!parsedUserEmail) {
      console.warn("No email available for mission count request.");
      return;
    }

    try {
      // console.log("GET 요청 시작");
      const response = await axios.get("/api/mission/addCounter", {
        params: { email: parsedUserEmail },
      });
      // console.log("Mission count response:", response, parsedUserEmail);
      setCountNum(response.data.missionCount);
    } catch (err) {
      console.error("Error fetching mission count:", err);
    }
  }

  useEffect(() => {
    getUserDatas();
  }, []);

  useEffect(() => {
    if (parsedUserEmail) {
      getMissionCount();
    }
  }, [parsedUserEmail]); // ✅ Fetch mission count only after the email is set

  const checkMissionCount = () => {
    if (countNum < 3) {
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
            {countNum}
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
