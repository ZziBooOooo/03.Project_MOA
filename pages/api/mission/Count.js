import { connectToDatabase } from "@/database/connect";

// 매일 12시에 실행
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("Resetting missionCount at 12:00 PM KST...");

    const { client } = await connectToDatabase();
    const database = client.db("DataMoa");
    const userCollection = database.collection("user");

    // 모든 사용자의 missionCount를 0으로 초기화
    const result = await userCollection.updateMany(
      {},
      { $set: { missionCount: 0 } }
    );

    console.log(`Mission count reset for ${result.modifiedCount} users.`);
    return res
      .status(200)
      .json({ message: "Mission count reset successfully." });
  } catch (error) {
    console.error("Error resetting missionCount:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
