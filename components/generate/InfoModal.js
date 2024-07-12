import React from 'react'
import { motion } from "framer-motion";
import r_style from "@/styles/generate/results.module.scss";

const boxVars = { // 부모의 variants 객체
    start: { 
      opacity: 0,
      scale: 0.5,
    },
    end: { 
      opacity: 1,
      scale: 1, 
      rotateZ: 360, 
      transition: { 
        type: "spring", 
        duration: 0.5,
        bounce: 0.5, 
        delayChildren: 0.5,  // 자식 컴포넌트는 0.5초 느리게 나타나게 하는 속성
        staggerChildren: 0.2, //  자식 컴포넌트 하나 나타나고 그다음 컴포넌트에 0.2초 딜레이 부여
      }
    }
  }
  
  const circleVars = { // 자식의 variants 객체
    start: {
        opacity: 0,
      y: 10
    },
    end: {
      opacity: 1,
      y: 0,
    },
  }

const InfoModal = () => {
    

  return (
    <motion.div 
        variants={boxVars}
        initial="start"
        animate="end"
        className={r_style.modalBgDiv}>
        <motion.div
            variants={circleVars}
            className={r_style.modalContainer}>
      <div className={r_style.modalBox}>
        <h2>저장완료</h2>
      </div>
        </motion.div>
    </motion.div>
  )
}

export default InfoModal