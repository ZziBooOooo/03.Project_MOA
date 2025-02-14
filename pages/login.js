import { signIn } from "next-auth/react";
import style from "@/styles/login/login.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { buyContext } from "@/contexts/buy/buyPageContext";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";

export default function LoginPage() {
  const router = useRouter();
  const { handleGuestLogin } = useContext(UserSaveDataContext);

  return (
    <>
      <div className={style.loginBack}>
        <div className={style.loginBox}>
          <motion.div
            className={style.loginAni}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
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
              signIn("google", {
                callbackUrl: "/",
              });
            }}
            className={style.guestBox}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <span className={style.googleBtn}>Google login</span>
          </motion.div>
          <motion.div
            className={style.guestBox}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            onClick={() => handleGuestLogin(router)}
          >
            <span>Guest login</span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
