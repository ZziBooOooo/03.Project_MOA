import React, { useContext, useEffect, useState } from "react";
import style from "../styles/common.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";

import { buyContext } from "@/contexts/buy/buyPageContext";
import { signOut } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const { userData } = useContext(buyContext);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    console.log(userData);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = [
    { title: "미션하기", path: "/mission" },
    { title: "구매하기", path: "/buypage" },
    { title: "만들기", path: "/generate" },
    { title: "앨범", path: "/myalbum" },
    { title: "좋아요", path: "/generate/others" },
  ];

  const handlePageClick = (index) => {
    setSelectedPage(index);
    router.push(pages[index].path);
  };

  const headerStyle = {
    backgroundColor:
      scrollPosition > 100 ? "rgba(255, 255, 255)" : "transparent",
    borderBottom: scrollPosition > 100 ? "1px solid #E2E8EE" : "transparent",
    backdropFilter: scrollPosition > 100 ? "blur(30px)" : "blur(0px)",
  };

  return (
    <div className={style.headerBox} style={headerStyle}>
      <div className={style.headerContainer}>
        <div className={style.header_leftBox} onClick={() => router.push("/")}>
          {/* <p><img src="@/public/assets/images/logo.png"/></p> */}
          <Image
            src={logo}
            alt="Logo"
            width={30}
            height={30}
            style={{ marginRight: "10px", transform: "rotate(70deg)" }}
          />
          <p>MOA</p>
        </div>
        <div className={style.header_rightBox}>
          {pages.map((page, index) => (
            <p
              key={index}
              className={
                selectedPage === index ? style.selectedPage : undefined
              }
              onClick={() => handlePageClick(index)}
            >
              {page.title}
            </p>
          ))}
          {userData ? (
            <p>
              <Image
                onClick={() => signOut()}
                src={userData.profile}
                width={33}
                height={33}
                alt="프로필"
                unoptimized={true}
                style={{ borderRadius: "50%" }}
              />
            </p>
          ) : (
            <p onClick={() => router.push("/login")}>로그인</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
