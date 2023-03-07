import React, {useEffect, useState } from "react";
import style from "../styles/common.module.css";
import { useRouter} from "next/router";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

const Header = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, {passive:true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = [
    { title: "미션하기", path: "/mission" },
    { title: "구매하기", path: "/buypage" },
    { title: "창작하기", path: "/generate" },
    { title: "마이앨범", path: "/myalbum" },
    { title: "로그인", path: "/login" },
  ];

  const handlePageClick = (index) => {
    if( index === 0) {
      setSelectedPage(0);
      router.push('/');
    }else{
      setSelectedPage(index);
      router.push(pages[index].path);
    }
  };

  const headerStyle = {
    backgroundColor: scrollPosition > 100? "rgba(255, 255, 255, 1)" : "transparent",
    borderBottom: scrollPosition > 100? "1px solid #E2E8EE": "transparent",
    // backdropFilter: scrollPosition > 100? "blur(30px)": "blur(0px)"
  };
  
  return (
    <div className= {style.headerBox} style={headerStyle} >
      <div className = {style.headerContainer}>
        <div className={style.header_leftBox} onClick={() => router.push("/")}>
          {/* <p><img src="@/public/assets/images/logo.png"/></p> */}
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
          <p>MOA</p>
        </div>
        <div className={style.header_rightBox}>
          {pages.map((page, index)=>(
            <p
              key={index}
              className={selectedPage === index ? style.selectedPage : undefined }
              onClick={() => handlePageClick(index)}
            >
            {page.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
