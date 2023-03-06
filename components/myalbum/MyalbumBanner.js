import style from "styles/myalbum/myalbumbanner.module.scss";

export default function MyAlbumBanner() {
  return (
    <div className={style.myalbum_banner}>
      <div className={style.myalbum_textbox}>
        <h3>나만의 이미지 모아보기</h3>
        <p>
          내가 만들었던 이미지들을 <br /> 모아두었어요
        </p>
      </div>
    </div>
  );
}
