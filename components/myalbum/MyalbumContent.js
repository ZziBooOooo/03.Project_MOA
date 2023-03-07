import Image from "next/image";
import style from "styles/myalbum/myalbumcontent.module.scss";
import MyalbumType1 from "./MyalbumType1";

export default function MyalbumContent({ catePage }) {
  const myalbumImg = [
    {
      id: 1,
      iurl: "/assets/images/myalbum/myex01.png",
      myWord: "풀숲을 걷고있는 별의커비, 픽셀아트",
      type: "pixel",
    },
    {
      id: 2,
      iurl: "/assets/images/myalbum/myex02.png",
      myWord: "내가 만들었던 이미지들을 모아두었어요",
      type: "pixel",
    },
    {
      id: 3,
      iurl: "/assets/images/myalbum/myex03.png",
      myWord: "여기에 만들었던 문장이 들어가요",
      type: "pixel",
    },
    {
      id: 4,
      iurl: "/assets/images/myalbum/myex04.png",
      myWord: "여기에도 들어가요 고흐스타일",
      type: "pixel",
    },
    {
      id: 5,
      iurl: "/assets/images/myalbum/myex05.png",
      myWord: "풀숲을 걷고있는 별의커비, 일러스트",
      type: "pixel",
    },
    {
      id: 6,
      iurl: "/assets/images/myalbum/myex06.png",
      myWord: "풀숲을 걷고있는 별의커비, 디지털아트",
      type: "pixel",
    },
    {
      id: 7,
      iurl: "/assets/images/myalbum/myex07.png",
      myWord: "풀숲을 걷고있는 별의커비, 빈지티",
      type: "pixel",
    },
    {
      id: 8,
      iurl: "/assets/images/myalbum/myex08.png",
      myWord: "풀숲을 걷고있는 별의재훈, 픽셀아트",
      type: "pixel",
    },
  ]; /* 예시 이미지 */

  return (
    <div className={style.myalbumContent}>
      <div className={style.myalbum_box}>
        <MyalbumType1 myalbumImg={myalbumImg} catePage={catePage} />
      </div>
    </div>
  );
}
