import style from "styles/buy/coin.module.scss";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { buyContext } from "@/contexts/buy/buyPageContext";

export default function BuyComplete({ setbuyCom }) {
  const { userData } = useContext(buyContext);

  function modalClose() {
    setbuyCom(false);
  }

  useEffect(() => {
    // console.log(userData);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <motion.div
      key="BuyComModal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.buyComModal}
    >
      <motion.div
        key="BuyComModal_box"
        initial={{ opacity: 0, x: "-60px" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "80px" }}
        className={style.buyComModal_box}
      >
        <div className={style.buyComModal_text}>
          <p>구매 완료!</p>
          <span>나의 단어로 저장되었습니다</span>
        </div>
        <button onClick={modalClose}>확인</button>
      </motion.div>
    </motion.div>
  );
}
