import Image from "next/image";
import style from "styles/myalbum/myalbumcontent.module.scss";

export default function MyalbumContent() {
  const myalbumImg = [
    {
      id: 1,
      iurl: "/assets/images/myalbum/myex01.png",
    },
    {
      id: 2,
      iurl: "/assets/images/myalbum/myex02.png",
    },
    {
      id: 3,
      iurl: "/assets/images/myalbum/myex03.png",
    },
    {
      id: 4,
      iurl: "/assets/images/myalbum/myex04.png",
    },
    {
      id: 5,
      iurl: "/assets/images/myalbum/myex05.png",
    },
    {
      id: 6,
      iurl: "/assets/images/myalbum/myex06.png",
    },
    {
      id: 7,
      iurl: "/assets/images/myalbum/myex07.png",
    },
    {
      id: 8,
      iurl: "/assets/images/myalbum/myex08.png",
    },
  ]; /* 예시 이미지 */

  return (
    <div className={style.myalbumContent}>
      <div className={style.myalbum_box}>
        {myalbumImg.map((res) => (
          <div className={style.myalbum_img} key={res.id}>
            <Image src={res.iurl} width={225} height={225} />{" "}
            {/* 사용자 이미지 들어갈곳 */}
          </div>
        ))}
      </div>
    </div>
  );
}
