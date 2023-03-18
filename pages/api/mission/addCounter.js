import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "GET") {
    try {
      const currentUserEmail = req.query.email;
      const currentUser = await userCollection.findOne({
        useremail: currentUserEmail,
      });
      res.status(200).json(currentUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  }
  if (req.method === "POST") {
    const { email } = req.body;
    // 해당 이메일을 가진 사용자를 찾아서 missionCount를 1 증가시킵니다.
    const result = await userCollection.updateOne(
      { useremail: req.body.email },
      { $inc: { missionCount: 1 } }
    );

    console.log(`Mission attempts updated for ${result.modifiedCount} user.`);
    res.status(200).json({ message: "Mission attempts updated." });
  }
}
