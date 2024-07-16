import React, { useEffect } from "react";
import { delay, motion } from "framer-motion";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import { useRouter } from "next/router";

const bgVars = {
  // 부모의 variants 객체
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      delayChildren: 0.5, // 자식 컴포넌트는 0.5초 느리게 나타나게 하는 속성
      staggerChildren: 0.2, //  자식 컴포넌트 하나 나타나고 그다음 컴포넌트에 0.2초 딜레이 부여
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const modalVars = {
  // 자식의 variants 객체
  start: {
    opacity: 0,
    y: "-45%",
    x: "-50%",
  },
  end: {
    opacity: 1,
    y: "-50%",
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  exit: { opacity: 0, y: "-45%", transition: { duration: 0.5 } },
};

const contentVars = {
  // 각 요소의 variants 객체
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      duration: 0.8,
    },
  },
};

const InfoModal = ({ closeModal }) => {
  const router = useRouter();

  function moveToAlbum() {
    setTimeout(() => {
      router.push("/generate/others");
    }, 500);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // 모달이 언마운트 될 때 스크롤 복구
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      variants={bgVars}
      initial="start"
      animate="end"
      exit="exit"
      className={r_style.modalBgDiv}
      onClick={closeModal}
    >
      <motion.div variants={modalVars} className={r_style.modalContainer}>
        <div className={r_style.modalBox}>
          <motion.div variants={contentVars}>
            <Image
              src={logo}
              alt="Logo"
              width={110}
              height={110}
              style={{ transform: "rotate(-70deg)" }}
            />
          </motion.div>
          <div>
            <motion.h3 variants={contentVars}> 안내의 말씀</motion.h3>
            <motion.div variants={contentVars}>
              <p>OPEN AI의 api 유료화 정책으로 인해</p>
              <p>이미지 생성기능은 현재 지원되지 않습니다.</p>
              <p>앨범페이지로 이동해 그동안 MOA의 유저들이</p>
              <p>생성한 이미지를 구경할 수 있어요.</p>
            </motion.div>
          </div>
          <motion.button
            variants={contentVars}
            className={r_style.moveBtn}
            onClick={() => {
              moveToAlbum();
            }}
          >
            이동하기
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoModal;
