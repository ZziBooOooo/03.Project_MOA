import React from "react";
import style from "../styles/common.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

const Header = () => {
  const router = useRouter();

  return (
    <div className={style.headerBox}>
      <div className={style.header_leftBox} onClick={() => router.push("/")}>
        {/* <p><img src="@/public/assets/images/logo.png"/></p> */}
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
        />
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
