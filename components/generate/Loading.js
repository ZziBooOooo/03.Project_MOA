import React from "react";
import r_style from "@/styles/generate/results.module.scss";

const Loading = () => {
  return           <div className={r_style.loadBox}>
  <p className={r_style.textLoader}>로딩중</p>
  <span className={r_style.loader}></span>
  <p>잠시만 기다려 주세요</p>
</div>;
};

export default Loading;
