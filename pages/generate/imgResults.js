import React, { useContext, useEffect, useState } from "react";
import style from "@/styles/generate/generate.module.scss";
import r_style from "@/styles/generate/results.module.scss";
import Image from "next/image";
import axios from "axios";
import GenerateTop from "@/components/generate/GenerateTop";
import { userSentenceContext } from "@/contexts/generate/userSentenceContext";

const ImgResults = () => {
  const currentUserId = 1;
  const [prompt, setPrompt] = useState(null);
  const [enPrompt, setEnPrompt] = useState(null);
  const [number, setNumber] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState(
    "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"
  );

  const { userSentence, setUserSentence } = useContext(userSentenceContext);

  // 번역요청 - 파파고 api
  async function translateKoreanToEnglish(koreanText) {
    console.log(koreanText);
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
      console.log(translatedText);
      return translatedText;
    } catch (error) {
      console.error(error);
    }
  }

  // 이미지 생성요청 -> 전에 번역함수 먼저실행
  async function generateImages() {
    // console.log(token);
    console.log(prompt);
    if (token != "" && prompt != "") {
      setError(false);
      setLoading(true);
      const translatedText = await translateKoreanToEnglish(prompt);
      console.log(translatedText);
      axios
        .post(`/api/generate/images?t=${token}&p=${translatedText}&n=${number}`)
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

  async function saveImage(url) {
    try {
      const response = await axios.post("/api/generate/saveimage", {
        url,
        currentUserId: currentUserId,
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

  return (
    <div className={`${style.fullBox} ${r_style.fullBox}`}>
      <GenerateTop />
      <div className={r_style.bottomBox}>
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
        {loading && loading ? null : <p>마음에 드는 이미지를 선택해주세요</p>}

        <div className={r_style.imgBox}>
          {results.map((result) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgResults;
