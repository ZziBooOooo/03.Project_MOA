import { connectToDatabase } from "@/database/connect";

// 매일 12시에 실행
const CronJob = require("cron").CronJob;

const job = new CronJob(

  "0 0 * * *",

  async function () {
    console.log("일해라 working!!");
    const { client } = await connectToDatabase();
    const database = client.db("DataMoa");
    const userCollection = database.collection("user");
    try {
      // 모든 사용자의 missionCount 필드를 0으로 초기화
      await userCollection.updateMany({}, { $set: { missionCount: 0 } });
      console.log("All users missionCount initialized to 0.");
    } catch (error) {
      console.error("Error initializing missionCount:", error);
    }
  },
  null,
  true,
  "Asia/Seoul"
);

job.start();

export default function handler(req, res) {
  res.status(200).json({ message: "Cron job started." });
}
