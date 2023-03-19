import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    const { email } = req.body;
    // 해당 이메일을 가진 사용자를 찾아서 missionCount를 1 증가시킵니다.
    const result = await userCollection.updateOne(
      { useremail: req.body.email },
      { $inc: { coin: 1 } }
    );

    console.log(`Mission attempts updated for ${result.modifiedCount} user.`);
    res.status(200).json({ message: "Mission attempts updated." });
  }
}
