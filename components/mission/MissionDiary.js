import React, {useState , useEffect} from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownLeft } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const MissionDiary = () => {
    const router = useRouter();
    const [diary, setDiary] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setDiary(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(diary !== null) {
            router.push('/mission/missionSuccess');
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };


  return (
    <div className={`${style.missionDiaryBox} ${isFocused ? style.focused : ""}`}>
        <div className={style.titleBox}>
            <h2>오늘은 나에게 어떤 의미인가요?</h2>
            <Image
                src="/assets/images/mission/book.png"
                alt="book"
                width={60}
                height={64}
            />
        </div>
        <p>오늘 느꼈던 감정, 혹은 있었던 일을 한줄로 기록해 보세요.</p>
        <form onSubmit={handleSubmit}>
            <input type="text" maxlength='75' style={{border:"none" }} value={diary} onChange={handleChange}  onFocus={handleFocus} onBlur={handleBlur}/>
            <FontAwesomeIcon icon={faArrowTurnDownLeft} />
        </form>
    </div>
  )
}

export default MissionDiary