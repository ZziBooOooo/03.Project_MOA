import React, {useState , useEffect} from 'react'
import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";


const MissionTree = () => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    const [counter, setCounter] = React.useState(10);


    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);

    const handleClick = () => {
        setIsClicked(true);
    };
    
  return (
    <div className={style.missionTreeBox}>
        <div className={style.timer}>
            00 : {counter}
        </div>
        <div className={style.quizBox}>
            <Image
                src="/assets/images/mission/orangetree.png"
                alt="treeImage"
                width={400}
                height={500}
                style={{borderRadius:"15px"}}
              />
              <div className={style.quiz}>
                <p className={style.title}>코인 갯수 찾기!</p>
                <p className={style.detail}>그림 속 코인을 시간안에 찾아보세요</p>
                <form>
                    <input type="number" placeholder='숫자를 입력해 주세요' style={{border:"none"}} />
                    <button type="submit" onClick={handleClick}>
                        <Image
                            src="/assets/images/mission/submit.svg"
                            alt='submitBtn'
                            width={44}
                            height={44}
                            className={style.btnImage}
                            style={{ fill: isClicked ? "white" : "currentColor" }}
                        /> 
                    </button>
                </form>
              </div>
        </div>
    </div>
  )
}

export default MissionTree