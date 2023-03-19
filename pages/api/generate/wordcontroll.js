import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  // word 페이지 접속 시 DB에 저장된 유저의 단어목록을 받아온다.
  if (req.method === "GET") {
    try {
      const currentUserEmail = req.query.currentUserEmail;
      // console.log(currentUserEmail);
      const currentUser = await userCollection.findOne({
        useremail: currentUserEmail,
      });
      // console.log(currentUser);
      res.status(200).json(currentUser.words);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
    // try {
    //   const insertResult = await userCollection.insertOne({
    //     _id: 6,
    //     name: "여섯번째",
    //     email: "moa66@gmail.com",
    //     coin: 8,
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
    //     imgUrl: [],
    //     likeImgs: [],
    //   });
    //   return res.status(200).send("User saved successfully");
    // } catch {}
  }
}
