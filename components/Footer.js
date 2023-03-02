import React from "react";
import style from "../styles/common.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footerBox}>
        <p className={style.footer_title}>고객센터</p>
        <div className={style.footer_detail}>
          <p>
          전화: 1004-1004<br></br>
          이메일: <a href="#">moamoa@moa.com</a><br></br>
          깃허브 주소: <a href="https://github.com/Green-Team-D/MOA" target='blank'>https://github.com/Green-Team-D/MOA</a><br></br>
          대표: 조민서
          </p>    
        </div>
      </div>
    </>
  )
};

export default Footer;
