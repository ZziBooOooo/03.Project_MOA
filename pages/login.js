import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  console.log(session);

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/userSave", {
        name: session?.user?.name,
        email: session?.user?.email,
      });
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const userGetData = async () => {
    try {
      const response = await axios.get("/api/userSave");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }; /* 몽고디비 Buyget */

  useEffect(() => {
    userGetData();
  }, []); /* DB  */

  return (
    <>
      {session ? (
        <div style={{ margin: "500px auto" }}>
          <p>Hello, {session.user.name}!</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <button
          style={{ margin: "500px auto" }}
          onClick={() => {
            signIn("google"), handleSave;
          }}
        >
          Sign in with Google
        </button>
      )}
    </>
  );
}
