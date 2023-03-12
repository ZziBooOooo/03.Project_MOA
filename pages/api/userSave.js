import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    console.log("요청됨");

    const { name, email } = req.body;

    const existingUser = await userCollection.findOne({ 이메일: email });

    if (existingUser && existingUser.이메일 == email) {
      console.log("가입된 유저");
      return;
    } else {
      try {
        const insertResult = await userCollection.insertOne({
          _id: userCount,
          이름: name,
          이메일: email,
          코인: 0,
          단어: {
            coin2: [],
            coin3: [],
            coin4: [],
          },
          url: [],
        });

        console.log("저장완료");

        return res.status(200).send("User saved successfully");
      } catch (error) {
        console.error(error);
        return res.status(500).send("Internal server error");
      }
    }
  }

  if (req.method === "GET") {
    try {
      const currentUser = await userCollection.findOne({
        이메일: req.query.email,
      });
      console.log(currentUser);
      if (currentUser) {
        res.status(200).json({ status: "exist", 이메일: currentUser.이메일 });
      } else {
        res.status(200).json({ status: "noExist", 이메일: req.query.email });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
