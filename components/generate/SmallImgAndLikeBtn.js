import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios, { all } from "axios";

const smallImgAndLikeBtn = ({ data, idx }) => {
  const [liked, setLiked] = useState(false);

  function addImgToLike() {
    const isLiked = !liked;

    if (liked == true) {
      console.log("liked가 true");
      try {
        const response = axios.post("/api/generate/userData", {
          likeData: data,
          liked: "true",
        });
        setLiked(isLiked);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    } else if (liked == false) {
      console.log("liked가 false");
      try {
        const response = axios.post("/api/generate/userData", {
          likeData: data,
          liked: "false",
        });
        setLiked(isLiked);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={style.s_imgBox} key={idx}>
      <div className={style.imgWrap}>
        <Image
          src={data.url}
          alt={`${data.name}_${data.title} Image`}
          width={200}
          height={200}
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

export default smallImgAndLikeBtn;
