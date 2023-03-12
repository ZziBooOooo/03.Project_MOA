import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    const { coin } = req.body;

    try {
      const insertResult = await userCollection.insertOne({
        coin,
      });

      return res.status(200).send("User saved successfully");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal server error");
    }
  }
}
