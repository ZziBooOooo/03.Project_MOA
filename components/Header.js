import React from "react";
import style from "../styles/common.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className={style.headerBox}>
      <div className={style.header_leftBox} onClick={() => router.push("/")}>
        <p>{/* <img></img> */}</p>
        <p>MOA</p>
      </div>
      <div className={style.header_rightBox}>
        <p onClick={() => router.push("/mission")}>미션하기</p>
        <p onClick={() => router.push("/buypage")}>구매하기</p>
        <p onClick={() => router.push("/generate")}>창작하기</p>
        <p onClick={() => router.push("/myalbum")}>마이앨범</p>
        <p onClick={() => router.push("/login")}>로그인</p>
      </div>
    </div>
  );
};

export default Header;
