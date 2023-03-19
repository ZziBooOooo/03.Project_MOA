import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios, { all } from "axios";
import ImageAndLikeBtn from "@/components/generate/ImageAndLikeBtn";
import SmallImgAndLikeBtn from "@/components/generate/SmallImgAndLikeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import TypeChart from "@/components/generate/TypeChart";
import StyleChart from "@/components/generate/StyleChart";
import { AnimatePresence, motion } from "framer-motion";

const Others = () => {
  const imgUrlArr = [
    "/assets/images/generate/money.png",
    "/assets/images/generate/fillheart.png",
    "/assets/images/generate/gallery.png",
  ];

  const [userDatas, setUserDatas] = useState([]);
  const [top3Data, setTop3Data] = useState([]);
  const [randomData, setRandomData] = useState([]);

  function mergeImgUrlArray() {
    // const copyUserData = JSON.parse(JSON.stringify(userDatas));
    const allImgArr = [];

    // 이미지 저장할때 사용자 이름도 같이 저장하면 이거 빼기
    userDatas &&
      userDatas.map((data) => {
        const imgUrl = data.imgUrl;
        imgUrl.forEach((item) => (item.name = data.name));
      });

    userDatas &&
      userDatas.forEach((obj) => {
        const imgArr = obj.imgUrl;
        allImgArr.push(...imgArr);
      });

    return allImgArr;
  }

  function getRandomImgFromArray(arr, n) {
    const result = [];
    while (result.length < 8 && arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    return result;
  }

  function getRandomImg() {
    const allImgArr = mergeImgUrlArray();

    const allImgCount = allImgArr.length;
    const randomImgArr = getRandomImgFromArray(allImgArr, allImgCount);
    setRandomData(randomImgArr);
  }
  async function fillterTopImg() {
    // userDatas에서 가장 많은 하트 개수의 이미지 객체를 한 배열에 담는다
    const sortedUserDatas =
      userDatas &&
      userDatas.map((data, key) => {
        const imgUrls = data.imgUrl;
        const sortedImgUrls = imgUrls.sort((a, b) => b.like - a.like);
        return { ...data, imgUrl: sortedImgUrls };
      });

    const sortedLikes = sortedUserDatas
      .flatMap((data) => data.imgUrl.slice(0, 3))
      .sort((a, b) => b.like - a.like)
      .slice(0, 3);

    if (sortedLikes.length >= 2) {
      [sortedLikes[0], sortedLikes[1]] = [sortedLikes[1], sortedLikes[0]];
    }

    setTop3Data(sortedLikes);
  }
  function refreshRandomImg() {
    getRandomImg();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/generate/userData");
        setUserDatas(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (userDatas) {
      fillterTopImg();
      getRandomImg();
    }
  }, [userDatas]);

  console.log(top3Data);

  return (
    <div className={style.fullBox}>
      <div className={style.topBox}>
        <div className={style.topContentBox}>
          <div className={style.textBox}>
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 10,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                모아 갤러리
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                다른 사용자들의 작품을 구경해요
              </motion.p>
            </AnimatePresence>
          </div>
          <div className={style.imgBox}>
            <AnimatePresence>
              {imgUrlArr.map((url, key) => {
                console.log(key);
                return (
                  <motion.div
                    className={style.topImgBox}
                    key={key}
                    initial={{ opacity: 0, marginTop: 20 }}
                    animate={{
                      opacity: 1,
                      marginTop: 0,
                      transition: { duration: 0.5, delay: key * 0.4 + 1.2 },
                    }}
                  >
                    <p className={style.topImgWrap}>
                      <Image
                        src={url}
                        alt={`top Image`}
                        width={200}
                        height={200}
                        layout="responsive"
                        unoptimized={true}
                      />
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className={style.bottomBox}>
        <div className={style.b_textBox}>
          <div>
            <p>가장 많은 좋아요를 받은 이미지</p>
            <p>Top3에 도전해보자!</p>
          </div>
          <div></div>
        </div>
        <div className={style.top3ImgBox}>
          {top3Data &&
            top3Data.map((data, key) => {
              return (
                <ImageAndLikeBtn
                  key={key}
                  idx={key}
                  data={data}
                  userDatas={userDatas}
                />
              );
            })}
        </div>

        <div className={style.b_chartTextBox}>
          <div>
            <p>가장 많이 사용된 이미지 유형</p>
            <p>현재 인기있는 스타일과 타입이예요</p>
          </div>
        </div>
        <div className={style.allChartBox}>
          <div className={style.typeChartBox}>
            <p>인기 타입</p>

            <TypeChart userDatas={userDatas} />
          </div>
          <div className={style.styleChartBox}>
            <p>인기 스타일</p>
            <StyleChart userDatas={userDatas} />
          </div>
        </div>

        <div className={style.otherUserTxtBox}>
          <p>다른 사용자들의 이미지</p>
          <p>마음에 드는 이미지에 좋아요를 눌러주세요</p>
        </div>
        <div className={style.randomImgBox}>
          <div onClick={refreshRandomImg} className={style.refreshBtnBox}>
            <FontAwesomeIcon icon={faRotateRight} />
            새로고침
          </div>
          {randomData &&
            randomData.map((data, key) => {
              return (
                <SmallImgAndLikeBtn
                  data={data}
                  key={key}
                  idx={key}
                  userDatas={userDatas}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Others;
