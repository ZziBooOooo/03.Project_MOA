import React from "react";
import { motion } from "framer-motion";
import r_style from "@/styles/generate/results.module.scss";

const SaveModal = ({ closeModal, setDarkOpaBg }) => {
  return (
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
        <h2>This is a Modal</h2>
        <button
          onClick={() => {
            closeModal();
            setDarkOpaBg(false);
          }}
        >
          Close Modal
        </button>
      </div>
    </motion.div>
  );
};

export default SaveModal;
