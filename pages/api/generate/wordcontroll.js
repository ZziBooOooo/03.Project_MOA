import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  // word 페이지 접속 시 DB에 저장된 유저의 단어목록을 받아온다.
  if (req.method === "GET") {
    try {
      const currentUserId = parseInt(req.query.currentUserId);
      const currentUser = await userCollection.findOne({
        _id: currentUserId,
      });

      res.status(200).json(currentUser.words);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
    // try {
    //   const insertResult = await userCollection.insertOne({
    //     _id: 4,
    //     name: "네번째",
    //     email: "moakim44@gmail.com",
    //     coin: 14,
    //     words: {
    //       WordCoin2: [
    //         {
    //           id: 0,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "고양이",
    //         },
    //         {
    //           id: 1,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "강아지",
    //         },
    //         {
    //           id: 2,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "물고기",
    //         },
    //         {
    //           id: 3,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "나비",
    //         },
    //         {
    //           id: 4,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "말",
    //         },
    //         {
    //           id: 5,
    //           isDone: true,
    //           coinNum: 2,
    //           word: "호랑이",
    //         },
    //       ],
    //       WordCoin3: [
    //         {
    //           id: 20,
    //           isDone: true,
    //           coinNum: 3,
    //           word: "딸기",
    //         },
    //         {
    //           id: 21,
    //           isDone: true,
    //           coinNum: 3,
    //           word: "장난감",
    //         },
    //         {
    //           id: 22,
    //           isDone: true,
    //           coinNum: 3,
    //           word: "간식",
    //         },
    //         {
    //           id: 23,
    //           isDone: true,
    //           coinNum: 3,
    //           word: "바다",
    //         },
    //         {
    //           id: 24,
    //           isDone: true,
    //           coinNum: 3,
    //           word: "침대",
    //         },
    //       ],
    //       WordCoin4: [
    //         {
    //           id: 40,
    //           isDone: true,
    //           coinNum: 4,
    //           word: "걷는다",
    //         },
    //         {
    //           id: 41,
    //           isDone: true,
    //           coinNum: 4,
    //           word: "본다",
    //         },
    //         {
    //           id: 42,
    //           isDone: true,
    //           coinNum: 4,
    //           word: "논다",
    //         },
    //         {
    //           id: 43,
    //           isDone: true,
    //           coinNum: 4,
    //           word: "먹는다",
    //         },
    //         {
    //           id: 44,
    //           isDone: true,
    //           coinNum: 4,
    //           word: "수영한다",
    //         },
    //       ],
    //     },
    //     imgUrl: [
    //       {
    //         title: "고양이가 논다",
    //         type: "포토리얼리즘",
    //         style: "귀여움",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678324877/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%85%BC%EB%8B%A4.png",
    //         like: 0,
    //       },
    //       {
    //         title: "물고기가 바다에서 수영한다",
    //         type: "픽셀아트",
    //         style: "차가운 색감",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678324920/userId_3/user_3/%EB%AC%BC%EA%B3%A0%EA%B8%B0%EA%B0%80%20%EB%B0%94%EB%8B%A4%EC%97%90%EC%84%9C%20%EC%88%98%EC%98%81%ED%95%9C%EB%8B%A4.png",
    //         like: 0,
    //       },
    //       {
    //         title: "강아지가 나비와 장난감으로 논다",
    //         type: "유화",
    //         style: "마법",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678324999/userId_3/user_3/%EA%B0%95%EC%95%84%EC%A7%80%EA%B0%80%20%EB%82%98%EB%B9%84%EC%99%80%20%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9C%BC%EB%A1%9C%20%EB%85%BC%EB%8B%A4.png",
    //         like: 0,
    //       },
    //       {
    //         title: "말이 걷는다",
    //         type: "일러스트",
    //         style: "디즈니",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678325028/userId_3/user_3/%EB%A7%90%EC%9D%B4%20%EA%B1%B7%EB%8A%94%EB%8B%A4.png",
    //         like: 0,
    //       },
    //       {
    //         title: "호랑이가 간식을 먹는다",
    //         type: "디지털 아트",
    //         style: "사이버펑크",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678325102/userId_3/user_3/%ED%98%B8%EB%9E%91%EC%9D%B4%EA%B0%80%20%EA%B0%84%EC%8B%9D%EC%9D%84%20%EB%A8%B9%EB%8A%94%EB%8B%A4.png",
    //         like: 0,
    //       },
    //       {
    //         title: "고양이가 본다",
    //         type: "수채화",
    //         style: "몬스터",
    //         url: "https://res.cloudinary.com/dluter782/image/upload/v1678325174/userId_3/user_3/%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EB%B3%B8%EB%8B%A4.png",
    //         like: 0,
    //       },
    //     ],
    //     likeImgs: [],
    //   });
    //   return res.status(200).send("User saved successfully");
    // } catch {}
  }
}
