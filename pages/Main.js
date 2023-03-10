import React from "react";
import style from "@/styles/main/main.module.css";
import CoinImage from "@/components/main/CoinImage";
import Image from "next/image";
import { useRouter } from "next/router";
import Slick from "../components/main/Slick";

const Main = () => {
  const router = useRouter();
  return (
    <>
      <section className={style.section01}>
        <p>모아서 그리자!</p>
        <h1>아티스트가 되는 공간. 모아 </h1>
        <button onClick={() => router.push("/mission")}>시작하기</button>
        <div className={style.scrolldown}>
          <div className={style.chevrons}>
            <div className={style.chevrondown}></div>
            <div className={style.chevrondown}></div>
          </div>
        </div>
      </section>

      <section className={style.section02}>
        <div className={style.guideBox}>
          <p className={style.section_title}>COIN</p>
          <div className={style.titleBox}>
            <h2>
              모으는 재미!<br></br>
              매일 다른 미션
            </h2>
            <div>
              <CoinImage />
              <p className={style.guide_detail}>
                모아에서는 매일 다른 미션이 제공돼요.<br></br>
                미션에 성공하면 코인을 받을 수 있어요.
              </p>
            </div>
          </div>

          <div className={style.guide_content}>
            <div className={style.guide_container}>
              <Image
                src="/assets/images/main/checkCircle.png"
                alt="check"
                width={55}
                height={55}
                className={style.guide_icon}
              />
              <p className={style.mission_title}>하루 한번 참여</p>
              <p className={style.mission_detail}>
                미션은 하루에 한번 <br></br>참여할 수 있어요.
              </p>
            </div>

            <div className={style.guide_container}>
              <Image
                src="/assets/images/main/slot.png"
                alt="slot"
                width={55}
                height={55}
                className={style.guide_icon}
              />
              <p className={style.mission_title}>랜덤 참여</p>
              <p className={style.mission_detail}>
                미션은 매일 <br></br> 랜덤으로 주어져요.
              </p>
            </div>

            <div className={style.guide_container}>
              <Image
                src="/assets/images/main/moneypocket.png"
                alt="moneypocket"
                width={55}
                height={55}
                className={style.guide_icon}
              />
              <p className={style.mission_title}>코인 적립</p>
              <p className={style.mission_detail}>
                모은 코인으로 <br></br> 코인을 적립해드려요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section03}>
        <div className={style.guideBox}>
          <div className={style.contentBox}>
            <p className={style.section_title}>WORD</p>
            <div className={style.titleBox}>
              <h2>
                모은 코인으로<br></br>
                뭐하지?
              </h2>
              <p className={style.guide_detail}>
                코인으로 단어를 살 수 있어요<br></br>
                단어는 나만의 이미지를 만들때 사용할 수 있어요.
              </p>
            </div>
          </div>
          <div className={style.guide_content}>
            <div className={style.guide_container}>
              <Slick />
            </div>
          </div>
        </div>
      </section>

      <section className={style.section04}>
        <div className={style.guideBox}>
          <div className={style.contentBox}>
            <p className={style.section_title}>IMAGE</p>
            <div className={style.titleBox}>
              <h2>
                세상에 하나밖에 없는<br></br>
                나만의 이미지!
              </h2>
            </div>
          </div>

          <div className={style.guide_content}>
            <div
              className={`${style.detail_container01}, ${style.detail_container}`}
            >
              <div className={style.content}>
                <div className={style.iconBox}>
                  <Image
                    src="/assets/images/main/thumbs-up 4.png"
                    alt="thumbs"
                    width={75}
                    height={75}
                    className={style.guide_icon}
                  />
                </div>
                <div className={style.textBox}>
                  <p className={style.icon_title}>뭐든지 가능</p>
                  <p>
                    원하는 컨셉에 맞춰 <br></br>단어를 선택하세요.
                  </p>
                </div>
              </div>

              <div className={style.content}>
                <div className={style.iconBox}>
                  <Image
                    src="/assets/images/main/star (1) 4 (1).png"
                    alt="star"
                    width={75}
                    height={75}
                    className={style.guide_icon}
                  />
                </div>
                <div className={style.textBox}>
                  <p className={style.icon_title}>유일함</p>
                  <p>
                    전세계에 단 하나만 <br></br>존재하는 나만의 이미지
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${style.detail_container02} ${style.detail_container}`}
            >
              <div className={style.content}>
                <div className={style.iconBox}>
                  <Image
                    src="/assets/images/main/pxArt.png"
                    alt="star"
                    width={75}
                    height={75}
                    className={style.guide_icon}
                  />
                </div>
                <div className={style.textBox}>
                  <p className={style.icon_title}>이미지 형식</p>
                  <p>
                    3D 아트, 픽셀아트 등 <br></br> 형식을 지정할 수 있어요.
                  </p>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.iconBox}>
                  <Image
                    src="/assets/images/main/down.png"
                    alt="star"
                    width={75}
                    height={75}
                    className={style.guide_icon}
                  />
                </div>
                <div className={style.textBox}>
                  <p className={style.icon_title}>저장</p>
                  <p>
                    보기만 하면 뭐해요<br></br>저장까지 할 수 있어요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.section05}>
        <div className={style.guideBox}>
          <div className={style.contentBox}>
            <p className={style.section_title}>ALBUM</p>
            <div className={style.titleBox}>
              <h2 className={style.title_detail}>
                나만의 이미지들을<br></br>
                모아보자
              </h2>
            </div>
          </div>

          <div className={style.guide_content}>
            <ul className={style.albumBox}>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img01.png"
                  alt="img01"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img02.png"
                  alt="img02"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img03.png"
                  alt="img03"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img04.png"
                  alt="img04"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img05.png"
                  alt="img05"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
              <li className={style.album_content}>
                <Image
                  src="/assets/images/main/img06.png"
                  alt="img06"
                  width={239}
                  height={139}
                  className={style.picture}
                />
                <p>
                  {" "}
                  A computer from <br></br>
                  the 90s in the style <br></br>
                  of vaporwave
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
