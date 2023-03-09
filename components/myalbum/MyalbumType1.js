import Image from "next/image";
import style from "styles/myalbum/myalbumcontent.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function MyalbumType1({ myalbumImg, catePage }) {
  const [data, setData] = useState(); /* 몽고디비 테스트 get */

  const saveData = async () => {
    try {
      const response = await axios.get("/api/test/userData");
      console.log(response.data[0]);
      setData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  }; /* 몽고디비 테스트 get */

  function imgDown(res) {
    let image = document.createElement("img");
    image.src = res.url;
    image.className = "imgs";
    document.body.appendChild(image);

    image.onload = () => {
      const elTest = document.querySelector(".imgs");
      domtoimage.toBlob(elTest).then((blob) => {
        saveAs(blob, `${res.title}`);
        elTest.remove(); /* 생성 되자마자 지움 */
      });
    };
  } /* 이미지 다운로드 */

  useEffect(() => {
    saveData();
  }, []); /* 몽고디비 테스트 get */

  return (
    <>
      {data ? (
        data.imgUrl.map(
          (res, key) =>
            res.type === catePage &&
            res.url /* <= 이미지url이 일주일후에 사라지면 */ && (
              <div className={style.myalbum_img} key={key}>
                <div className={style.myalbum_front}>
                  <Image
                    src={res.url}
                    width={225}
                    height={225}
                    alt="마이이미지"
                    className="as"
                    unoptimized={true}
                  />
                  <img src={res.url} />
                </div>
                <div className={style.myalbum_back}>
                  <p>{res.title}</p>
                  <button onClick={() => imgDown(res)}>저장하기</button>
                </div>
                {/* 사용자 이미지 들어갈곳 */}
              </div>
            )
        )
      ) : (
        <div className={style.noData}>
          <p>
            나만의 이미지를 만들어 <br />
            앨범에 추가하세요
          </p>{" "}
          {/* 앨범에 이미지가 없을경우 */}
        </div>
      )}
    </>
  );
}
