import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useContext } from "react";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";

export default function LoginPage() {
  const { userSaveData, setuserSaveData } = useContext(UserSaveDataContext);
  // 새로고침해도 데이터유지 -? 로컬이나 세션에도 저장?-?

  const { data, status } = useSession();

  async function saveUserToDB() {
    try {
      const response = await axios.post("/api/buy/userBuy", {
        name: data.user.name,
        email: data.user.email,
        profile: data.user.image,
      });
      setuserSaveData(response.data.users);
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
    // console.log(dbUser);
    if (dbUser.data.status == "exist") {
      console.log(dbUser.data.users);
      console.log("db에 이미 있는 유저");
      setuserSaveData(dbUser.data.users);
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

  console.log(userSaveData);

  return (
    <>
      <p>status: {status}</p>
      {data?.user ? (
        <div style={{ margin: "500px auto" }}>
          <p>Hello,{data?.user?.name}</p>

          {/* <img src={session?.user?.image}></img> */}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <>
          <button
            style={{ margin: "500px auto" }}
            onClick={() => {
              signIn("google");
            }}
          >
            Sign in with Google
          </button>
        </>
      )}
    </>
  );
}
