import React from "react";
import Image from "next/image";
import style from "../../styles/generate/generate.module.scss";
import IconCard from "@/components/generate/IconCard";
import { AnimatePresence, motion } from "framer-motion";

const GenerateTop = () => {
  const imgPath = [
    "/assets/images/generate/crayons.png",
    "/assets/images/generate/money.png",
    "/assets/images/generate/chat.png",
    "/assets/images/generate/gallery.png",
    "/assets/images/generate/user.png",
  ];
  return (
    <div className={style.topBox}>
      <div className={style.textBox}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
          >
            <p className={style.mainTxt}>
              나만의 단어로 <br /> 이미지를 만들어보세요
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.p
            className={style.subTxt}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.7 },
            }}
          >
            단어를 조합해 문장을 만들 수 있어요
          </motion.p>
        </AnimatePresence>
      </div>
      <motion.div
        className={style.topImgBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {imgPath.map((imagePath, key) => {
          return (
            <IconCard key={key} imagePath={imagePath} delay={key * 0.4 + 1} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default GenerateTop;
