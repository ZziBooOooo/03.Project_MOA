import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios, { all } from "axios";

const ImageAndLikeBtn = ({ idx, data }) => {
  const [liked, setLiked] = useState(false);

  function addImgToLike() {
    setLiked(!liked);
  }

  useEffect(() => {
    if (liked == true) {
      try {
        const response = axios.post("/api/generate/userData", {
          likeData: data,
          liked: "true",
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
    } else if (liked == false) {
      console.log("ff");
      try {
        const response = axios.post("/api/generate/userData", {
          likeData: data,
          liked: "false",
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }, [liked]);
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
