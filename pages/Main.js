import React from "react";
import style from "../styles/main/main.module.css";

const Main = () => {
  return (
    <>
      <section className={style.section01}>
        <p>모아서 그리자!</p>
        <h1>아티스트가 되는 공간. 모아 </h1>
        <button>시작하기</button>
      </section>

      <section className={style.section02}>
        <div className={style.guideBox}>
          <p className={style.section_title}>COIN</p>
          <h2>
            모으는 재미!<br></br>
            매일 다른 미션
          </h2>
          <img src="../public/assets/images/main/coin.gif" />
          <p className={style.guide_detail}>
            모아에서는 매일 다른 미션이 제공돼요.<br></br>
            미션에 성공하면 코인을 받을 수 있어요.{" "}
          </p>

          <div className={style.guide_content}>
            <div className={style.try_guide}>
              <img src="../public/assets/images/main/checkCircle.png" />
              <p className={style.mission_title}>하루 한번 참여</p>
              <p className={style.mission_detail}>
                미션은 하루에 한번 참여할 수 있어요.
              </p>
            </div>

            <div className={style.random_guide}>
              <img scr="../public/assets/images/main/slot.png" />
              <p className={style.mission_title}>랜덤 참여</p>
              <p className={style.mission_detail}>
                미션은 매일 랜덤으로 주어져요.
              </p>
            </div>

            <div className={style.save_guide}>
              <img scr="../public/assets/images/main/moneypocket.png" />
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
