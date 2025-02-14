import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const buyContext = createContext(null);
import { useSession } from "next-auth/react";

const BuyContextCom = (props) => {
  const WordCoin2 = [
    { id: 0, isDone: true, coinNum: 2, word: "고양이" },
    { id: 1, isDone: true, coinNum: 2, word: "강아지" },
    { id: 2, isDone: true, coinNum: 2, word: "드래곤" },
    { id: 3, isDone: true, coinNum: 2, word: "남자" },
    { id: 4, isDone: true, coinNum: 2, word: "여자" },
    { id: 5, isDone: true, coinNum: 2, word: "호랑이" },
    { id: 6, isDone: true, coinNum: 2, word: "나비" },
    { id: 7, isDone: true, coinNum: 2, word: "말" },
    { id: 8, isDone: true, coinNum: 2, word: "앵무새" },
    { id: 9, isDone: true, coinNum: 2, word: "알파카" },
    { id: 10, isDone: true, coinNum: 2, word: "사슴" },
    { id: 11, isDone: true, coinNum: 2, word: "여우" },
    { id: 12, isDone: true, coinNum: 2, word: "요정" },
    { id: 13, isDone: true, coinNum: 2, word: "표범" },
    { id: 14, isDone: true, coinNum: 2, word: "양" },
    { id: 15, isDone: true, coinNum: 2, word: "물개" },
    { id: 16, isDone: true, coinNum: 2, word: "돌고래" },
    { id: 17, isDone: true, coinNum: 2, word: "곰" },
    { id: 18, isDone: true, coinNum: 2, word: "아기" },
    { id: 19, isDone: true, coinNum: 2, word: "물고기" },
  ]; /* 2코인 단어 배열 */
  const WordCoin3 = [
    { id: 20, isDone: true, coinNum: 3, word: "기차" },
    { id: 21, isDone: true, coinNum: 3, word: "그림" },
    { id: 22, isDone: true, coinNum: 3, word: "디저트" },
    { id: 23, isDone: true, coinNum: 3, word: "해변" },
    { id: 24, isDone: true, coinNum: 3, word: "숲" },
    { id: 25, isDone: true, coinNum: 3, word: "과일" },
    { id: 26, isDone: true, coinNum: 3, word: "책" },
    { id: 27, isDone: true, coinNum: 3, word: "나무" },
    { id: 28, isDone: true, coinNum: 3, word: "하늘" },
    { id: 29, isDone: true, coinNum: 3, word: "소파" },
    { id: 30, isDone: true, coinNum: 3, word: "비행기" },
    { id: 31, isDone: true, coinNum: 3, word: "풍선" },
    { id: 32, isDone: true, coinNum: 3, word: "잔디" },
    { id: 33, isDone: true, coinNum: 3, word: "꽃" },
    { id: 34, isDone: true, coinNum: 3, word: "열기구" },
    { id: 35, isDone: true, coinNum: 3, word: "놀이공원" },
    { id: 36, isDone: true, coinNum: 3, word: "소파" },
    { id: 37, isDone: true, coinNum: 3, word: "바다" },
    { id: 38, isDone: true, coinNum: 3, word: "배" },
    { id: 39, isDone: true, coinNum: 3, word: "불" },
  ]; /* 3코인 단어 배열 */
  const WordCoin4 = [
    { id: 40, isDone: true, coinNum: 4, word: "먹는다" },
    { id: 41, isDone: true, coinNum: 4, word: "그린다" },
    { id: 42, isDone: true, coinNum: 4, word: "논다" },
    { id: 43, isDone: true, coinNum: 4, word: "쉰다" },
    { id: 44, isDone: true, coinNum: 4, word: "걷는다" },
    { id: 45, isDone: true, coinNum: 4, word: "잔다" },
    { id: 46, isDone: true, coinNum: 4, word: "읽는다" },
    { id: 47, isDone: true, coinNum: 4, word: "만든다" },
    { id: 48, isDone: true, coinNum: 4, word: "수영한다" },
    { id: 49, isDone: true, coinNum: 4, word: "앉는다" },
    { id: 50, isDone: true, coinNum: 4, word: "탄다" },
    { id: 51, isDone: true, coinNum: 4, word: "파티한다" },
    { id: 52, isDone: true, coinNum: 4, word: "눕는다" },
    { id: 53, isDone: true, coinNum: 4, word: "난다" },
    { id: 54, isDone: true, coinNum: 4, word: "본다" },
    { id: 55, isDone: true, coinNum: 4, word: "신나게" },
    { id: 56, isDone: true, coinNum: 4, word: "편안하게" },
    { id: 57, isDone: true, coinNum: 4, word: "자신있게" },
    { id: 58, isDone: true, coinNum: 4, word: "열심히" },
    { id: 59, isDone: true, coinNum: 4, word: "행복하게" },
  ]; /* 4코인 단어 배열 */

  const [userData, setuserData] = useState(); /* 사용자 데이터 */
  const { data } = useSession(); /* 로그인 세션 */
  const [guestLoginStatus, setGuestLoginStatus] = useState(false);

  const userGetData = async () => {
    const storedUserData = sessionStorage.getItem("userData");

    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      let email;

      if (parsedData?.users?.name === "게스트") {
        email = parsedData?.users?.useremail || null;
      } else {
        email = parsedData?.useremail || null;
      }
      try {
        const extraResponse = await axios.get("/api/buy/userBuy", {
          params: { email: email },
        });

        setuserData(extraResponse.data.users);
      } catch (error) {
        console.error("Error fetching guest user data:", error);
      }
    }
  }; /* 사용자 정보 */

  useEffect(() => {
    const fetchGuestUserData = async () => {
      const storedUserData = sessionStorage.getItem("userData");

      if (storedUserData) {
        const parsedData = JSON.parse(storedUserData);

        let email;

        if (parsedData?.users?.name === "게스트") {
          email = parsedData?.users?.useremail || null;
        } else {
          email = parsedData?.useremail || null;
        }

        try {
          const extraResponse = await axios.get("/api/buy/userBuy", {
            params: { email: email },
          });

          setuserData(extraResponse.data.users);
        } catch (error) {
          console.error("Error fetching guest user data:", error);
        }
      }
    };

    fetchGuestUserData();
  }, [guestLoginStatus]);

  const userBuyData = async (coinTotal, buyWord, wordName) => {
    console.log("userGetData 실행됨!"); // 실행 여부 확인용 로그 추가
    try {
      // 게스트 여부 확인 후 email 할당
      const email =
        userData?.users?.name === "게스트"
          ? userData?.users?.useremail
          : userData?.useremail;

      // 게스트 여부에 따른 코인 차감 로직
      const updatedCoin =
        userData?.users?.name === "게스트"
          ? Math.max(0, userData?.users?.coin - coinTotal)
          : Math.max(0, userData?.coin - coinTotal);

      const response = await axios.put("/api/buy/userBuy", {
        useremail: email, // 올바른 email 값 전달
        updateCoin: updatedCoin, // 코인 차감 처리
        updateWord: buyWord,
        wordName,
      });

      console.log("단어 구매 완료");
      await userGetData();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }; /* 사용자 구매 코인차감, 단어 주기*/

  useEffect(() => {
    userGetData();
  }, [data]); /* DB  */

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
        setGuestLoginStatus,
      }}
    >
      {props.children}
    </buyContext.Provider>
  );
};

export default BuyContextCom;
