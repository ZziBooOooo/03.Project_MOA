import React, { useEffect, useState, useContext } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios from "axios";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const ImageAndLikeBtn = ({ idx, data, userDatas }) => {
  const [liked, setLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [likeCount, setLikeCount] = useState(data.like);

  const { userSaveData } = useContext(UserSaveDataContext);

  // const currentUserEmail = userSaveData.useremail;
  // const currentName = userSaveData.name;
  const currentUserEmail =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? JSON.parse(window.sessionStorage.getItem("userData")).useremail || null
      : null;

  const currentName =
    typeof window !== "undefined" && window.sessionStorage.getItem("userData")
      ? JSON.parse(window.sessionStorage.getItem("userData")).name || null
      : null;

  const rank = ["2", "1", "3"];

  function addImgToLike() {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    let newLiked = !liked;
    setLiked(newLiked);
    console.log(newLiked);

    if (newLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }

    axios
      .post("/api/generate/userData", {
        likeData: data,
        imgId: data.imgId,
        liked: newLiked,
        useremail: currentUserEmail,
        currentName,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const filteredData = userDatas.find(
      (obj) => obj.useremail == currentUserEmail
    );
    setFilteredData(filteredData);
  }, [userDatas]);

  useEffect(() => {
    if (filteredData) {
      const isLiked = filteredData.likeImgs.some(
        (img) => img.imgId === data.imgId
      );
      setLiked(isLiked);
    }
  }, [filteredData, data.imgId]);

  return (
    <AnimatePresence>
      <div className={style.imgBox} key={idx}>
        <div className={style.imgWrap} onClick={addImgToLike}>
          <div className={style.rank}>{rank[idx]}</div>
          {
            <Image
              src={data.url}
              alt={`top Image`}
              width={300}
              height={300}
              layout="responsive"
              unoptimized={true}
              id={data.imgId}
            />
          }
          <div className={style.likeField}>
            <p>{likeCount}</p>
            <div className={style.likeBtnBox}>
              {liked ? (
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  className={`${style.heartIcon} ${style.solidHeart} ${
                    isAnimating ? style.animating : ""
                  }`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartRegular}
                  className={`${style.heartIcon} ${style.regularHeart} ${
                    isAnimating ? style.animating : ""
                  }`}
                />
              )}
            </div>
          </div>
        </div>
        <p className={style.creator}>제작 : {data.name}</p>
      </div>
    </AnimatePresence>
  );
};

export default ImageAndLikeBtn;
