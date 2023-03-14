import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export const UserSaveDataContext = createContext(null); /* 이거 불러서 쓰세요 */

const UserSaveDataComponent = (props) => {
  const [userSaveData, setuserSaveData] = useState(); /* 사용자 데이터 */
  // const { data: session } = useSession(); /* 로그인 세션 */

  // const userGetData = async () => {
  //   try {
  //     const response = await axios
  //       .get("/api/buy/userBuy", {
  //         params: { email: session.user.email },
  //       })
  //       .then((res) => setuserSaveData(res.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }; /* 사용자 정보 */

  // useEffect(() => {
  //   userGetData();
  // }, [session]); /* DB  */

  return (
    <UserSaveDataContext.Provider
      value={{
        userSaveData,
        setuserSaveData,
      }}
    >
      {props.children}
    </UserSaveDataContext.Provider>
    /* 이거 불러서 쓰세요 */
  );
};

export default UserSaveDataComponent;
