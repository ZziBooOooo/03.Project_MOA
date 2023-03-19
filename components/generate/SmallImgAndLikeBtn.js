import React, { useEffect, useState, useContext } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios from "axios";
import { UserSaveDataContext } from "@/contexts/UserSaveDataComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const SmallImgAndLikeBtn = ({ idx, data, userDatas }) => {
  const [liked, setLiked] = useState("");
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

  function addImgToLike() {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    let newLiked = !liked;
    setLiked(newLiked);
    // console.log(newLiked);

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
        // console.log(response.data);
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
