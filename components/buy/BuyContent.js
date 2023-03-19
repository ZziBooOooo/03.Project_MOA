import style from "styles/buy/buy.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { buyContext } from "@/contexts/buy/buyPageContext";

export default function BuyContent({ onChange }) {
  const { userData } = useContext(buyContext);
  return (
    <motion.div
      key="CoinCotent1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.content_box}
    >
      <div className={style.content_item}>
        <h3>단어 카테고리</h3>
        <div className={style.content_coinlist}>
          <div className={style.content_coinlist_top}>
            <div className={style.check_list}>
              <img src="/assets/images/buy/checklist.png" />
              <p>보유한 코인으로 단어를 구매하세요</p>
            </div>
            <div className={style.coin_count}>
              <img src="/assets/images/buy/smallcoin.png" />
              <span>{userData && userData.coin}</span>{" "}
              {/* 코인 카운터 들어갈곳 */}
            </div>
            <p>코인별로 단어의 내용이 조금씩 달라요</p>
          </div>
          <div className={style.content_coinlist_bot}>
            <div
              className={style.coin2}
              onClick={() => onChange("CoinCotent2")}
            >
              <img src="/assets/images/buy/bigcoin.png" />
              <p>2 코인</p>
              <span>명사의 단어들이 있어요</span>
            </div>
            <div
              className={style.coin2}
              onClick={() => onChange("CoinCotent3")}
            >
              <img src="/assets/images/buy/bigcoin.png" />
              <p>3 코인</p>
              <span>형용사의 단어들이 있어요</span>
            </div>
            <div
              className={style.coin2}
              onClick={() => onChange("CoinCotent4")}
            >
              <img src="/assets/images/buy/bigcoin.png" />
              <p>4 코인</p>
              <span>동사의 단어들이 있어요</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
