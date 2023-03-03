import style from "styles/buy/coin.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CoinCotent2() {
  const [buyWold, setbuyWold] = useState([]);
  const [coinTotal, setcoinTotal] = useState(0);
  /* 푸쉬 s*/
  const WoldCoin2 = [
    {
      id: 1,
      isDone: true,
      coinNum: 2,
      wold: "고양이",
    },
    { id: 2, isDone: true, coinNum: 2, wold: "강아지" },
    { id: 3, isDone: true, coinNum: 2, wold: "송아지" },
    { id: 4, isDone: true, coinNum: 2, wold: "병아리" },
    { id: 5, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 6, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 7, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 8, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 9, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 10, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 11, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 12, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 13, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 14, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 15, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 16, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 17, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 18, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 19, isDone: true, coinNum: 2, wold: "망아지" },
    { id: 20, isDone: true, coinNum: 2, wold: "망아지" },
  ];

  function buyUpdate(id) {
    let buyadd = WoldCoin2.find((res) => res.id === id);
    let newAdd = [...buyWold];
    if (newAdd.some((item) => item.id === buyadd.id)) {
      newAdd = newAdd.filter((item) => item.id !== buyadd.id);
      /* some = true, false 값을 반환 */
    } else {
      newAdd.push(buyadd);
    }
    setbuyWold(newAdd);
  }

  useEffect(() => {
    setcoinTotal(buyWold.length * 2);
  }, [buyWold]);

  return (
    <motion.div
      key="CoinCotent2"
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
            <p>이 단어들은 2개의 코인이 필요해요</p>
          </div>
          <div className={style.content_coinlist_bot}>
            <div className={style.content_wold}>
              {WoldCoin2.map((res) => (
                <div
                  className={
                    buyWold.find((tes) => tes.id === res.id)
                      ? style.nod
                      : style.isd
                  }
                  key={res.id}
                  onClick={() => buyUpdate(res.id)}
                >
                  {res.wold}
                </div>
              ))}
            </div>
            <div className={style.content_buy_wold}>
              <div className={style.totalCoin}>
                <p>총 코인 개수</p>
                <div>
                  <img src="/assets/images/buy/smallcoin.png" />
                  <span>{coinTotal}</span>
                  {/* 구매할 코인 개수 */}
                </div>
              </div>
              <div className={style.buyWold_list}>
                {buyWold &&
                  buyWold.map((res) => (
                    <div className={style.buyWold_item} key={res.id}>
                      <div>
                        <img src="/assets/images/buy/smallcoin.png" />
                        <span>{res.coinNum}</span>
                      </div>
                      <p>{res.wold}</p>
                    </div>
                  ))}
              </div>
              <button>구매하기</button> {/* 구매시 함수 */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
