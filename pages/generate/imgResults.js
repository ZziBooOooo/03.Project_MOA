import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";
import axios from "axios";
import GenerateTop from "@/components/generate/GenerateTop";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";
import { selectTypeContext } from "@/contexts/generate/selectTypeContext";
import { selectStyleContext } from "@/contexts/generate/selectStyleContext";
import { motion, AnimatePresence } from "framer-motion";
import SaveModal from "@/components/generate/SaveModal";

const ImgResults = () => {
  const currentUserId = 1;
  const [prompt, setPrompt] = useState(null);
  const [enPrompt, setEnPrompt] = useState(null);
  const [number, setNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [darkOpaBg, setDarkOpaBg] = useState(false);

  const { userSentence, setUserSentence } = useContext(userSentenceContext);
  const { imgType } = useContext(selectTypeContext);
  const { imgStyle } = useContext(selectStyleContext);

  // ** 모달창 뜨면 스크롤로 화면중앙이동 + 스크롤 잠시 막기

  // 번역요청 - 파파고 api
  async function translateKoreanToEnglish(koreanText) {
    // console.log(koreanText);
    // const params = {
    //   source: "ko",
    //   target: "en",
    //   text: koreanText,
    // };
    // try {
    //   const res = await axios.post("/api/generate/translate", params);
    //   const translatedText = res.data.translatedText;
    //   setEnPrompt(translatedText);
    //   // setPrompt(translatedText);
    //   console.log(translatedText);
    //   return translatedText;
    // } catch (error) {
    //   console.error(error);
    // }
  }

  // 이미지 생성요청 -> 전에 번역함수 먼저실행
  async function generateImages() {
    // console.log(token);
    console.log(prompt);
    // if (prompt != "") {
    //   setError(false);
    //   setLoading(true);
    //   const translatedText = await translateKoreanToEnglish(prompt);
    //   console.log(translatedText);
    //   axios
    //     .post(`/api/generate/images?&p=${translatedText}&n=${number}`)
    //     .then(async (res) => {
    //       setResults(res.data.result);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       setError(true);
    //     });
    // } else {
    //   setError(true);
    // }
  }

  async function saveImage(url) {
    let fullUserSentenceKR = prompt;
    const regex = /(?<=^[^,]+,)[^,]+(?=,[^,]+$)/g;
    const UserSentenceKR = fullUserSentenceKR.match(regex);
    try {
      const response = await axios.post("/api/generate/saveimage", {
        currentUserId: currentUserId,
        title: UserSentenceKR[0],
        type: imgType,
        style: imgStyle,
        url,
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // propmt는 번역, 이미지 생성시에 사용됨
  useEffect(() => {
    console.log(results);
    if (prompt) {
      generateImages();
    } else {
      setPrompt(userSentence);
    }
  }, [prompt]);

  function openModal() {
    setDarkOpaBg(true);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={`${style.fullBox} ${r_style.fullBox}`}>
      <div
        className={
          darkOpaBg ? `${r_style.darkBg} ${r_style.bgOn}` : `${r_style.darkBg}`
        }
      >
        <GenerateTop />
        <div className={r_style.bottomBox}>
          {/* <div
        className={
          darkOpaBg
            ? `${r_style.bottomBox} ${r_style.bgOn}`
            : `${r_style.bottomBox}`
        }
      > */}
          {error ? (
            <div className="error">
              문제가 발생했습니다. 다음에 다시 시도해주세요.
            </div>
          ) : (
            <></>
          )}
          {loading && (
            <div className={r_style.loadBox}>
              <p className={r_style.textLoader}>로딩중</p>
              <span className={r_style.loader}></span>
              <p>잠시만 기다려 주세요</p>
            </div>
          )}

          <div className={r_style.imgBox}>
            {/* {results.map((result) => {
            return (
              <div className="card" key={new Date()}>
                <img
                  className="imgPreview"
                  src={result.url}
                  alt="ai-result-image"
                  onClick={() => saveImage(result.url)}
                />
              </div>
            );
          })} */}
            <div className={r_style.card} key="1">
              <img
                className="imgPreview"
                src="/assets/images/generate/check.png"
                alt="ai-result-image"
                onClick={() => {
                  // saveImage(result.url);
                  openModal();
                }}
              />
            </div>
            <div className={r_style.card} key="2">
              <img
                className="imgPreview"
                src="/assets/images/generate/check.png"
                alt="ai-result-image"
                onClick={() => {
                  // saveImage(result.url);
                  openModal();
                }}
              />
            </div>
            <div className={r_style.card} key="3">
              <img
                className="imgPreview"
                src="/assets/images/generate/check.png"
                alt="ai-result-image"
                onClick={() => {
                  // saveImage(result.url);
                  openModal();
                }}
              />
            </div>
          </div>
          <AnimatePresence>
            {showModal && (
              <SaveModal closeModal={closeModal} setDarkOpaBg={setDarkOpaBg} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ImgResults;
