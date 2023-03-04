import style from "styles/buy/buy.module.scss";
import { motion } from "framer-motion";

export default function BuyContent({ onChange }) {
  return (
    <motion.div
      key="CoinCotent1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style.content_box}
    >
      <div className={style.content_item}>
        <h3>문구 생각해보기</h3>
        <div className={style.content_coinlist}>
          <div className={style.content_coinlist_top}>
            <div className={style.check_list}>
              <img src="/assets/images/buy/checklist.png" />
              <p>해야하는 일 설명해주기</p>
            </div>
            <div className={style.coin_count}>
              <img src="/assets/images/buy/smallcoin.png" />
              <span>24</span> {/* 코인 카운터 들어갈곳 */}
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
              <span>대략 어떤 단어 있는지 간단한 설명</span>
            </div>
            <div
              className={style.coin2}
              onClick={() => onChange("CoinCotent3")}
            >
              <img src="/assets/images/buy/bigcoin.png" />
              <p>3 코인</p>
              <span>대략 어떤 단어 있는지 간단한 설명</span>
            </div>
            <div
              className={style.coin2}
              onClick={() => onChange("CoinCotent4")}
            >
              <img src="/assets/images/buy/bigcoin.png" />
              <p>4 코인</p>
              <span>대략 어떤 단어 있는지 간단한 설명</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
