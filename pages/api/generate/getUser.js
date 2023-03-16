import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  // word 페이지 접속 시 DB에 저장된 유저의 단어목록을 받아온다.
  // db연결
  if (req.method === "GET") {
    try {
      const currentUser = await userCollection.findOne({
        _id: currentUserId,
      });
    } catch {}
  }
}
