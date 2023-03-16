import cron from "node-cron";
import { connectToDatabase } from "@/database/connect";

// 매일 12시에 실행
cron.schedule("35 22 * * *", async () => {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  const result = await userCollection.updateMany(
    {},
    { $set: { missionCount: 0 } }
  ); // 미션 도전 횟수 초기화
  console.log(`Reset mission attempts for ${result.modifiedCount} users.`);
});
