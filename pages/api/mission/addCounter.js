import { connectToDatabase } from "@/database/connect";

export const config = {
  api: {
    bodyParser: true, // ✅ Next.js에서 JSON body 파싱 활성화
  },
};
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
    const { email } = req.body; // ✅ req.body가 JSON 형식으로 파싱됨
    console.log("Received email:", email);

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const result = await userCollection.updateOne(
        { useremail: email },
        { $inc: { missionCount: 1 } }
      );

      console.log(`Mission attempts updated for ${result.modifiedCount} user.`);
      res.status(200).json({ message: "Mission attempts updated." });
    } catch (error) {
      console.error("Error updating mission count:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
