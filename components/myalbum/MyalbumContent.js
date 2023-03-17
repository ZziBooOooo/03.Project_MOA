import Image from "next/image";
import style from "styles/myalbum/myalbumcontent.module.scss";
import MyalbumType from "./MyalbumType";

export default function MyalbumContent({ catePage }) {
  return (
    <div className={style.myalbumContent}>
      <div className={style.myalbum_box}>
        <MyalbumType catePage={catePage} />
      </div>
    </div>
  );
}
