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
