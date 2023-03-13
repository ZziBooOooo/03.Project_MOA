import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const buyContext = createContext(null);
import { useSession } from "next-auth/react";

const BuyContextCom = (props) => {
  const WordCoin2 = [
    { id: 0, isDone: true, coinNum: 2, word: "고양이" },
    { id: 1, isDone: true, coinNum: 2, word: "강아지" },
    { id: 2, isDone: true, coinNum: 2, word: "토끼" },
    { id: 3, isDone: true, coinNum: 2, word: "나비" },
    { id: 4, isDone: true, coinNum: 2, word: "말" },
    { id: 5, isDone: true, coinNum: 2, word: "호랑이" },
    { id: 6, isDone: true, coinNum: 2, word: "사자" },
    { id: 7, isDone: true, coinNum: 2, word: "펭귄" },
    { id: 8, isDone: true, coinNum: 2, word: "얼룩말" },
    { id: 9, isDone: true, coinNum: 2, word: "알파카" },
    { id: 10, isDone: true, coinNum: 2, word: "사슴" },
    { id: 11, isDone: true, coinNum: 2, word: "여우" },
    { id: 12, isDone: true, coinNum: 2, word: "판다" },
    { id: 13, isDone: true, coinNum: 2, word: "표범" },
    { id: 14, isDone: true, coinNum: 2, word: "양" },
    { id: 15, isDone: true, coinNum: 2, word: "고슴도치" },
    { id: 16, isDone: true, coinNum: 2, word: "돌고래" },
    { id: 17, isDone: true, coinNum: 2, word: "곰" },
    { id: 18, isDone: true, coinNum: 2, word: "다람쥐" },
    { id: 19, isDone: true, coinNum: 2, word: "병아리" },
  ]; /* 2코인 단어 배열 */
  const WordCoin3 = [
    { id: 20, isDone: true, coinNum: 3, word: "딸기" },
    { id: 21, isDone: true, coinNum: 3, word: "그림" },
    { id: 22, isDone: true, coinNum: 3, word: "간식" },
    { id: 23, isDone: true, coinNum: 3, word: "바다" },
    { id: 24, isDone: true, coinNum: 3, word: "침대" },
    { id: 25, isDone: true, coinNum: 3, word: "행복하게" },
    { id: 26, isDone: true, coinNum: 3, word: "열심히" },
    { id: 27, isDone: true, coinNum: 3, word: "무섭게" },
    { id: 28, isDone: true, coinNum: 3, word: "책상" },
    { id: 29, isDone: true, coinNum: 3, word: "소파" },
    { id: 30, isDone: true, coinNum: 3, word: "케이크" },
    { id: 31, isDone: true, coinNum: 3, word: "신나게" },
    { id: 32, isDone: true, coinNum: 3, word: "잔디" },
    { id: 33, isDone: true, coinNum: 3, word: "집" },
    { id: 34, isDone: true, coinNum: 3, word: "감옥" },
    { id: 35, isDone: true, coinNum: 3, word: "자신있게" },
    { id: 36, isDone: true, coinNum: 3, word: "숲" },
    { id: 37, isDone: true, coinNum: 3, word: "심각하게" },
    { id: 38, isDone: true, coinNum: 3, word: "주방" },
    { id: 39, isDone: true, coinNum: 3, word: "레스토랑" },
  ]; /* 3코인 단어 배열 */
  const WordCoin4 = [
    { id: 40, isDone: true, coinNum: 4, word: "걷는다" },
    { id: 41, isDone: true, coinNum: 4, word: "본다" },
    { id: 42, isDone: true, coinNum: 4, word: "논다" },
    { id: 43, isDone: true, coinNum: 4, word: "먹는다" },
    { id: 44, isDone: true, coinNum: 4, word: "수영한다" },
    { id: 45, isDone: true, coinNum: 4, word: "잔다" },
    { id: 46, isDone: true, coinNum: 4, word: "말한다" },
    { id: 47, isDone: true, coinNum: 4, word: "만든다" },
    { id: 48, isDone: true, coinNum: 4, word: "싸운다" },
    { id: 49, isDone: true, coinNum: 4, word: "앉는다" },
    { id: 50, isDone: true, coinNum: 4, word: "잡는다" },
    { id: 51, isDone: true, coinNum: 4, word: "파티한다" },
    { id: 52, isDone: true, coinNum: 4, word: "포옹한다" },
    { id: 53, isDone: true, coinNum: 4, word: "쓴다" },
    { id: 54, isDone: true, coinNum: 4, word: "공부한다" },
    { id: 55, isDone: true, coinNum: 4, word: "산다" },
    { id: 56, isDone: true, coinNum: 4, word: "만난다" },
    { id: 57, isDone: true, coinNum: 4, word: "원한다" },
    { id: 58, isDone: true, coinNum: 4, word: "사랑한다" },
    { id: 59, isDone: true, coinNum: 4, word: "상상한다" },
  ]; /* 4코인 단어 배열 */

  const [userData, setuserData] = useState();
  const { data: session } = useSession(); /* 로그인 세션 */

  const userGetData = async () => {
    try {
      const response = await axios
        .get("/api/buy/userBuy", {
          params: { email: session.user.email },
        })
        .then((res) => setuserData(res.data));
    } catch (error) {
      console.error(error);
    }
  }; /* 사용자 정보 */

  const userBuyData = async (coinTotal, buyWord, wordName) => {
    try {
      const response = await axios.put("/api/buy/userBuy", {
        useremail: userData.useremail,
        updateCoin: userData.coin <= 0 ? 0 : userData.coin - coinTotal,
        updateWord: buyWord,
        wordName,
      });
    } catch (error) {
      console.error(error);
    }
  }; /* 사용자 구매 코인차감, 단어 주기*/

  useEffect(() => {
    userGetData();
  }, [session]); /* DB  */

  return (
    <buyContext.Provider
      value={{
        WordCoin2,
        WordCoin3,
        WordCoin4,
        userGetData,
        userBuyData,
        userData,
        setuserData,
      }}
    >
      {props.children}
    </buyContext.Provider>
  );
};

export default BuyContextCom;
