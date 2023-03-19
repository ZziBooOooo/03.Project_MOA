import React from "react";
import { motion } from "framer-motion";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";

const SaveModal = ({ openModal, closeModal }) => {
  return (
    <div className={r_style.modalBgDiv}>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translate3d(-50%, -60px, 0)",
        }}
        animate={{
          opacity: 1,
          transform: "translate3d(-50%, -50%, 0)",
        }}
        exit={{
          opacity: 0,
          transform: "translate3d(-50%, -60px, 0) ",
        }}
        transition={{ duration: 0.3 }}
        className={r_style.modalContainer}
      >
        <div className={r_style.modalBox}>
          <Image
            src="/assets/images/generate/check.png"
            alt="My SVG File"
            width={100}
            height={100}
          />
          <h2>저장완료</h2>
          <button
            onClick={() => {
              // closeModal();
            }}
          ></button>
        </div>
      </motion.div>
    </div>
  );
};

export default SaveModal;
