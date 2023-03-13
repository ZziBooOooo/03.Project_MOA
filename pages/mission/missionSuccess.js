import React, { useEffect } from 'react'
import style from '@/styles/mission/mission.module.css';
import {useRouter} from 'next/router';
import Image from "next/image";
import  { useCallback } from "https://cdn.skypack.dev/react@17";
import { render } from "https://cdn.skypack.dev/react-dom@17";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";


const missionSuccess = () => {
  const router = useRouter();

  useEffect(()=>{
    confetti();
  },[]);

  return (
    <div className={style.missionSuccess}>
      <p className={style.slogan}>미션에 성공하셨어요!</p>
      <p className={style.reward}> +<span>1</span>코인 </p>
      <Image 
            src="/assets/images/mission/success.png"
            alt="example"
            width={400}
            height={400}
            />
      <button onClick = {()=>router.push('/generate')}>단어함 페이지 이동</button>
    </div>
  )
}

export default missionSuccess