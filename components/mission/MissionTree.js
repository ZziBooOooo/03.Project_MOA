import React, {useState , useEffect} from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";


const MissionTree = () => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    const [countdown, setCountdown] = React.useState(10);
    const [num, setNum] = useState("");
    
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

    const handleClick = () => {
        setIsClicked(true);
    };

    
    
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
                    <form onSubmit={handleSubmit}>
                        <input type="number" min="0" placeholder='숫자를 입력해 주세요' style={{border:"none" }} value={num} onChange={handleChange}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MissionTree