import React, { useEffect, useState } from "react";
import style from "@/styles/generate/others.module.scss";
import Image from "next/image";
import axios, { all } from "axios";
import ImageAndLikeBtn from "@/components/generate/ImageAndLikeBtn";
import SmallImgAndLikeBtn from "@/components/generate/SmallImgAndLikeBtn";

// 좋아요해제하면 개수줄이기
// 이미지 저장할때도 id같이 저장하기
// 내가 좋아요했는지 확인 -> 유저마다 좋아요필드 만들고 이미지 주소저장?

const others = () => {
  const [userDatas, setUserDatas] = useState([
    {
      _id: 0,
      name: "김모아",
      email: "moakim1234@gmail.com",
      coin: 10,
      words: {
        WordCoin2: [
          {
            id: 0,
            isDone: true,
            coinNum: 2,
            word: "고양이",
          },
          {
            id: 1,
            isDone: true,
            coinNum: 2,
            word: "강아지",
          },
          {
            id: 2,
            isDone: true,
            coinNum: 2,
            word: "물고기",
          },
          {
            id: 3,
            isDone: true,
            coinNum: 2,
            word: "나비",
          },
          {
            id: 4,
            isDone: true,
            coinNum: 2,
            word: "말",
          },
          {
            id: 5,
            isDone: true,
            coinNum: 2,
            word: "호랑이",
          },
        ],
        WordCoin3: [
          {
            id: 20,
            isDone: true,
            coinNum: 3,
            word: "딸기",
          },
          {
            id: 21,
            isDone: true,
            coinNum: 3,
            word: "장난감",
          },
          {
            id: 22,
            isDone: true,
            coinNum: 3,
            word: "간식",
          },
          {
            id: 23,
            isDone: true,
            coinNum: 3,
            word: "바다",
          },
          {
            id: 24,
            isDone: true,
            coinNum: 3,
            word: "침대",
          },
        ],
        WordCoin4: [
          {
            id: 40,
            isDone: true,
            coinNum: 4,
            word: "걷는다",
          },
          {
            id: 41,
            isDone: true,
            coinNum: 4,
            word: "본다",
          },
          {
            id: 42,
            isDone: true,
            coinNum: 4,
            word: "논다",
          },
          {
            id: 43,
            isDone: true,
            coinNum: 4,
            word: "먹는다",
          },
          {
            id: 44,
            isDone: true,
            coinNum: 4,
            word: "수영한다",
          },
        ],
      },
      imgUrl: [
        {
          title: "고양이가 논다",
          type: "포토리얼리즘",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324877/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "김모아",
        },
        {
          title: "물고기가 바다에서 수영한다",
          type: "픽셀아트",
          style: "차가운 색감",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324920/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
          like: 0,
          name: "김모아",
        },
        {
          title: "강아지가 나비와 장난감으로 논다",
          type: "유화",
          style: "마법",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324999/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%82%98%EB%B9%84%EC%99%80%20%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9C%BC%EB%A1%9C%20%EB%85%BC%EB%8B%A4.png",
          like: 6,
          name: "김모아",
        },
        {
          title: "말이 걷는다",
          type: "일러스트",
          style: "디즈니",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325028/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "김모아",
        },
        {
          title: "호랑이가 간식을 먹는다",
          type: "디지털 아트",
          style: "사이버펑크",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325102/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B0%84%EC%8B%9D%EC%9D%84%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "김모아",
        },
        {
          title: "고양이가 본다",
          type: "수채화",
          style: "몬스터",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325174/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%B3%B8%EB%8B%A4.png",
          like: 0,
          name: "김모아",
        },
      ],
    },
    {
      _id: 1,
      name: "형재공",
      email: "moakim1234@gmail.com",
      coin: 20,
      words: {
        WordCoin2: [
          {
            id: 0,
            isDone: true,
            coinNum: 2,
            word: "고양이",
          },
          {
            id: 1,
            isDone: true,
            coinNum: 2,
            word: "강아지",
          },
          {
            id: 2,
            isDone: true,
            coinNum: 2,
            word: "물고기",
          },
          {
            id: 3,
            isDone: true,
            coinNum: 2,
            word: "나비",
          },
          {
            id: 4,
            isDone: true,
            coinNum: 2,
            word: "말",
          },
          {
            id: 5,
            isDone: true,
            coinNum: 2,
            word: "호랑이",
          },
        ],
        WordCoin3: [
          {
            id: 20,
            isDone: true,
            coinNum: 3,
            word: "딸기",
          },
          {
            id: 21,
            isDone: true,
            coinNum: 3,
            word: "장난감",
          },
          {
            id: 22,
            isDone: true,
            coinNum: 3,
            word: "간식",
          },
          {
            id: 23,
            isDone: true,
            coinNum: 3,
            word: "바다",
          },
          {
            id: 24,
            isDone: true,
            coinNum: 3,
            word: "침대",
          },
        ],
        WordCoin4: [
          {
            id: 40,
            isDone: true,
            coinNum: 4,
            word: "걷는다",
          },
          {
            id: 41,
            isDone: true,
            coinNum: 4,
            word: "본다",
          },
          {
            id: 42,
            isDone: true,
            coinNum: 4,
            word: "논다",
          },
          {
            id: 43,
            isDone: true,
            coinNum: 4,
            word: "먹는다",
          },
          {
            id: 44,
            isDone: true,
            coinNum: 4,
            word: "수영한다",
          },
        ],
      },
      imgUrl: [
        {
          title: "고양이가 논다",
          type: "포토리얼리즘",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324877/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "형재공",
        },
        {
          title: "물고기가 바다에서 수영한다",
          type: "픽셀아트",
          style: "차가운 색감",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324920/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
          like: 0,
          name: "형재공",
        },
        {
          title: "강아지가 나비와 장난감으로 논다",
          type: "유화",
          style: "마법",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324999/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%82%98%EB%B9%84%EC%99%80%20%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9C%BC%EB%A1%9C%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "형재공",
        },
        {
          title: "말이 걷는다",
          type: "일러스트",
          style: "디즈니",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325028/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "형재공",
        },
        {
          title: "호랑이가 간식을 먹는다",
          type: "디지털 아트",
          style: "사이버펑크",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325102/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B0%84%EC%8B%9D%EC%9D%84%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
          like: 7,
          name: "형재공",
        },
        {
          title: "고양이가 본다",
          type: "수채화",
          style: "몬스터",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325174/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%B3%B8%EB%8B%A4.png",
          like: 0,
          name: "형재공",
        },
      ],
    },
    {
      _id: 2,
      name: "민서공",
      email: "moakim1234@gmail.com",
      coin: 0,
      words: {
        WordCoin2: [
          {
            id: 0,
            isDone: true,
            coinNum: 2,
            word: "고양이",
          },
          {
            id: 1,
            isDone: true,
            coinNum: 2,
            word: "강아지",
          },
          {
            id: 2,
            isDone: true,
            coinNum: 2,
            word: "물고기",
          },
          {
            id: 3,
            isDone: true,
            coinNum: 2,
            word: "나비",
          },
          {
            id: 4,
            isDone: true,
            coinNum: 2,
            word: "말",
          },
          {
            id: 5,
            isDone: true,
            coinNum: 2,
            word: "호랑이",
          },
          {
            id: 7,
            isDone: true,
            coinNum: 2,
            word: "펭귄",
          },
          {
            id: 11,
            isDone: true,
            coinNum: 2,
            word: "여우",
          },
          {
            id: 15,
            isDone: true,
            coinNum: 2,
            word: "고슴도치",
          },
          {
            id: 19,
            isDone: true,
            coinNum: 2,
            word: "병아리",
          },
          {
            id: 18,
            isDone: true,
            coinNum: 2,
            word: "다람쥐",
          },
          {
            id: 17,
            isDone: true,
            coinNum: 2,
            word: "곰",
          },
          {
            id: 14,
            isDone: true,
            coinNum: 2,
            word: "양",
          },
          {
            id: 10,
            isDone: true,
            coinNum: 2,
            word: "사슴",
          },
          {
            id: 2,
            isDone: true,
            coinNum: 2,
            word: "토끼",
          },
          {
            id: 6,
            isDone: true,
            coinNum: 2,
            word: "사자",
          },
          {
            id: 9,
            isDone: true,
            coinNum: 2,
            word: "알파카",
          },
          {
            id: 13,
            isDone: true,
            coinNum: 2,
            word: "표범",
          },
        ],
        WordCoin3: [
          {
            id: 20,
            isDone: true,
            coinNum: 3,
            word: "딸기",
          },
          {
            id: 21,
            isDone: true,
            coinNum: 3,
            word: "장난감",
          },
          {
            id: 22,
            isDone: true,
            coinNum: 3,
            word: "간식",
          },
          {
            id: 23,
            isDone: true,
            coinNum: 3,
            word: "바다",
          },
          {
            id: 24,
            isDone: true,
            coinNum: 3,
            word: "침대",
          },
          {
            id: 34,
            isDone: true,
            coinNum: 3,
            word: "감옥",
          },
          {
            id: 37,
            isDone: true,
            coinNum: 3,
            word: "심각하게",
          },
          {
            id: 39,
            isDone: true,
            coinNum: 3,
            word: "레스토랑",
          },
          {
            id: 38,
            isDone: true,
            coinNum: 3,
            word: "주방",
          },
          {
            id: 21,
            isDone: true,
            coinNum: 3,
            word: "그림",
          },
          {
            id: 25,
            isDone: true,
            coinNum: 3,
            word: "행복하게",
          },
          {
            id: 33,
            isDone: true,
            coinNum: 3,
            word: "집",
          },
          {
            id: 35,
            isDone: true,
            coinNum: 3,
            word: "자신있게",
          },
        ],
        WordCoin4: [
          {
            id: 40,
            isDone: true,
            coinNum: 4,
            word: "걷는다",
          },
          {
            id: 41,
            isDone: true,
            coinNum: 4,
            word: "본다",
          },
          {
            id: 42,
            isDone: true,
            coinNum: 4,
            word: "논다",
          },
          {
            id: 43,
            isDone: true,
            coinNum: 4,
            word: "먹는다",
          },
          {
            id: 44,
            isDone: true,
            coinNum: 4,
            word: "수영한다",
          },
        ],
      },
      imgUrl: [
        {
          title: "고양이가 논다",
          type: "포토리얼리즘",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324877/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
        {
          title: "물고기가 바다에서 수영한다",
          type: "픽셀아트",
          style: "차가운 색감",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324920/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
        {
          title: "강아지가 나비와 장난감으로 논다",
          type: "유화",
          style: "마법",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324999/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%82%98%EB%B9%84%EC%99%80%20%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9C%BC%EB%A1%9C%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
        {
          title: "말이 걷는다",
          type: "일러스트",
          style: "디즈니",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325028/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
        {
          title: "호랑이가 간식을 먹는다",
          type: "디지털 아트",
          style: "사이버펑크",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325102/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B0%84%EC%8B%9D%EC%9D%84%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
        {
          title: "고양이가 본다",
          type: "수채화",
          style: "몬스터",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325174/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%B3%B8%EB%8B%A4.png",
          like: 0,
          name: "민서공",
        },
      ],
    },
    {
      _id: 3,
      name: "세림공",
      email: "moakim1234@gmail.com",
      coin: 124,
      words: {
        WordCoin2: [
          {
            id: 0,
            isDone: true,
            coinNum: 2,
            word: "고양이",
          },
          {
            id: 1,
            isDone: true,
            coinNum: 2,
            word: "강아지",
          },
          {
            id: 2,
            isDone: true,
            coinNum: 2,
            word: "물고기",
          },
          {
            id: 3,
            isDone: true,
            coinNum: 2,
            word: "나비",
          },
          {
            id: 4,
            isDone: true,
            coinNum: 2,
            word: "말",
          },
          {
            id: 5,
            isDone: true,
            coinNum: 2,
            word: "호랑이",
          },
          [
            {
              id: 15,
              isDone: true,
              coinNum: 2,
              word: "고슴도치",
            },
          ],
          [
            {
              id: 18,
              isDone: true,
              coinNum: 2,
              word: "다람쥐",
            },
          ],
          [
            {
              id: 7,
              isDone: true,
              coinNum: 2,
              word: "펭귄",
            },
          ],
          {
            id: 6,
            isDone: true,
            coinNum: 2,
            word: "사자",
          },
          {
            id: 19,
            isDone: true,
            coinNum: 2,
            word: "병아리",
          },
          {
            id: 17,
            isDone: true,
            coinNum: 2,
            word: "곰",
          },
          {
            id: 16,
            isDone: true,
            coinNum: 2,
            word: "돌고래",
          },
          {
            id: 15,
            isDone: true,
            coinNum: 2,
            word: "고슴도치",
          },
          {
            id: 13,
            isDone: true,
            coinNum: 2,
            word: "표범",
          },
          {
            id: 18,
            isDone: true,
            coinNum: 2,
            word: "다람쥐",
          },
          {
            id: 14,
            isDone: true,
            coinNum: 2,
            word: "양",
          },
          {
            id: 11,
            isDone: true,
            coinNum: 2,
            word: "여우",
          },
        ],
        WordCoin3: [
          {
            id: 20,
            isDone: true,
            coinNum: 3,
            word: "딸기",
          },
          {
            id: 21,
            isDone: true,
            coinNum: 3,
            word: "장난감",
          },
          {
            id: 22,
            isDone: true,
            coinNum: 3,
            word: "간식",
          },
          {
            id: 23,
            isDone: true,
            coinNum: 3,
            word: "바다",
          },
          {
            id: 24,
            isDone: true,
            coinNum: 3,
            word: "침대",
          },
        ],
        WordCoin4: [
          {
            id: 40,
            isDone: true,
            coinNum: 4,
            word: "걷는다",
          },
          {
            id: 41,
            isDone: true,
            coinNum: 4,
            word: "본다",
          },
          {
            id: 42,
            isDone: true,
            coinNum: 4,
            word: "논다",
          },
          {
            id: 43,
            isDone: true,
            coinNum: 4,
            word: "먹는다",
          },
          {
            id: 44,
            isDone: true,
            coinNum: 4,
            word: "수영한다",
          },
        ],
      },
      imgUrl: [
        {
          title: "고양이가 논다",
          type: "포토리얼리즘",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324877/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%85%BC%EB%8B%A4.png",
          like: 8,
          name: "세림공",
        },
        {
          title: "물고기가 바다에서 수영한다",
          type: "픽셀아트",
          style: "차가운 색감",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324920/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "강아지가 나비와 장난감으로 논다",
          type: "유화",
          style: "마법",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678324999/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%82%98%EB%B9%84%EC%99%80%20%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9C%BC%EB%A1%9C%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "말이 걷는다",
          type: "일러스트",
          style: "디즈니",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325028/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "호랑이가 간식을 먹는다",
          type: "디지털 아트",
          style: "사이버펑크",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325102/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B0%84%EC%8B%9D%EC%9D%84%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "고양이가 본다",
          type: "수채화",
          style: "몬스터",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678325174/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%B3%B8%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "강아지가 딸기를 먹는다",
          type: "유화",
          style: "판타지",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678345579/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%94%B8%EA%B8%B0%EB%A5%BC%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "호랑이가 걷는다",
          type: "디지털 아트",
          style: "우주 컨셉",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678345680/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "강아지가 고양이와 논다",
          type: "유화",
          style: "네온",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678373949/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EA%B3%A0%EC%96%91%EC%9D%B4%EC%99%80%20%EB%85%BC%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "말이 나비와 바다에서 걷는다",
          type: "디지털 아트",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678373999/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EB%82%98%EB%B9%84%EC%99%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
        {
          title: "물고기가 수영한다",
          type: "픽셀아트",
          style: "귀여움",
          url: "https://res.cloudinary.com/dluter782/image/upload/v1678376755/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
          like: 0,
          name: "세림공",
        },
      ],
    },
  ]);
  const [top3Data, setTop3Data] = useState([]);
  const [randomData, setRandomData] = useState([]);

  function mergeImgUrlArray() {
    // const copyUserData = JSON.parse(JSON.stringify(userDatas));
    const allImgArr = [];

    // 이미지 저장할때 사용자 이름도 같이 저장하면 이거 빼기
    userDatas &&
      userDatas.map((data) => {
        const imgUrl = data.imgUrl;
        imgUrl.forEach((item) => (item.name = data.name));
      });

    userDatas &&
      userDatas.forEach((obj) => {
        const imgArr = obj.imgUrl;
        allImgArr.push(...imgArr);
      });

    return allImgArr;
  }

  function getRandomImgFromArray(arr, n) {
    const result = [];
    while (result.length < 8 && arr.length > 0) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
    return result;
  }

  function getRandomImg() {
    const allImgArr = mergeImgUrlArray();

    const allImgCount = allImgArr.length;
    const randomImgArr = getRandomImgFromArray(allImgArr, allImgCount);
    setRandomData(randomImgArr);
  }
  async function fillterTopImg() {
    // userDatas에서 각 유저마다 가장 많은 하트 개수의 이미지 객체를 한 배열에 담는다
    // 정렬되는 이유 >> ?

    // copyUserData는 배열인데 안에 객체가 있다.
    // 원본과 복사본은 결국 복사해도 같은 객체를 참조하기 때문에 얕은 복사가 된 것.
    // const copyUserData = JSON.parse(JSON.stringify(userDatas));

    const maxLikeArr = [];

    userDatas &&
      userDatas.map((data, key) => {
        const imgUrls = data.imgUrl;

        const max = imgUrls.reduce((prev, current) => {
          return prev.like > current.like ? prev : current;
        });
        max["name"] = data.name;
        maxLikeArr.push(max);
      });

    // 만든 배열에서 가장 큰 값 3개만 찾아 새로운 배열에 담는다.
    const topArr = maxLikeArr.sort((prev, current) =>
      prev.like > current.like ? 1 : -1
    );
    const top3Arr = topArr.slice(-3);
    setTop3Data(top3Arr);
  }

  function refreshRandomImg() {
    getRandomImg();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/generate/userData");
        setUserDatas(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (userDatas) {
      fillterTopImg();
      getRandomImg();
    }
  }, [userDatas]);

  return (
    <div className={style.fullBox}>
      <div className={style.topBox}>
        <div className={style.textBox}>
          <p>페이지 메인 문구</p>
          <p>부가 설명</p>
        </div>
      </div>
      <div className={style.bottomBox}>
        <div className={style.b_textBox}>
          <p>컨텐츠 메인 문구</p>
          <p>부가 설명</p>
        </div>
        <div className={style.top3ImgBox}>
          {top3Data &&
            top3Data.map((data, key) => {
              return <ImageAndLikeBtn key={key} idx={key} data={data} />;
            })}
        </div>

        <div className={style.otherUserTxtBox}>
          <p>컨텐츠 메인 문구</p>
          <p>부가 설명</p>
        </div>
        <div className={style.randomImgBox}>
          {randomData &&
            randomData.map((data, key) => {
              return <SmallImgAndLikeBtn data={data} key={key} />;
            })}
        </div>
      </div>
      <button onClick={refreshRandomImg}>새로고침</button>
    </div>
  );
};

export default others;
