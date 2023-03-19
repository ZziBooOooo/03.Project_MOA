import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  // console.log(req.body.liked);

  //otehrs 페이지 접속 시 DB에 저장된 유저들의 데이터를 받아온다.
  if (req.method === "GET") {
    try {
      const fullDBData = await userCollection.find().toArray();
      res.status(200).json(fullDBData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "POST" && req.body.liked == true) {
    console.log("추가");
    // console.log(req.body.liked);
    try {
      const { likeData, currentUserId, currentName } = req.body;

      // 좋아요한 이미지의 likecount를 증가시킨다
      const filter = {
        $and: [{ "imgUrl.url": likeData.url }, { name: likeData.name }],
      };
      const update = { $inc: { "imgUrl.$.like": 1 } };
      userCollection.updateOne(filter, update, (err, res) => {
        // console.log(res.matchedCount); // 이미지 url과 이름이 동일한 결과의 수
        if (err) throw err;
        console.log(`document add complete`);
      });

      userCollection.updateOne(
        { name: currentName },
        { $push: { likeImgs: likeData } },
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
      // 현재 유저의 좋아요목록에 추가한다.
      // 이미 존재하는 데이터라면 ? -> 하트 클릭 못하게 막아놓을거니까 괜찮을까?

      res.status(200).json({ status: "post success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "POST" && req.body.liked == false) {
    console.log("삭제");
    // console.log(req.body.liked);
    try {
      const { likeData, currentUserId, currentName } = req.body;
      const filter = {
        $and: [{ "imgUrl.url": likeData.url }, { name: likeData.name }],
      };
      const update = { $inc: { "imgUrl.$.like": -1 } };
      userCollection.updateOne(filter, update, (err, res) => {
        console.log(res.matchedCount); // 이미지 url과 이름이 동일한 결과의 수
        if (err) throw err;
        console.log(`document delete complete`);
      });

      userCollection.updateOne(
        { name: currentName },
        { $pull: { likeImgs: { url: likeData.url } } }
      );

      res.status(200).json({ status: "delete success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
