import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../styles/common.module.css";
import { useRouter } from "next/router";
import BuyContextCom from "@/contexts/buy/buyPageContext";

const Layout = ({ children }) => {
  const router = useRouter();
  const footerOut = router.pathname !== "/mission/missionModal";

  return (
    <BuyContextCom>
      <div className={style.layout}>
        <Header />
        <>{children}</>
        {footerOut && <Footer />}
      </div>
    </BuyContextCom>
  );
};

export default Layout;
