import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    try {
      console.log(req.body);

      const currentUser = await userCollection.findOne({
        _id: req.body.currentUserId,
      });
      console.log(currentUser);

      // 유저의 imgUrl객체 안에 배열의 형태로
      // title, type, style, url을 저장시켜야 한다.

      // const updateUserUrl = await userCollection.updateOne(
      //   { _id: req.body.currentUserId },
      //   { $push: { imgUrl: req.body.url } }
      // );

      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
