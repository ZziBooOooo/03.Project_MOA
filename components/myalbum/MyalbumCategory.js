import style from "styles/myalbum/myalbumcategory.module.scss";

export default function MyalbumCategory() {
  return (
    <div className={style.myalbumCategory}>
      <ul className={style.Category_box}>
        <li>픽셀</li>
        <li>3D</li>
        <li>일러스트</li>
        <li>사진</li>
        <li>유화</li>
        <li>카툰</li>
      </ul>
    </div>
  );
}
