import { signIn } from "next-auth/react";
import style from "@/styles/login/login.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <>
      <div className={style.loginBack}>
        <div className={style.loginBox}>
          <motion.div
            className={style.loginAni}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              src="/assets/images/logo.svg"
              alt="로고"
              width={150}
              height={150}
            />
          </motion.div>

          <motion.div
            onClick={() => {
              signIn("google", { callbackUrl: "http://localhost:3000" });
            }}
            className={style.googleBtn}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src="/assets/images/login/btn_google_signin_light_normal_web@2x.png" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
