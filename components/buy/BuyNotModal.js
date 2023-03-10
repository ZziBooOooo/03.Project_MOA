import style from "styles/buy/coin.module.scss";
import { motion } from "framer-motion";

export default function BuyNotModal({ setbuyNot }) {
  function modalClose() {
    setbuyNot(false);
  }

  return (
    <motion.div
      key="BuyNotModal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.buyNotModal}
    >
      <motion.div
        key="BuyNotModal_box"
        initial={{ opacity: 0, x: "-60px" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "80px" }}
        className={style.buyNotModal_box}
      >
        <div className={style.buyNotModal_text}>
          <p>코인이 부족합니다</p>
          <span>확인 후 다시 구매해 주세요</span>
        </div>
        <button onClick={modalClose}>확인</button>
      </motion.div>
    </motion.div>
  );
}
