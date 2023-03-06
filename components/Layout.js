import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../styles/common.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
