import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import style from "@/styles/mission/mission.module.scss";

const MotionBox = ({ constraintsRef, onDragStart, onDragEnd }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        dragMomentum={false}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
      {/* <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        dragMomentum={false}
      />
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        dragMomentum={false}
      /> */}
    </>
  );
};

export default MotionBox;
