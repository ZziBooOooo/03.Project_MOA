import { connectToDatabase } from "@/database/connect";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const { client } = await connectToDatabase();
      const db = client.db("DataMoa");
      const users = await db
        .collection("user")
        .find({ _id: 1 })
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray();
      res.status(200).json(users);
    } catch (e) {
      console.error(e);
    }
  }
};
