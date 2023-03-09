import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  //otehrs 페이지 접속 시 DB에 저장된 유저들의 데이터를 받아온다.
  if (req.method === "GET") {
    try {
      const fullDBData = await userCollection.find().toArray();

      res.status(200).json(fullDBData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "POST") {
    try {
      const { likeData } = req.body;
      console.log(likeData);
      const filter = {
        $and: [{ "imgUrl.url": likeData.url }, { name: likeData.name }],
      };
      const update = { $inc: { "imgUrl.$.like": 1 } };
      userCollection.updateOne(filter, update, (err, res) => {
        console.log(res.matchedCount);
        if (err) throw err;
        console.log(`document updated`);
      });
      res.status(200).json({ dd: "dd" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
