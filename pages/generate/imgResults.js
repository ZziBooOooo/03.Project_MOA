import React, { useContext, useEffect, useState, useRef } from "react";
import style from "@/styles/generate/generate.module.scss";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import GenerateTop from "@/components/generate/GenerateTop";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";
import { selectTypeContext } from "@/contexts/generate/selectTypeContext";
import { selectStyleContext } from "@/contexts/generate/selectStyleContext";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";
import { motion, AnimatePresence } from "framer-motion";
import SaveModal from "@/components/generate/SaveModal";
import Loading from "@/components/generate/Loading";

const ImgResults = () => {
  const [prompt, setPrompt] = useState(null);
  const [enPrompt, setEnPrompt] = useState(null);
  const [number, setNumber] = useState(3);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const bottomBoxRef = useRef();
  const router = useRouter();

  const { userSaveData } = useContext(UserSaveDataContext);
  const { userSentence, setUserSentence } = useContext(userSentenceContext);
  const { imgType } = useContext(selectTypeContext);
  const { imgStyle } = useContext(selectStyleContext);

  // const currentUserEmail = userSaveData.useremail;

  // 번역요청 - 파파고 api
  async function translateKoreanToEnglish(koreanText) {
    // console.log(koreanText);
    const params = {
      source: "ko",
      target: "en",
      text: koreanText,
    };
    try {
      const res = await axios.post("/api/generate/translate", params);
      const translatedText = res.data.translatedText;
      setEnPrompt(translatedText);
      // setPrompt(translatedText);
      // console.log(translatedText);
      return translatedText;
    } catch (error) {
      console.error(error);
    }
  }

  // 이미지 생성요청 -> 번역함수 먼저실행
  async function generateImages() {
    const currentUserEmail =
      typeof window !== "undefined" && window.sessionStorage.getItem("userData")
        ? JSON.parse(window.sessionStorage.getItem("userData")).useremail ||
          null
        : null;
    // console.log(token);
    // console.log(prompt);
    if (prompt != "") {
      setError(false);
      setLoading(true);
      const translatedText = await translateKoreanToEnglish(prompt);
      console.log(translatedText);
      let fullUserSentenceKR = prompt;
      // const regex = /(?<=^[^,]+,)[^,]+(?=,[^,]+$)/g;
      // const UserSentenceKR = fullUserSentenceKR.match(regex);
      axios
        .post("/api/generate/images", {
          p: translatedText,
          currentUserEmail,
          title: fullUserSentenceKR,
          type: imgType,
          style: imgStyle,
        })
        .then(async (res) => {
          setResults(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  }

  // context에 유저의 선택값(문장,스타일,타입)을 한번에 묶어놔서
  // db저장용 문장은 스타일과 타입을 제외하기 위해 정규식 사용
  async function saveImage(url) {
    const currentUserEmail =
      typeof window !== "undefined" && window.sessionStorage.getItem("userData")
        ? JSON.parse(window.sessionStorage.getItem("userData")).useremail ||
          null
        : null;
    let fullUserSentenceKR = prompt;
    const regex = /(?<=^[^,]+,)[^,]+(?=,[^,]+$)/g;
    const UserSentenceKR = fullUserSentenceKR.match(regex);
    const imgId = new Date().getTime();
    try {
      const response = await axios.post("/api/generate/saveimage", {
        currentUserEmail,
        title: UserSentenceKR[0],
        type: imgType,
        style: imgStyle,
        url,
        imgId,
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
    // console.log(results);
    if (prompt) {
      generateImages();
    } else {
      // setPrompt(userSentence);

      const type =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? window.sessionStorage.getItem("type")
          : null;
      const sentence =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? window.sessionStorage.getItem("sentence")
          : null;
      const style =
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("userData")
          ? window.sessionStorage.getItem("style")
          : null;
      const userSentence = `${style},${sentence},${type}`;

      setPrompt(userSentence);
    }
  }, [prompt]);

  function openModal(url) {
    setShowModal(true);
    saveImage(url);

    const bottomBoxTop = bottomBoxRef.current.offsetTop;
    window.scrollTo({ left: 0, top: bottomBoxTop, behavior: "smooth" });
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
    setTimeout(() => {
      router.push("/myalbum");
    }, 2200);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={`${style.fullBox} ${r_style.fullBox}`}>
      <GenerateTop />
      <div className={r_style.bottomBox} ref={bottomBoxRef}>
        {error ? (
          <div className="error">
            문제가 발생했습니다. 다음에 다시 시도해주세요.
          </div>
        ) : (
          <></>
        )}
        {loading && <Loading />}

        {loading == 0 && error == 0 ? (
          <>
            <div className={r_style.textBox}>
              <div className={r_style.firstTextBox}>
                <Image
                  src="/assets/images/generate/check.png"
                  alt="checkIcon"
                  width={45}
                  height={45}
                />
                <p>마음에 드는 이미지를 선택해주세요</p>
              </div>
              <p>저장한 이미지는 앨범에서 볼 수 있어요</p>
            </div>
            <div className={r_style.imgBox}>
              {results.map((result) => {
                return (
                  <div className={r_style.card} key={result.url}>
                    <img
                      src={result.url}
                      alt="ai-result-image"
                      onClick={() => openModal(result.url)}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}

        <AnimatePresence>
          {showModal && (
            <SaveModal closeModal={closeModal} openModal={openModal} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImgResults;
