import { signIn } from "next-auth/react";
import style from "@/styles/login/login.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";

export default function LoginPage() {
  useEffect(() => {
    axios
      .get("/api/mission/missionCount")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={style.loginBack}>
        <div className={style.loginBox}>
          <Image
            src="/assets/images/logo.svg"
            alt="로고"
            width={150}
            height={150}
          />
          <div
            className={style.googleBtn}
            onClick={() => {
              signIn("google", { callbackUrl: "http://localhost:3000" });
            }}
          >
            <img src="/assets/images/login/btn_google_signin_light_normal_web@2x.png" />
          </div>
        </div>
      </div>
    </>
  );
}
