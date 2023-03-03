import style from "styles/buy/coin.module.scss";
import { motion } from "framer-motion";

export default function CoinCotent4() {
  return (
    <motion.div
      key="CoinCotent4"
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
              <img src="/assets/images/buy/shopicon.png" />
              <p>단어를 구매하세요!</p>
            </div>
            <div className={style.coin_count}>
              <img src="/assets/images/buy/smallcoin.png" />
              <span>24</span> {/* 코인 카운터 들어갈곳 */}
            </div>
            <p>이 단어들은 4개의 코인이 필요해요</p>
          </div>
          <div className={style.content_coinlist_bot}>
            <div className={style.content_wold}>
              <div>단어</div>
            </div>
            <div className={style.content_buy_wold}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
