import { connectToDatabase } from "@/database/connect";

export default async (req, res) => {
  try {
    const { client } = await connectToDatabase();
    const db = client.db("DataMoa"); /* 큰제목 */
    const users = await db
      .collection("user") /* 작은제목 */
      .find({ _id: 2 })
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.json(users);
  } catch (e) {
    console.error(e);
  }
};
