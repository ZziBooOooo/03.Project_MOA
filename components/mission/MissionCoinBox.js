import style from "@/styles/mission/mission.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MissionCoinBox() {
  const [isShow, setisShow] = useState("");
  const [isCoin, setisCoin] = useState(Math.floor(Math.random() * 3) + 1);
  const router = useRouter();
  const tet = [
    { id: 1, text: 1, isShow },
    { id: 2, text: 2, isShow },
    { id: 3, text: 3, isShow },
  ];

  function choiceBtn(e) {
    setisShow(e);
    setTimeout(() => {
      if (isCoin == e) {
        router.push("/mission/missionSuccess");
      } else {
        router.push("/mission/missionRetry");
      }
    }, 900);
  }

  useEffect(() => {}, [isCoin]);

  return (
    <div className={style.missionCoinBox}>
      <h2> 행운박스 뽑기!</h2>
      <p>코인이 담긴 박스는 무엇일까요? </p>
      <ul className={style.missionCoinBox_item}>
        {tet.map((res, idx) => (
          <li
            onClick={() => {
              choiceBtn(res.id);
            }}
            key={res.id}
          >
            <Image
              src={`/assets/images/mission/luckyBox${res.text}.png`}
              width={175}
              height={136}
              alt="행운박스"
              className={isShow === res.id ? style.img_ative : ""}
            />
            <p className={isShow === res.id ? style.name_ative : ""}>
              {isCoin == res.id ? (
                <Image
                  src="/assets/images/mission/luckyCoin.png"
                  width={50}
                  height={50}
                  alt="coin"
                />
              ) : (
                "꽝!"
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
