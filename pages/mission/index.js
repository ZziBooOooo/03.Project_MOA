import React, { useState, useEffect } from "react";
import style from "@/styles/mission/mission.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

const Index = () => {
  const router = useRouter();
  const [countNum, setCountNum] = useState(null);

  const parsedUserEmail =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? JSON.parse(window.sessionStorage.getItem("userData")).useremail || null
      : null;

  async function getMissionCount() {
    console.log(" 겟요청");
    try {
      const response = await axios.get("/api/mission/addCounter", {
        params: { email: parsedUserEmail },
      });
      console.log(response);
      setCountNum(response.data.missionCount);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMissionCount();
  }, []);

  // onClick 함수 실행
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
            layout="resposive"
            src="/assets/images/mission/example.png"
            alt="example"
            width={650}
            height={250}
          />
        </div>
      </div>
      <p className={style.alert}>버튼을 클릭하면 미션이 바로 시작돼요.</p>
      <button onClick={() => checkMissionCount()}>미션 시작하기</button>
    </section>
  );
};

export default Index;
