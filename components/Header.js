import React from "react";
import style from "../styles/common.module.css";

const Header = () => {
  return (
    <div className={style.headerBox}>
      <div className={style.header_leftBox}>
        <p>{/* <img></img> */}</p>
        <p>MOA</p>
      </div>
      <div className={style.header_rightBox}>
        <p>미션하기</p>
        <p>구매하기</p>
        <p>창작하기</p>
        <p>마이앨범</p>
        <p>로그인</p>
      </div>
    </div>
  );
};

export default Header;
