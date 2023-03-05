import React, { useContext, useEffect } from "react";
import style from "@/styles/generate/generate.module.scss";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";

const ImgResults = () => {
  const { userSentence, setUserSentence } = useContext(userSentenceContext);

  useEffect(() => {
    console.log(userSentence);
  }, []);
  return (
    <div className={`${style.fullBox} ${r_style.fullBox}`}>
      <GenerateTop />
      <div className={r_style.bottomBox}>
        <div className={r_style.loadBox}>
          <p className={r_style.textLoader}>로딩중</p>
          <span className={r_style.loader}></span>
          <p>잠시만 기다려 주세요</p>
        </div>
      </div>
    </div>
  );
};

export default ImgResults;
