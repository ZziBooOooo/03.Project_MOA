import { buyContext } from "@/contexts/buy/buyPageContext";
import { useContext, useState } from "react";
import style from "styles/buy/buy.module.scss";

export default function Banner() {
  const { userData } = useContext(buyContext);

  const wordLength =
    userData &&
    userData.words.WordCoin2.length +
      userData.words.WordCoin3.length +
      userData.words.WordCoin4.length; /* 나의 단어 몇개인지 */


  if (typeof window !== "undefined") {
    sessionStorage.setItem("totalWordCount", wordLength);
  }

  const [io, setio] = useState(false);
  const [so, setso] = useState(false);

  const time = setTimeout(() => {
    setio(true);
  }, "800");
  const times = setTimeout(() => {
    setso(true);
  }, "1200");

  return (
    <div className={style.banner_box}>
      <div className={style.banner_text_box}>
        <h3>단어를 구매해 보세요!</h3>
        <p>보유한 단어가 많을 수록 다양한</p>
        <span>이미지를 만들 수 있어요</span>
        <div className={style.myword_count}>
          <span>나의 단어</span>
          <div></div>
          <p>{wordLength}개</p> {/* 나의 단어 갯수 들어갈곳 */}
        </div>
      </div>
      <div className={style.moaicon1}>
        <img src="/assets/images/buy/banner_icons01.png" />
      </div>
      <div className={style.moaicon2}>
        <img
          src="/assets/images/buy/banner_icons02.png"
          className={io ? style.te : style.imgs}
        />
      </div>
      <div className={style.moaicon3}>
        <img
          src="/assets/images/buy/banner_icons03.png"
          className={so ? style.so : style.imgss}
        />
      </div>
    </div>
  );
}
