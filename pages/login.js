import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginPage() {
  const { data, status } = useSession();
  // if (session) {
  //   axios.post("/api/buy/userBuy", {
  //     name: session.user.name,
  //     email: session.user.email,
  //     profil: session.user.image,
  //   });
  // }
  console.log(data);

  async function saveUserToDB() {
    try {
      const response = await axios.post("/api/buy/userBuy", {
        name: data.user.name,
        email: data.user.email,
        profile: data.user.image,
      });
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
      // 존재하지 않으면 DB에 유저정보 저장
      console.log("db에 이미 있는 유저");
    } else if (dbUser.data.status == "noExist") {
      console.log("존재하지 않는 유조 -> db에 저장시키기");
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
