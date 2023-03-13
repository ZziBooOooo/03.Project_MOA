import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    axios.post("/api/buy/userBuy", {
      name: session.user.name,
      email: session.user.email,
      profil: session.user.image,
    });
  }

  useEffect(() => {}, [session]);

  return (
    <>
      {session ? (
        <div style={{ margin: "500px auto" }}>
          <p>Hello, {session.user.name}!</p>
          <img src={session?.user?.image}></img>
          <button
            onClick={() =>
              signOut({ callbackUrl: "http://localhost:3000/foo" })
            }
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          style={{ margin: "500px auto" }}
          onClick={() =>
            signIn("googole", { callbackUrl: "http://localhost:3000" })
          }
        >
          Sign in with Google
        </button>
      )}
    </>
  );
}
