import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../styles/common.module.css";
import {useRouter} from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const footerOut = router.pathname !== "/mission/missionModal";

  return (
    <div className={style.layout}>
      <Header />
      <>{children}</>
      {footerOut && <Footer />}
    </div>
  );
};

export default Layout;
