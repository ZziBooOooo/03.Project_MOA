import { connectToDatabase } from "@/database/connect";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { client } = await connectToDatabase();
        const db = client.db("DataMoa");
        const users = await db.collection("user").find({ _id: 4 }).toArray();
        res.status(200).json(users);
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
      }
      break;

    case "PUT":
      try {
        const { client } = await connectToDatabase();
        const db = client.db("DataMoa");

        // 요청의 body에서 필요한 데이터 추출
        const { userId, updateCoin, updateWord, wordName } = req.body;

        // 수정할 데이터를 찾아서 업데이트

        const result = await db.collection("user").updateOne(
          { _id: userId },
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

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).json({ error: `Method ${method} not allowed` });
  }
};
