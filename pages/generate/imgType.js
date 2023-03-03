import React from "react";
import style from "@/styles/generate/generate.module.scss";
import t_style from "@/styles/generate/type.module.scss";
import Image from "next/image";
import GenerateTop from "@/components/generate/GenerateTop";
import { useRouter } from "next/router";

const ImgType = () => {
  const typeArr = [
    "스테인 글라스",
    "픽셀아트",
    "유화",
    "일러스트",
    "디지털 아트",
    "수채화",
  ];
  const router = useRouter();
  const goImgResultPage = () => {
    router.push("/generate/imgStyle", undefined, { scroll: false });
  };
  return (
    <div className={`${style.fullBox} ${t_style.fullBox}`}>
      <GenerateTop />
      <div className={style.bottomBox}>
        <div className={`${style.bottomMainBox} ${t_style.bottomMainBox}`}>
          <div className={style.b_textBox}>
            <p className={style.checkIWrap}>
              <Image
                src="/assets/images/generate/check.png"
                alt="checkIcon"
                width={35}
                height={35}
              />
            </p>
            <p className={style.mainText}>이미지 타입을 선택해 주세요</p>
          </div>
          <div className={t_style.cardBox}>
            {typeArr.map((type, key) => {
              return (
                <div className={t_style.imgTypeCard}>
                  <p></p>
                  <p>{type}</p>
                  <p></p>
                  <p></p>
                </div>
              );
            })}
          </div>
          <div className={t_style.completeBtnBox}>
            <p></p>
            <button onClick={goImgResultPage}>다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgType;
