import React from 'react'
import './missionEnd';
import './missionRetry';
import './missionSuccess';
import style from '@/styles/mission/mission.module.css';
import {useRouter} from 'next/router';
import Image from "next/image";
import MissionCatch from '@/components/mission/MissionCatch';
import MissionTree from '@/components/mission/MissionTree';
import MissionDiary from '@/components/mission/MissionDiary';
import MissonMotionBox from "@/components/mission/MissonMotionBox";
import MissionClickCount from "@/components/mission/MissionClickCount";
import MissionTypeWithKeyBoard from "@/components/mission/MissionTypeWithKeyBoard";


const Mission = () => {
  
  const router = useRouter();
  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.missionModal}>
          {/* <button className={style.missionResult} onClick={()=>router.push("/mission/test")}>
            이동
          </button> */}
          {/* <button className={style.success} onClick={()=>router.push("/mission/missionEnd")}>
            success
          </button> */}
          {/* <MissonMotionBox /> */}
          {/* <MissionClickCount /> */}
           {/* <MissionTypeWithKeyBoard /> */}
          
          <MissionTree />
        </div>
      </div>
    </>

  )
}

export default Mission



