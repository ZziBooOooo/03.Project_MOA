import React, {useState , useEffect, useRef} from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import {  useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const MissionDiary = () => {
    const router = useRouter();
    const prevPathRef = useRef(null);
    const [diary, setDiary] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleChange = (event) => {
        setDiary(event.target.value);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(diary.length>0) {
            router.push('/mission/missionSuccess');
        } else {
            router.push('/mission/missionRetry');
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // 새로고침 제거
    const handleRouterChange = () => {
        // 이전 URL이 ModalPage이면서 새로운 url도 ModalPage면 브라우저 기록을 수정하여 뒤로가기를 막음
        if(prevPathRef.current === '/mission/missionModal' && router.asPath === '/mission/missionModal') {
            window.history.pushState(null,null,router.asPath); 
        }
        // 이전 URL을 현재 URL로 업데이트한다. 
        prevPathRef.current = router.asPath;
    };

    useEffect(()=> {
        // router 이벤트 리스너를 등록
        router.events.on('routeChangeStart', handleRouterChange);

        // 컴포넌트가 언마운트될 때 리스너를 제거
        return () => {
            router.events.off('routerChangeStart', handleRouterChange);
        };
    },[]);

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
            <input type="text" maxlength='90' style={{border:"none" }} value={diary} onChange={handleChange}  onFocus={handleFocus} onBlur={handleBlur} placeholder={ "그냥 나가시면 코인을 받으실 수 없어요. ಥ_ಥ" }/>
            {/* <FontAwesomeIcon icon={faArrowTurnDownLeft} /> */}
            <button type="submit">
            <FontAwesomeIcon icon={faPencil} style={{ fontSize: '1.25em', marginBottom: '2%', color: isClicked? '#2585F5' : '#C9C9C9'}} onClick={handleClick}/>
            </button>
        </form>
    </div>
  )
}

export default MissionDiary