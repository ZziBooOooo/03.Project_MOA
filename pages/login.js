import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useContext } from "react";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";
import style from "@/styles/login/login.module.scss";
import Image from "next/image";

export default function LoginPage() {
  const { userSaveData, setuserSaveData } = useContext(UserSaveDataContext);

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
              signIn("google");
            }}
          >
            <img src="/assets/images/login/btn_google_signin_light_normal_web@2x.png" />
          </div>
        </div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          일단 여기 로그아웃
        </button>
      </div>
    </>
  );
}
