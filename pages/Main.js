import React from "react";
import style from "../styles/main/main.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  return (
    <>
      <section className={style.section01}>
        <p>모아서 그리자!</p>
        <h1>아티스트가 되는 공간. 모아 </h1>
        <button onClick={() => router.push("/generate")} >시작하기</button>
        <div className={style.scrolldown}>
          <div className={style.chevrons}>
            <div className={style.chevrondown}></div>
            <div className={style.chevrondown}></div>
          </div>
        </div>
      </section>

      <section className={style.section02}>
        <div className={style.guideBox}>
          <p className={style.section_title}>COIN</p>
          <div className={style.titleBox}>
            <h2>
              모으는 재미!<br></br>
              매일 다른 미션
            </h2>
            <div>
              <Image src="/assets/images/main/coin.gif"
              alt='coin'
              width={400}
              height={280}
              className={style.coinGif}/>
            <p className={style.guide_detail}>
              모아에서는 매일 다른 미션이 제공돼요.<br></br>
              미션에 성공하면 코인을 받을 수 있어요.{" "}
            </p>
            </div>

          </div>
        

          <div className={style.guide_content}>
            <div className={style.try_guide}>
            <Image src="/assets/images/main/checkCircle.png"
              alt='check'
              width={50}
              height={50}
              className={style.checkCircle}/>
              <p className={style.mission_title}>하루 한번 참여</p>
              <p className={style.mission_detail}>
                미션은 하루에 한번 참여할 수 있어요.
              </p>
            </div>

            <div className={style.random_guide}>
            <Image src="/assets/images/main/slot.png"
              alt='slot'
              width={50}
              height={50}
              className={style.slot}/>
              <p className={style.mission_title}>랜덤 참여</p>
              <p className={style.mission_detail}>
                미션은 매일 랜덤으로 주어져요.
              </p>
            </div>

            <div className={style.save_guide}>
            <Image src="/assets/images/main/moneypocket.png"
              alt='moneypocket'
              width={50}
              height={50}
              className={style.moneypocket}/>
              <p className={style.mission_title}>코인 적립</p>
              <p className={style.mission_detail}>
                미션에 성공하면 코인을 적립해드려요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
