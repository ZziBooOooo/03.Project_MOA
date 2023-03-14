import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const SmallImgAndLikeBtn = ({ idx, data, userDatas }) => {
  const currentUserId = 5;
  const currentName = "다섯번째";
  const [liked, setLiked] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [likeCount, setLikeCount] = useState(data.like);

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
        _id: currentUserId,
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
    const filteredData = userDatas.find((obj) => obj._id == currentUserId);
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
    <div className={style.s_imgBox}>
      <div className={style.imgWrap} key={idx} onClick={addImgToLike}>
        <Image
          src={data.url}
          alt={`${data.name}_${data.title} Image`}
          width={240}
          height={240}
          layout="responsive"
          unoptimized={true}
        />
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
  );
};

export default SmallImgAndLikeBtn;
