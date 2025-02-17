import style from "styles/buy/coin.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { buyContext } from "@/contexts/buy/buyPageContext";
import BuyNotModal from "./BuyNotModal";
import BuyComplete from "./BuyComplete";

export default function CoinCotent3({ onChange }) {
  const {
    WordCoin3,
    userGetData,
    userBuyData,
    userData: userDataContext,
  } = useContext(buyContext);

  const [userData, setUserData] = useState(null);

  const [buyWord, setbuyWord] = useState([]); /* 구매할 단어 배열 */
  const [coinTotal, setcoinTotal] = useState(0); /* 구매할 단어 코인 합계 */
  const [buyNot, setbuyNot] = useState(false); /* 구매 부족 모달 */
  const [buyCom, setbuyCom] = useState(false); /* 구매 완료 모달 */
  const wordName = "words.WordCoin3"; /* 단어 추가 분류 */
  // sessionStorage.setItem("totalCoinCount", userData?.coin || null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = sessionStorage.getItem("userData");

      if (storedUserData) {
        try {
          const parsedData = JSON.parse(storedUserData);
          let email;

          if (parsedData?.users?.name === "게스트") {
            email = parsedData?.users?.useremail || null;
          } else {
            email = parsedData?.useremail || null;
          }

          if (email) {
            fetchUserData(email); //  유저 데이터 가져오기
          } else {
            console.warn("No valid email found in sessionStorage.");
          }
        } catch (error) {
          console.error("Error parsing session data:", error);
        }
      }
    }
  }, []);

  async function fetchUserData(email) {
    try {
      const response = await axios.get("/api/buy/userBuy", {
        params: { email: email },
      });
      let parsedData = response.data;

      // 구글로그인인경우는..?
      setUserData(parsedData.users);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  }

  function buyUpdate(id) {
    let buyadd = WordCoin3.find((res) => res.id === id);
    let newAdd = [...buyWord];
    if (newAdd.some((item) => item.id === buyadd.id)) {
      newAdd = newAdd.filter((item) => item.id !== buyadd.id);
      /* some = true, false 값을 반환 */
      /*  구매할 단어 다시 누르면 삭제 */
    } else {
      newAdd.push(buyadd);
    }
    setbuyWord(newAdd);
  } /* 구매할 단어를 누르면 구매페이지에 추가되고 다시누르면 삭제 */

  function buyDecision() {
    if (userData && userData.coin < buyWord.length * 2) {
      setbuyNot(true); /* 코인이 부족할시 모달 */
    } else {
      userBuyData(coinTotal, buyWord, wordName);
      userGetData();
      /* 사용자 구매후 코인수 */
      if (buyWord.length > 0) {
        setbuyCom(true);
      }
      setbuyWord([]); /* 구매되면 구매할 목록 초기화 */
    }
  } /* 구매 버튼 */

  useEffect(() => {
    setcoinTotal(buyWord.length * 2);
  }, [buyWord, coinTotal]); /* 구매할 단어를 누르면 총몇코인이 필요한지 표시 */

  return (
    <motion.div
      key="CoinCotent3"
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      exit={{ y: -10 }}
      className={style.content_box}
    >
      <div className={style.content_item}>
        <h3>3코인 단어</h3>
        <div className={style.content_coinlist}>
          <div className={style.content_coinlist_top}>
            <div className={style.check_list}>
              <img src="/assets/images/buy/shopicon.png" />
              <p>단어를 구매하세요!</p>
            </div>
            <div className={style.coin_count}>
              <img src="/assets/images/buy/smallcoin.png" />
              <span>{userDataContext && userDataContext.coin}</span>{" "}
              {/* 유저 코인 갯수 들어갈곳 */}
            </div>
            <p>이 단어들은 3개의 코인이 필요해요</p>
          </div>
          <div className={style.content_coinlist_bot}>
            <div className={style.content_word}>
              {WordCoin3.map((res) => (
                <button
                  className={
                    buyWord.find((tes) => tes.id === res.id)
                      ? style.nod
                      : style.isd
                  }
                  key={res.id}
                  onClick={() => buyUpdate(res.id)}
                  disabled={
                    userDataContext &&
                    userDataContext.words.WordCoin3.some(
                      (el) => el.word === res.word
                    )
                  }
                  /* 사용자가 이미 데이터가 있는경우 */
                >
                  {res.word}
                </button>
              ))}
            </div>
            <div className={style.content_buy_word}>
              <div className={style.totalCoin}>
                <p>총 코인 개수</p>
                <div>
                  <img src="/assets/images/buy/smallcoin.png" alt="aa" />
                  <span>{coinTotal}</span>
                  {/* 구매할 코인 개수 */}
                </div>
              </div>
              <div className={style.buyword_list}>
                {buyWord &&
                  buyWord.map((res) => (
                    <div className={style.buyword_item} key={res.id}>
                      <div>
                        <img src="/assets/images/buy/smallcoin.png" alt="aa" />
                        <span>{res.coinNum}</span>
                      </div>
                      <p>{res.word}</p>
                    </div>
                  ))}
              </div>
              <button onClick={buyDecision}>구매하기</button>{" "}
              {/* 구매시 함수 */}
            </div>
          </div>
          <div className={style.pageButton}>
            <div onClick={() => onChange("CoinCotent2")}>
              <img src="/assets/images/buy/pageBack.png" alt="aa" />
            </div>
            <div onClick={() => onChange("CoinCotent4")}>
              <img src="/assets/images/buy/pageNext.png" alt="aa" />
            </div>
          </div>
          {buyNot && (
            <AnimatePresence mode="wait">
              <BuyNotModal setbuyNot={setbuyNot} />
            </AnimatePresence>
          )}
          {buyCom && (
            <AnimatePresence mode="wait">
              <BuyComplete setbuyCom={setbuyCom} />
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.div>
  );
}
