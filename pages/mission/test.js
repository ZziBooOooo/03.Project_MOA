/* 
import React  from "react";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const [size, setSize] =useState({ width: 0, height: 0 });
  const wrapper =useRef(null);

  useEffect(() => {
    if (wrapper.current) {
      const width = wrapper.current.offsetWidth;
      const height = wrapper.current.offsetHeight;
      setSize({ width, height });
    }
  }, []);

  return (
    <div className="test" ref={wrapper} style={{height:"100vh"}}>
      <div>
        <Confetti
          style={{ pointerEvents: "none" }}
          width={size.width}
          height={size.height}
          numberOfPieces={70}
          recycle={false}
          onConfettiComplete={(confetti) => {
            confetti.reset();
          }}
        />
      </div>
      <style jsx>{`
               .test{
                width:100vw;
                height: 300vh;
               }
            `}</style>
    </div>
  );
}
*/


import React, { useState, useEffect } from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import {  useRouter } from "next/router";

const MissionCatch = () => {
  // missionCatchBox의 크기
  const missionCatchBoxLeft = 360;
  const missionCatchBoxTop = 190;
  const missionCatchBoxWidth = 1200;
  const missionCatchBoxHeight = 1080;

  // winodw size
  const router = useRouter();
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [countdown, setCountdown] = useState(10);
  const [imageLoaded, setImageLoaded] = useState(false);


  
  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
    // if (countdown === 0) {
    //     router.push('/mission/missionRetry'); // 타이머 종료 후 페이지 이동
    // }
  }, [countdown]);

  // useEffect(() => {
  //   let timerId;
  //   if (countdown > 0) {
  //     timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
  //   } else {
  //     router.push('/mission/missionRetry'); // 타이머 종료 후 페이지 이동
  //   }
  //   return () => clearTimeout(timerId);
  // }, [countdown, router]);


  useEffect(()=> {
    const handleResize = () => {
      setWidth(window.documentElement.clientWidth - 100);
      setHeight(window.documentElement.clientHeight - 100); 
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []); 

  useEffect(()=> {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
    document.getElementById("targetGhost").addEventListener("load", handleImageLoad);

    return () => {
      document.getElementById("targetGhost").removeEventListener("load", handleImageLoad);
    }
  }, []);

  //  초기화면 위치 
  const [position, setPosition] = useState({ top: 50, left: 50 });

  // 호버시 움직이기
  const handleMouseEnter = () => {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    console.log(x,y);


    // missionCatchBox 범위 안에 위치하도록 조정
    x = Math.max(x, missionCatchBoxLeft);
    console.log(x)
    x = Math.min(x, missionCatchBoxLeft + missionCatchBoxWidth);
    console.log(x)
    console.log(missionCatchBoxLeft+missionCatchBoxWidth);
    y = Math.max(y, missionCatchBoxTop);
    y = Math.min(y, missionCatchBoxTop + missionCatchBoxHeight);
    
    x= Math.random()

    setPosition({ top: y, left: x });
  };

  // click 시 stop
  const handleClick = () => {
    // document.getElementById("target").src = "path/to/image.png";
    document.getElementById("targetGhost").removeEventListener("mouseenter", handleMouseEnter);
    document.getElementById("targetGhost").removeEventListener("click", handleClick);
    setPosition({ top: 50, left: 50 });
    
    router.push('/mission/missionSuccess');
  };


  return (
    <div className={style.missionCatchBox}>
        <div className={style.content}>
          <div className={style.timer }  style={{ color: countdown <= 4 ? "#E53935" : "$mainColor" }}>
                  00 : {countdown<10 ? `0${countdown}` : countdown}
          </div>
          <div className={style.titleBox}>
                      <p className={style.title}>유령잡기!</p>
                      <p className={style.detail}>돌아다니는 유령을 잡아보세요</p>
                      <p className={style.guide}>유령에 마우스를 가져가 보세요</p>
          </div>
        </div>
      <div className={style.canvas}>
        <Image
          id="targetGhost"
          src="/assets/images/mission/ghost.gif"
          alt="Target Image"
          width={80}
          height={80}
          style={{position: "absolute", top: position.top, left: position.left, transform: "translate(-50%, -50%)"}}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          />
        </div>
    </div>
  )
}

export default MissionCatch