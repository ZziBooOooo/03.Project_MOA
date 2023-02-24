import { MongoClient } from "mongodb";

// db 연결 -> env로 분리해서 각자 사용
const client = new MongoClient(
  "mongodb+srv://zziboo:1234@projecttest.tmrculx.mongodb.net/data?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db("data");
  return { client, db };
}
