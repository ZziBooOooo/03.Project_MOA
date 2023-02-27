import React from "react";
import Header from "./Header";
import style from "../styles/main.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <>{children}</>
    </div>
  );
};

export default Layout;
