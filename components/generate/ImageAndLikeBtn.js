import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios, { all } from "axios";

const ImageAndLikeBtn = ({ idx, data }) => {
  const currentUserId = 4;
  const currentName = "네번째";
  const [liked, setLiked] = useState("");

  function addImgToLike() {
    const newLiked = !liked;
    setLiked(newLiked);
    axios
      .post("/api/generate/userData", {
        likeData: data,
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

  // useEffect(() => {
  //   async function sendLikeData() {
  //     try {
  //       const response = await axios.post("/api/generate/userData", {
  //         likeData: data,
  //         liked,
  //       });
  //       console.log(response.data); // 성공 메시지 출력
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   sendLikeData();
  // }, [liked]);

  return (
    <div className={style.imgBox} key={idx}>
      <div className={style.imgWrap}>
        <div className={style.rank}></div>
        <Image
          src={data.url}
          alt={`top Image`}
          width={300}
          height={300}
          unoptimized={true}
        />
      </div>
      <p>제작자 : {data.name}</p>

      <button
        onClick={addImgToLike}
        style={{ backgroundColor: liked ? "skyblue" : "white" }}
      >
        {liked ? "Liked!" : "Like"}
      </button>
    </div>
  );
};

export default ImageAndLikeBtn;
