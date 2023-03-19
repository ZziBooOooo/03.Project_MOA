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
  const [selectedPage, setSelectedPage] = useState(null);
  const { userData } = useContext(buyContext);

  const userCoin =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? window.sessionStorage.getItem("totalCoinCount") || null
      : null;

  const userWord =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? window.sessionStorage.getItem("totalWordCount") || null
      : null;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

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
    if (userData) {
      router.push(pages[index].path);
    } else {
      router.push("/login");
    }
  };

  function resetSelectPage() {
    setSelectedPage(null);
  }

  const headerStyle = {
    backgroundColor:
      scrollPosition > 100 ? "rgba(255, 255, 255)" : "transparent",
    borderBottom: scrollPosition > 100 ? "1px solid #E2E8EE" : "transparent",
  };

  return (
    <div className={style.headerBox} style={headerStyle}>
      <div className={style.headerContainer}>
        <div
          className={style.header_leftBox}
          onClick={() => {
            router.push("/");
            resetSelectPage();
          }}
        >
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
            <>
              <div className={style.profileWrap}>
                <Image
                  src={userData.profile}
                  width={36}
                  height={36}
                  alt="프로필 이미지"
                  className={style.profileImg}
                  unoptimized={true}
                  style={{ borderRadius: "50%" }}
                />
                <div className={style.myInfoDiv}>
                  <div>
                    <p>
                      <Image
                        src={"/assets/images/main/user.png"}
                        alt="유저 아이콘 이미지"
                        width={24}
                        height={24}
                      />
                    </p>
                    <p>{userData.name}</p>
                  </div>
                  <div>
                    <p>
                      <Image
                        src={"/assets/images/main/cent.png"}
                        alt="동전 이미지"
                        width={24}
                        height={24}
                      />
                    </p>
                    <p>{userCoin ? userCoin : userData.coin}개</p>
                  </div>
                  <div>
                    <p>
                      <Image
                        src={"/assets/images/main/book.png"}
                        alt="책 이미지"
                        width={24}
                        height={24}
                      />
                    </p>
                    <p>
                      {userWord
                        ? userWord
                        : userData.words.WordCoin2.length +
                          userData.words.WordCoin3.length +
                          userData.words.WordCoin4.length}
                      개
                    </p>
                  </div>
                  <hr />
                  <div
                    onClick={() =>
                      signOut({ callbackUrl: "http://localhost:3000/login" })
                    }
                  >
                    <p>
                      <Image
                        src={"/assets/images/main/out.png"}
                        alt="로그아웃 아이콘 "
                        width={24}
                        height={24}
                      />
                    </p>
                    <p>로그아웃</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p
              onClick={() => router.push("/login")}
              className={style.mobileShow}
            >
              로그인
            </p>
          )}
        </div>
      </div>
      <div className={style.mobileMenu}>
        <div>
          <p
            onClick={() => {
              router.push("/mission");
            }}
          >
            미션하기
          </p>
          <p
            onClick={() => {
              router.push("/buypage");
            }}
          >
            구매하기
          </p>
          <p
            onClick={() => {
              router.push("/generate");
            }}
          >
            만들기
          </p>
          <p
            onClick={() => {
              router.push("/myalbum");
            }}
          >
            앨범
          </p>
          <p
            onClick={() => {
              router.push("/generate/others");
            }}
          >
            좋아요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
