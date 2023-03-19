import Image from "next/image";
import { useEffect, useRef } from "react";
import style from "styles/myalbum/myalbumbanner.module.scss";

export default function MyAlbumBanner() {
  const myPhone01 = useRef();
  const myPhone02 = useRef();
  const myText = useRef();

  function myalbumIntro() {
    myPhone01.current.style.transform = "translateY(190px)";
    myPhone02.current.style.transform = "translateY(10px)";
    myPhone01.current.style.opacity = "1";
    myPhone02.current.style.opacity = "1";
    myText.current.style.opacity = "1";
  } /* 마이앨범 인트로 */

  useEffect(() => {
    myalbumIntro();
  }, []);
  return (
    <div className={style.myalbum_banner}>
      <div className={style.myalbum_phone}>
        <Image
          src="/assets/images/myalbum/phone2.png"
          width={309}
          height={583}
          className={style.phoneImg02}
          ref={myPhone01}
          alt="핸드폰이미지1"
        />
        <Image
          src="/assets/images/myalbum/phone1.png"
          width={309}
          height={583}
          className={style.phoneImg01}
          ref={myPhone02}
          alt="핸드폰이미지2"
        />
      </div>
      <div className={style.myalbum_textbox} ref={myText}>
        <h3>나만의 이미지 모아보기</h3>
        <p>
          내가 만들었던 이미지들을 <br /> 모아두었어요
        </p>
      </div>
    </div>
  );
}
