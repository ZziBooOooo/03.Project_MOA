import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    try {
      const moaData = req.body;
      console.log(moaData);

      const currentUser = await userCollection.findOne({
        _id: req.body.currentUserId,
      });
      // console.log(currentUser);

      const updateUserUrl = await userCollection.updateOne(
        { _id: req.body.currentUserId },
        {
          $push: {
            imgUrl: {
              title: moaData.title,
              type: moaData.type,
              style: moaData.style,
              url: moaData.url,
            },
          },
        }
      );

      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
