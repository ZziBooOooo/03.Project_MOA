import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { method } = req;
  const { client } = await connectToDatabase();
  const db = client.db("DataMoa");
  const userCollection = db.collection("user");
  const { name, email, profile } = req.body;

  switch (method) {
    case "GET":
      // console.log(req.query);
      try {
        const users = await userCollection.findOne({
          useremail: req.query.email,
        });
        // console.log(users);
        if (users) {
          res.status(200).json({ status: "exist", users: users });
        } else {
          res.status(200).json({ status: "noExist" });
        }
      } catch (e) {
        console.error("에러뜸");
        res.status(500).json({ error: "Something went wrong" });
      }
      break;
    /* 사용자 데이터 가져오기 */

    case "POST":
      try {
        const existingUser = await userCollection.findOne({ useremail: email });
        if (existingUser && existingUser.useremail == email) {
          console.log("등록된 사용자");
          return;
        } else {
          await userCollection.insertOne({
            useremail: email,
            name: name,
            profile: profile,
            coin: 20,
            missionCount: 0,
            words: {
              WordCoin2: [
                { id: 0, isDone: true, coinNum: 2, word: "고양이" },
                { id: 1, isDone: true, coinNum: 2, word: "강아지" },
                { id: 2, isDone: true, coinNum: 2, word: "드래곤" },
                { id: 3, isDone: true, coinNum: 2, word: "남자" },
                { id: 4, isDone: true, coinNum: 2, word: "여자" },
              ],
              WordCoin3: [
                { id: 20, isDone: true, coinNum: 3, word: "기차" },
                { id: 21, isDone: true, coinNum: 3, word: "그림" },
                { id: 22, isDone: true, coinNum: 3, word: "디저트" },
                { id: 23, isDone: true, coinNum: 3, word: "해변" },
                { id: 24, isDone: true, coinNum: 3, word: "숲" },
              ],
              WordCoin4: [
                { id: 40, isDone: true, coinNum: 4, word: "먹는다" },
                { id: 41, isDone: true, coinNum: 4, word: "그린다" },
                { id: 42, isDone: true, coinNum: 4, word: "논다" },
                { id: 42, isDone: true, coinNum: 4, word: "쉰다" },
                { id: 42, isDone: true, coinNum: 4, word: "걷는다" },
              ],
            },
            imgUrl: [],
            likeImgs: [],
          });
          console.log("저장완료");
          const savedUser = await userCollection.findOne({ useremail: email });
          return res
            .status(200)
            .json({ message: "User saved successfully", users: savedUser });
        }
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
      }
      break;
    /* 사용자 등록, 로그인  */

    case "PUT":
      try {
        const { useremail, updateCoin, updateWord, wordName } = req.body;

        const result = await db.collection("user").updateOne(
          { useremail: useremail },
          {
            $set: { coin: updateCoin },
            $addToSet: { [wordName]: { $each: updateWord } },
          }
        );
        res.status(200).json(result);
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
      }
      break;
    /* 코인 차감 , 단어주기 */

    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
