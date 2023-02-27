import React from "react";
import style from "../styles/generate/generate.module.scss";
import IconCard from "@/components/generate/IconCard";

const generate = () => {
  const mapArr = [1, 2, 3, 4, 5];
  return (
    <div className={style.fullBox}>
      <div className={style.topBox}>
        <div className={style.textBox}>
          <p>
            나만의 단어로 <br /> 이미지를 만들어보세요
          </p>
          <p>단어를 조합해 문장을 만들 수 있어요</p>
        </div>
        <div className={style.topImgBox}>
          {mapArr.map((item, key) => {
            return <IconCard key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default generate;
