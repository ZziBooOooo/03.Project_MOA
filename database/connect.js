import { MongoClient } from "mongodb";

// db 연결 -> env로 분리해서 각자 사용
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db("DataMoa");
  return { client, db };
}
