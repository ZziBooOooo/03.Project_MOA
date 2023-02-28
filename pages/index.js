import Headinfo from "@/components/HeadInfo";
import style from "../styles/main.module.css";

export default function Home() {
  return (
    <>
      <Headinfo />
      <main>
        <section className={style.section01}>
          <p>모아서 그리자!</p>
          <h1>아티스트가 되는 공간. 모아 </h1>
          <button>시작하기 2</button>
        </section>
      </main>
    </>
  );
}
