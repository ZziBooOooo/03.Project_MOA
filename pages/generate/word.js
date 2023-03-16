import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import w_style from "@/styles/generate/word.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";
import { wordCountContext } from "@/contexts/generate/wordCountContext";
import { userWordContext } from "@/contexts/generate/userWordContext";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";

const Word = () => {
  const [count, setCount] = useState(0);
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");

  const [postPosition1, setPostPosition1] = useState("");
  const [postPosition2, setPostPosition2] = useState("");
  const [postPosition3, setPostPosition3] = useState("");

  const [selected, setSelected] = useState("");
  const [saveSelected, setSaveSelected] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [activeBtnClass, setActiveBtnClass] = useState(false);

  // ** 나중에 현재 로그인한 유저의 id 값으로 변경해야한다.

  const { wordCount, setWordCount } = useContext(wordCountContext);
  const { userWords, setUserWords } = useContext(userWordContext);
  const { userSentence, setUserSentence } = useContext(userSentenceContext);


  


  const { data } = useSession(); /* 로그인 세션 */
  const router = useRouter();

  // 페이지 접속할때마다 데이터 받아오게 해야함
  async function getUserDatas() {
    // *** 새로고침하면 session을 바로 못받아온다.
    // 로그인성공하면 세션스토리지에 저장하고 받아온다
    const parsedUserEmail =
      typeof window !== "undefined" && window.sessionStorage.getItem("userData")
        ? JSON.parse(window.sessionStorage.getItem("userData")).useremail ||
          null
        : null;
    // console.log(parsedUserEmail);
    try {
      const response1 = await axios.get("/api/buy/userBuy", {
        params: { email: parsedUserEmail },
      });

      const response2 = await axios
        .get("/api/generate/wordcontroll", {
          params: {
            currentUserEmail: response1.data.users.useremail,
          },
        })
        .then((res) => {
          // console.log(res.data);
          const UserWord_DB = res.data;
          const userWordArr = Object.values(UserWord_DB).flat();
          if (userWordArr) {
            setUserWords(userWordArr);
          }
        });
      // handle response2
    } catch (error) {
      console.error(error);
    }
  }
  // 유저의 단어목록을 받아오는 함수
  // 코인개수별로 나눠진 데이터를 한개의 배열로 합쳤다.

  // index.js에서 선택한 단어의 개수를 state에 저장한다. -> 조건에 따라 화면 렌더링이 다르기 때문
  useEffect(() => {
    setWordCount(wordCount);
    const s_wordCount =
      typeof window !== "undefined" && window.sessionStorage.getItem("userData")
        ? sessionStorage.getItem("wordCount")
        : null;
    setWordCount(s_wordCount);
    getUserDatas();
    // getUserWords();
  }, []);

  // imgType페이지로 이동
  const goTypePage = () => {
    router.push("/generate/imgType", undefined, { scroll: false });
  };

  // 단어 누르면 문장박스에 출력하도록 하는 함수
  // count state를 만들어 단어의 순서를 관리한다.

  // wordCount에 따라 카운트개수 변경
  function makeSentence(e) {
    if (wordCount == 2) {
      if (count == 0) {
        setWord1(e.target.id);
      } else if (count == 1) {
        setWord4(e.target.id);
        setActiveBtnClass(true);
      }
      setCount(count + 1);
    }

    if (wordCount == 3) {
      if (count == 0) {
        setWord1(e.target.id);
      } else if (count == 1) {
        setWord2(e.target.id);
      } else if (count == 2) {
        setWord4(e.target.id);
        setActiveBtnClass(true);
      }
      setCount(count + 1);
    }

    if (wordCount == 4) {
      if (count == 0) {
        setWord1(e.target.id);
      } else if (count == 1) {
        setWord2(e.target.id);
      } else if (count == 2) {
        setWord3(e.target.id);
      } else if (count == 3) {
        setWord4(e.target.id);
        setActiveBtnClass(true);
      }
      setCount(count + 1);
    }
  }
  // 유저가 선택한 단어를 state에 저장
  function addSelectedClass(selectWord) {
    setSelected(selectWord);
  }

  // 저장된 state를 바탕으로 배열을 만들고 이를 활용해 선택했던 버튼의 클릭을 유지시킨다.
  function saveSelectedClass(selectWord) {
    if (wordCount == 2) {
      if (saveSelected.length < 2) {
        setSaveSelected([...saveSelected, selectWord]);
      }
    } else if (wordCount == 3) {
      if (saveSelected.length < 3) {
        setSaveSelected([...saveSelected, selectWord]);
      }
    } else if (wordCount == 4) {
      if (saveSelected.length < 4) {
        setSaveSelected([...saveSelected, selectWord]);
      }
    }
  }

  // 조사버튼 누르면 누른값으로 조사 변경
  function selectPostPosition1(e) {
    setPostPosition1(e.target.innerText);
  }
  function selectPostPosition2(e) {
    setPostPosition2(e.target.innerText);
  }
  function selectPostPosition3(e) {
    setPostPosition3(e.target.innerText);
  }

  function deleteSentence() {
    setCount(0);
    setWord1("");
    setWord2("");
    setWord3("");
    setWord4("");
    setPostPosition1("");
    setPostPosition2("");
    setPostPosition3("");
    setSaveSelected([]);
    setActiveBtnClass(false);
  }

  function nextPage() {
    if (currentPage < Math.ceil(userWords.length / wordsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  // 빈 단어 없이 단어선택이 완료되면 페이지 이동
  function checkWordCount() {
    if (wordCount == 2) {
      if (word1 === "" || word4 === "") {
        alert("단어 2개를 모두 선택해주세요");
      } else {
        goTypePage();
        setUserSentence(`${word1}${postPosition1} ${word4}`);
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? sessionStorage.setItem(
              "sentence",
              `${word1}${postPosition1} ${word4}`
            )
          : null;
      }
    } else if (wordCount == 3) {
      if (word1 === "" || word2 === "" || word4 === "") {
        alert("단어 3개를 모두 선택해주세요");
      } else {
        goTypePage();
        setUserSentence(
          `${word1}${postPosition1} ${word2}${postPosition2} ${word4}`
        );
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? sessionStorage.setItem(
              "sentence",
              `${word1}${postPosition1} ${word2}${postPosition2} ${word4}`
            )
          : null;
      }
    } else if (wordCount == 4) {
      if (word1 === "" || word2 === "" || word3 === "" || word4 === "") {
        alert("단어 4개를 모두 선택해주세요");
      } else {
        goTypePage();
        setUserSentence(
          `${word1}${postPosition1} ${word2}${postPosition2} ${word3}${postPosition3} ${word4}`
        );
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? sessionStorage.setItem(
              "sentence",
              `${word1}${postPosition1} ${word2}${postPosition2} ${word3}${postPosition3} ${word4}`
            )
          : null;
      }
    }
  }

  const wordsPerPage = 20;
  const startIndex = currentPage * wordsPerPage;
  const endIndex = startIndex + wordsPerPage;
  const currentWords = userWords.slice(startIndex, endIndex);

  return (
    <div className={style.fullBox}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={style.bottomMainBox}>
          <div className={style.b_fullTextBox}>
            <div className={style.b_textBox}>
              <p className={style.checkIWrap}>
                <Image
                  src="/assets/images/generate/check.png"
                  alt="checkIcon"
                  width={35}
                  height={35}
                />
              </p>
              <p className={style.mainText}>단어를 선택해주세요</p>
            </div>

            <p className={w_style.subText}>
              문장이 자연스러울수록 좋은 결과를 얻을 수 있어요
            </p>
          </div>

          <div className={w_style.selectBox}>
            <AnimatePresence>
              <motion.div
                className={
                  wordCount && wordCount == 2
                    ? `${w_style.sentenceBox} ${w_style.word2Box}`
                    : wordCount == 3
                    ? `${w_style.sentenceBox} ${w_style.word3Box}`
                    : `${w_style.sentenceBox} ${w_style.word4Box}`
                }
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={w_style.sentenceWrap}>
                  <div className={w_style.fisrtWord}>
                    <p>{word1}</p>
                    <p>{postPosition1}</p>
                    <div className={w_style.dropdown}>
                      <button className={w_style.dropbtn}>
                        <Image
                          src="/assets/images/generate/down.png"
                          alt="downIcon"
                          width={16}
                          height={16}
                        />
                      </button>
                      <div
                        className={w_style.dropdown_content}
                        onClick={(e) => selectPostPosition1(e)}
                      >
                        <p>은</p>
                        <p>는</p>
                        <p>이</p>
                        <p>가</p>
                        <p>와</p>
                        <p>과</p>
                      </div>
                    </div>
                  </div>

                  {(wordCount && wordCount == 3) || wordCount == 4 ? (
                    <div className={w_style.secondWord}>
                      <p>{word2}</p>
                      <p>{postPosition2}</p>
                      <div className={w_style.dropdown}>
                        <button className={w_style.dropbtn}>
                          <Image
                            src="/assets/images/generate/down.png"
                            alt="downIcon"
                            width={16}
                            height={16}
                          />
                        </button>
                        <div
                          className={w_style.dropdown_content}
                          onClick={(e) => selectPostPosition2(e)}
                        >
                          <p>을</p>
                          <p>를</p>
                          <p>와</p>
                          <p>과</p>
                          <p>에서</p>
                          <p>로</p>
                          <p>으로</p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {wordCount && wordCount == 4 ? (
                    <div className={w_style.thirdWord}>
                      <p>{word3}</p>
                      <p>{postPosition3}</p>
                      <div className={w_style.dropdown}>
                        <button className={w_style.dropbtn}>
                          <Image
                            src="/assets/images/generate/down.png"
                            alt="downIcon"
                            width={16}
                            height={16}
                          />
                        </button>
                        <div
                          className={w_style.dropdown_content}
                          onClick={(e) => selectPostPosition3(e)}
                        >
                          <p>에서</p>
                          <p>으로</p>
                          <p>로</p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className={w_style.fourthWord}>
                    <p>{word4}</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faDeleteLeft} onClick={deleteSentence} />
              </motion.div>
            </AnimatePresence>
            <div className={w_style.wordBox}>
              <div className={w_style.refreshBtnBox}>
                <button
                  onClick={prevPage}
                  className={currentPage == 0 ? `${w_style.disableBtn}` : ""}
                >
                  ←
                </button>
                <button
                  onClick={nextPage}
                  className={currentPage == 2 ? `${w_style.disableBtn}` : ""}
                >
                  {" "}
                  →{" "}
                </button>
              </div>
              <AnimatePresence>
                {currentWords &&
                  currentWords.map((word, key) => {
                    const isSelected =
                      selected === key || saveSelected.includes(word.word);
                    return (
                      <motion.div
                        key={key}
                        className={`${w_style.wordBtn} ${
                          isSelected ? w_style.selected : ""
                        }`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * key }}
                        id={word.word}
                        onClick={(e) => {
                          makeSentence(e);
                          addSelectedClass(word.word);
                          saveSelectedClass(word.word);
                        }}
                      >
                        <p
                          id={word.word}
                          onClick={(e) => {
                            makeSentence(e);
                            addSelectedClass(word.word);
                            saveSelectedClass(word.word);
                          }}
                        >
                          {word.word}
                        </p>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </div>

            <div className={w_style.completeBtnBox}>
              <p></p>
              <button
                onClick={() => {
                  checkWordCount();
                }}
                className={activeBtnClass ? `${w_style.activeBtn}` : ""}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word;
