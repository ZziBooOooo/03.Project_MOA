import Image from "next/image";
import style from "styles/myalbum/myalbumcontent.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MyalbumType1({ myalbumImg, catePage }) {
  const [data, setData] = useState(); /* 몽고디비 테스트 get */

  const saveData = async () => {
    try {
      const response = await axios.get("/api/test/userData");
      console.log(response);
      setData(response.data[1]);
    } catch (error) {
      console.error(error);
    }
  }; /* 몽고디비 테스트 get */

  useEffect(() => {
    saveData();
  }, []); /* 몽고디비 테스트 get */

  return (
    <>
      {" "}
      {data ? (
        data.imgUrl.map(
          (res) =>
            res.type === catePage &&
            res.url /* <= 이미지url이 일주일후에 사라지면 */ && (
              <div className={style.myalbum_img} key={res.id}>
                <div className={style.myalbum_front}>
                  {/* <Image src={res.url} width={225} height={225} /> */}
                  {res.type}
                </div>
                <div className={style.myalbum_back}>
                  <p>{res.title}</p>
                  <a href={res.url} download>
                    <button>저장하기</button>
                  </a>
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
