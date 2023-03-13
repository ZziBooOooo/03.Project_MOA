import Banner from "@/components/buy/Banner";
import BuyContent from "@/components/buy/BuyContent";
import CoinCotent2 from "@/components/buy/CoinCotent2";
import CoinCotent3 from "@/components/buy/CoinCotent3";
import CoinCotent4 from "@/components/buy/CoinCotent4";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import BuyContextCom from "@/contexts/buy/buyPageContext";

export default function Buypage() {
  const [currentContent, setCurrentContent] = useState("CoinCotent1");
  const handleContentChange = (content) => {
    setCurrentContent(content);
  };
  return (
    <>
      {" "}
      <BuyContextCom>
        <Banner />
        <AnimatePresence mode="wait">
          {currentContent === "CoinCotent1" && (
            <BuyContent onChange={handleContentChange} />
          )}

          {currentContent === "CoinCotent2" && (
            <CoinCotent2 onChange={handleContentChange} />
          )}

          {currentContent === "CoinCotent3" && (
            <CoinCotent3 onChange={handleContentChange} />
          )}
          {currentContent === "CoinCotent4" && (
            <CoinCotent4 onChange={handleContentChange} />
          )}
        </AnimatePresence>
      </BuyContextCom>
    </>
  );
}
