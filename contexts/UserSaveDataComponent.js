import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { buyContext } from "@/contexts/buy/buyPageContext";

export const UserSaveDataContext = createContext(null);

const UserSaveDataComponent = (props) => {
  const [userSaveData, setuserSaveData] = useState(); /* 사용자 데이터 */
  const [isGuest, setIsGuest] = useState(false); // 게스트 로그인 여부
  const { data, status } = useSession();

  async function handleGuestLogin(router) {
    console.log("실행");
    try {
      const response = await axios.get("/api/buy/userBuy", {
        params: { email: "projectmoatest@gmail.com" }, // 테스트 계정
      });

      setuserSaveData(response.data.users);
      setIsGuest(true); // 게스트 로그인 상태 변경
      sessionStorage.setItem("userData", JSON.stringify(response.data.users));

      console.log("게스트 로그인 성공:", response.data.users);

      setTimeout(() => {
        router.push("/");
      }, 300);
    } catch (error) {
      console.error("게스트 로그인 실패:", error);
    }
  }

  async function saveUserToDB() {
    try {
      const response = await axios.post("/api/buy/userBuy", {
        name: data.user.name,
        email: data.user.email,
        profile: data.user.image,
      });
      setuserSaveData(response.data.users);
      sessionStorage.setItem("userData", JSON.stringify(dbUser.data.users));
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserData() {
    const dbUser = await axios.get("/api/buy/userBuy", {
      params: {
        email: data.user.email,
      },
    });
    if (dbUser.data.status == "exist") {
      console.log("db 존재 회원", dbUser.data.users);
      setuserSaveData(dbUser.data.users);
      sessionStorage.setItem("userData", JSON.stringify(dbUser.data.users));
    } else if (dbUser.data.status == "noExist") {
      console.log("존재하지 않는 유저 ");
      saveUserToDB();
    }
  }
  useEffect(() => {
    if (data !== undefined && data !== null) {
      // 데이터 비어있지 않으면 (=로그인성공) -> context에 저장시키기
      // db에 유저 저장시키기
      getUserData();
    }
  }, [data]);

  return (
    <UserSaveDataContext.Provider
      value={{
        userSaveData,
        setuserSaveData,
        isGuest,
        handleGuestLogin,
      }}
    >
      {props.children}
    </UserSaveDataContext.Provider>
  );
};

export default UserSaveDataComponent;
