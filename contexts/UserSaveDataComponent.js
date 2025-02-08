import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { buyContext } from "@/contexts/buy/buyPageContext";

export const UserSaveDataContext = createContext(null);

const UserSaveDataComponent = (props) => {
  const [userSaveData, setuserSaveData] = useState(); /* 사용자 데이터 */

  const { data, status } = useSession();

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
      console.log(dbUser.data.users);
      console.log("db에 이미 있는 유저");
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
      }}
    >
      {props.children}
    </UserSaveDataContext.Provider>
  );
};

export default UserSaveDataComponent;
