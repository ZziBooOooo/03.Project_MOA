import React, {useState , useEffect, useRef} from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";


const MissionTree = () => {
    const router = useRouter();
    const [countdown, setCountdown] = React.useState(10);
    const [num, setNum] = useState("");
    /* const prevPathRef = useRef(null); */
    
    const handleChange = (event) => {
        setNum(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (num === "7") {
            router.push('/mission/missionSuccess'); // 페이지 이동
        } else {
            router.push('/mission/missionRetry'); // 오류 메시지 출력
        }
    };


    useEffect(() => {
        countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);
        if (countdown === 0) {
            router.push('/mission/missionRetry'); // 타이머 종료 후 페이지 이동
        }
    }, [countdown]);


    /* 

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
    */

    
    
    return (
        <div className={style.missionTreeBox}>
            <div className={style.timer }  style={{ color: countdown <= 4 ? "#E53935" : "$mainColor" }}>
                00 : {countdown<10 ? `0${countdown}` : countdown}
            </div>
            <div className={style.quizBox}>
                <div className={style.imgBox}>
                    <Image
                        src="/assets/images/mission/orangetree.png"
                        alt="treeImage"
                        width={300}
                        height={400}
                        style={{borderRadius:"15px"}}
                    />
                </div>
                <div className={style.quiz}>
                    <p className={style.title}>코인 갯수 찾기!</p>
                    <p className={style.detail}>그림 속 코인을 시간안에 찾아보세요</p>
                    <div className={style.formBox}>
                        <form onSubmit={handleSubmit}>
                            <input type="number" min="0" placeholder='숫자를 입력해 주세요' style={{border:"none" }} value={num} onChange={handleChange}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionTree