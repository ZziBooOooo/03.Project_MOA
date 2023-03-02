import React from "react";
import Image from "next/image";
import style from "../../styles/generate/generate.module.scss";
import IconCard from "@/components/generate/IconCard";

const GenerateTop = () => {
  const imgPath = [
    "/assets/images/generate/crayons.png",
    "/assets/images/generate/money.png",
    "/assets/images/generate/chat.png",
    "/assets/images/generate/gallery.png",
    "/assets/images/generate/user.png",
  ];
  return (
    <div className={style.topBox}>
      <div className={style.textBox}>
        <p>
          나만의 단어로 <br /> 이미지를 만들어보세요
        </p>
        <p>단어를 조합해 문장을 만들 수 있어요</p>
      </div>
      <div className={style.topImgBox}>
        {imgPath.map((imagePath, key) => {
          return <IconCard key={key} imagePath={imagePath} />;
        })}
      </div>
    </div>
  );
};

export default GenerateTop;
