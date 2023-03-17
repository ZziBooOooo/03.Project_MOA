import React from "react";
import style from "../../styles/generate/generate.module.scss";
import Image from "next/image";

const SelectCard = ({ key, iconPath, textArray }) => {
  console.log(textArray);
  return (
    <div className={style.selectCard}>
      <div className={style.cardTitle}>
        <p className={style.b_iconWrap}>
          <Image src={iconPath} alt="icon" width={24} height={24} />
        </p>
        <p>{textArray[key]}</p>
      </div>
      <div className={style.cardContent}></div>
      <button className={style.selectBtn}></button>
    </div>
  );
};

export default SelectCard;
