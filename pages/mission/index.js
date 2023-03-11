import React from 'react';
import style from '@/styles/mission/mission.module.css';
import { useRouter } from "next/router";
import Image from "next/image";

const index = () => {
  const router = useRouter();
  return (
    <section className={style.mainSection}>
      <div className={style.description_container}>
        <div className={style.description}>
          <h1>매일 새롭게 주어지는 <br /> 미션에 도전해 보세요.</h1>
          <p>미션을 통해 코인을 모아 단어를 구매하고, <br/> 나만의 문장을 만들어 보세요.</p>
        </div>
        <div className={style.example}>
          <Image 
            src="/assets/images/mission/example.png"
            alt="example"
            width={650}
            height={250}
            />
        </div>
      </div>
      <button onClick={() => router.push("/missionModal")}>미션 시작하기</button>

    </section>

  )
}

export default index