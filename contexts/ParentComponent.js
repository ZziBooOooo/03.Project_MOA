import React, { useState } from "react";
import { wordCountContext } from "./generate/wordCountContext";
import { userWordContext } from "./generate/userWordContext";
import { userSentenceContext } from "./generate/userSentenceContext";
import { selectTypeContext } from "./generate/selectTypeContext";
import { selectStyleContext } from "./generate/selectStyleContext";

const ParentComponent = ({ children }) => {
  const [wordCount, setWordCount] = useState(null);
  const [userWords, setUserWords] = useState("");
  const [userSentence, setUserSentence] = useState("");
  const [imgType, setImgType] = useState("");
  const [imgStyle, setImgStyle] = useState("");
  const [userCoin, setUserCoin] = useState(null);
  const [userWord, setUserWord] = useState(null);

  return (
    <selectStyleContext.Provider value={{ imgStyle, setImgStyle }}>
      <selectTypeContext.Provider value={{ imgType, setImgType }}>
        <userSentenceContext.Provider value={{ userSentence, setUserSentence }}>
          <userWordContext.Provider value={{ userWords, setUserWords }}>
            <wordCountContext.Provider value={{ wordCount, setWordCount }}>
              {children}
            </wordCountContext.Provider>
          </userWordContext.Provider>
        </userSentenceContext.Provider>
      </selectTypeContext.Provider>
    </selectStyleContext.Provider>
  );
};

export default ParentComponent;
