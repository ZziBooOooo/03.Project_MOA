import React, { useState, useEffect, useRef } from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import {  useRouter } from "next/router";

const MissionCatch = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const canvasRef = useRef(null);
  const [targetGhostPosition, setTargetGhostPosition] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    countdown > 0 && setTimeout(() => setCountdown(countdown - 1),1000);
    if (countdown === 0) {
        router.push('/mission/missionRetry'); // 타이머 종료 후 페이지 이동
    }
  }, [countdown]);

  //  초기화면 위치 
  const [position, setPosition] = useState({ top:0, left: 0});

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const canvasTarget = canvas.getBoundingClientRect();
      console.log(canvas.getBoundingClientRect())
      const targetGhost = canvas.querySelector('#targetGhost');
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;
      const targetGhostWidth = targetGhost.offsetWidth;
      const targetGhostHeight = targetGhost.offsetHeight;

      const moveTargetGhost = () => {
        // const y = (Math.random() * (canvasTarget.bottom - canvasTarget.top)) + (canvasTarget.bottom - canvasTarget.top);
        const y = (Math.random() * ((canvasTarget.height) - targetGhostHeight)) ;
        const x = (Math.random() * ((canvasTarget.width) - targetGhostWidth));
        setTargetGhostPosition({ x, y });
      };

      const interval = setInterval(moveTargetGhost, 400);
      return () => clearInterval(interval);
    }
  }, []);

  // click 시 stop
  const handleClick = () => {
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
                      {/* <p className={style.guide}>유령에 마우스를 가져가 보세요</p> */}
          </div>
        </div>
      <div className={style.canvas}  ref={canvasRef}>
        <Image
          id="targetGhost"
          src="/assets/images/mission/ghost.gif"
          alt="Target Image"
          width={80}
          height={80}
          style={{position: "absolute", top: `${targetGhostPosition.y}px`,
          left: `${targetGhostPosition.x}px`}}
          onClick={handleClick}
          />
        </div>
    </div>
  )
}

export default MissionCatch
