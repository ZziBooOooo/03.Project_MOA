import React from 'react'
import './missionEnd';
import './missionRetry';
import './missionSuccess';
import style from '@/styles/mission/mission.module.css';
import {useRouter} from 'next/router';
import Image from "next/image";


const mission = () => {
  
  const router = useRouter();
  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.missionModal}>
          <button className={style.missionResult} onClick={()=>router.push("/mission/missionSuccess")}>
            이동
          </button>
          {/* <MissionRetry />
          <MissionEnd />     */}
        </div>
      </div>
    </>

  )
}

export default mission



