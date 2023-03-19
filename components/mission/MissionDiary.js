import React, { useState, useEffect } from "react";
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const MissionDiary = () => {
  const router = useRouter();
  const [diary, setDiary] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    setDiary(event.target.value);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (diary.length > 0) {
      router.push("/mission/missionSuccess");
    } else {
      router.push("/mission/missionRetry");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`${style.missionDiaryBox} ${isFocused ? style.focused : ""}`}
    >
      <div className={style.titleBox}>
        <h2>오늘은 나에게 어떤 의미인가요?</h2>
        <Image
          className={style.bookIcon}
          src="/assets/images/mission/book.png"
          alt="book"
          width={60}
          height={64}
        />
      </div>
      <p>오늘 느꼈던 감정, 혹은 있었던 일을 한줄로 기록해 보세요.</p>
      <div className={style.formBox}>
        <form onSubmit={handleSubmit}>
          <input
            className={style.input_container}
            type="text"
            maxlength="90"
            style={{ border: "none" }}
            value={diary}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <textarea
            className={style.textarea_container}
            type="text"
            maxlength="90"
            style={{ border: "none" }}
            value={diary}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {/* <FontAwesomeIcon icon={faArrowTurnDownLeft} /> */}
          <button type="submit">
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                fontSize: "1.25em",
                marginBottom: "2%",
                color: isClicked ? "#2585F5" : "#C9C9C9",
              }}
              onClick={handleClick}
            />
          </button>
        </form>
      </div>

    </div>
  );
};

export default MissionDiary;
