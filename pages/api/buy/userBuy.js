import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { client } = await connectToDatabase();
        const db = client.db("DataMoa");
        const users = await db
          .collection("user")
          .findOne({ useremail: req.query.email });
        res.status(200).json(users);
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
      }
      break;
    /* 사용자 데이터 가져오기 */

    case "POST":
      try {
        const { client } = await connectToDatabase();
        const db = client.db("DataMoa");

        const { name, email, profil } = req.body;
        const existingUser = await db
          .collection("user")
          .findOne({ useremail: email });
        if (existingUser && existingUser.useremail == email) {
          console.log("등록된 사용자");
          return;
        } else {
          await db.collection("user").insertOne({
            useremail: email,
            name: name,
            coin: 24,
            words: { WordCoin2: [], WordCoin3: [], WordCoin4: [] },
            imgeUrl: [],
            profil: profil,
          });
          console.log("저장완료");
          return res.status(200).send("User saved successfully");
        }
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
      }
      break;
    /* 사용자 등록, 로그인  */

    case "PUT":
      try {
        const { client } = await connectToDatabase();
        const db = client.db("DataMoa");
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
