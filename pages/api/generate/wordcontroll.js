import { connectToDatabase } from "@/database/connect";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  // word 페이지 접속 시 DB에 저장된 유저의 단어목록을 받아온다.
  if (req.method === "GET") {
    try {
      const currentUserId = parseInt(req.query.currentUserId);
      const currentUser = await userCollection.findOne({
        _id: currentUserId,
      });

      res.status(200).json(currentUser.words);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
    /*  try {
      const insertResult = await userCollection.insertOne({
        _id: 1,
        name: "찌부",
        email: "zziboo1231@gmail.com",
        coin: 24,
        words: {
          WordCoin2: [
            { id: 0, isDone: true, coinNum: 2, word: "고양이" },
            { id: 1, isDone: true, coinNum: 2, word: "강아지" },
            { id: 2, isDone: true, coinNum: 2, word: "토끼" },
            { id: 3, isDone: true, coinNum: 2, word: "나비" },
            { id: 4, isDone: true, coinNum: 2, word: "말" },
            { id: 5, isDone: true, coinNum: 2, word: "호랑이" },
            { id: 6, isDone: true, coinNum: 2, word: "사자" },
            { id: 7, isDone: true, coinNum: 2, word: "펭귄" },
            { id: 8, isDone: true, coinNum: 2, word: "얼룩말" },
            { id: 9, isDone: true, coinNum: 2, word: "알파카" },
            { id: 10, isDone: true, coinNum: 2, word: "사슴" },
            { id: 11, isDone: true, coinNum: 2, word: "여우" },
            { id: 12, isDone: true, coinNum: 2, word: "판다" },
            { id: 13, isDone: true, coinNum: 2, word: "표범" },
            { id: 14, isDone: true, coinNum: 2, word: "양" },
            { id: 15, isDone: true, coinNum: 2, word: "고슴도치" },
            { id: 16, isDone: true, coinNum: 2, word: "돌고래" },
            { id: 17, isDone: true, coinNum: 2, word: "곰" },
            { id: 18, isDone: true, coinNum: 2, word: "다람쥐" },
            { id: 19, isDone: true, coinNum: 2, word: "병아리" },
          ],
          WordCoin3: [
            { id: 20, isDone: true, coinNum: 3, word: "딸기" },
            { id: 21, isDone: true, coinNum: 3, word: "그림" },
            { id: 22, isDone: true, coinNum: 3, word: "간식" },
            { id: 23, isDone: true, coinNum: 3, word: "바다" },
            { id: 24, isDone: true, coinNum: 3, word: "침대" },
            { id: 25, isDone: true, coinNum: 3, word: "행복하게" },
            { id: 26, isDone: true, coinNum: 3, word: "열심히" },
            { id: 27, isDone: true, coinNum: 3, word: "무섭게" },
            { id: 28, isDone: true, coinNum: 3, word: "책상" },
            { id: 29, isDone: true, coinNum: 3, word: "소파" },
            { id: 30, isDone: true, coinNum: 3, word: "케이크" },
            { id: 31, isDone: true, coinNum: 3, word: "신나게" },
            { id: 32, isDone: true, coinNum: 3, word: "잔디" },
            { id: 33, isDone: true, coinNum: 3, word: "집" },
            { id: 34, isDone: true, coinNum: 3, word: "감옥" },
            { id: 35, isDone: true, coinNum: 3, word: "자신있게" },
            { id: 36, isDone: true, coinNum: 3, word: "숲" },
            { id: 37, isDone: true, coinNum: 3, word: "심각하게" },
            { id: 38, isDone: true, coinNum: 3, word: "주방" },
            { id: 39, isDone: true, coinNum: 3, word: "레스토랑" },
          ],
          WordCoin4: [
            { id: 40, isDone: true, coinNum: 4, word: "걷는다" },
            { id: 41, isDone: true, coinNum: 4, word: "본다" },
            { id: 42, isDone: true, coinNum: 4, word: "논다" },
            { id: 43, isDone: true, coinNum: 4, word: "먹는다" },
            { id: 44, isDone: true, coinNum: 4, word: "수영한다" },
            { id: 45, isDone: true, coinNum: 4, word: "잔다" },
            { id: 46, isDone: true, coinNum: 4, word: "말한다" },
            { id: 47, isDone: true, coinNum: 4, word: "만든다" },
            { id: 48, isDone: true, coinNum: 4, word: "싸운다" },
            { id: 49, isDone: true, coinNum: 4, word: "앉는다" },
            { id: 50, isDone: true, coinNum: 4, word: "잡는다" },
            { id: 51, isDone: true, coinNum: 4, word: "파티한다" },
            { id: 52, isDone: true, coinNum: 4, word: "포옹한다" },
            { id: 53, isDone: true, coinNum: 4, word: "쓴다" },
            { id: 54, isDone: true, coinNum: 4, word: "공부한다" },
            { id: 55, isDone: true, coinNum: 4, word: "산다" },
            { id: 56, isDone: true, coinNum: 4, word: "만난다" },
            { id: 57, isDone: true, coinNum: 4, word: "원한다" },
            { id: 58, isDone: true, coinNum: 4, word: "사랑한다" },
            { id: 59, isDone: true, coinNum: 4, word: "상상한다" },
          ],
        },
        imgUrl: [
          {
            title: "이미지 만들때 쓴 문장",
            type: "픽셀아트",
            style: "파스텔",
            url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-aTB6BIzQDcFAnGOcxnpz9Li9/user-C239QYwCgXjts3pgh2IosqRd/img-EH9G8eSPDcVg0zSLdFnsO3Bk.png?st=2023-02-26T07%3A31%3A18Z&se=2023-02-26T09%3A31%3A18Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-25T11%3A06%3A19Z&ske=2023-02-26T11%3A06%3A19Z&sks=b&skv=2021-08-06&sig=p%2BCMd0LQb4DwoIDyaxNOvbZ3ZU3PYkCJsNhiY/t/kho%3D",
          },
        ],
      });
      return res.status(200).send("User saved successfully");
    } catch {} */
  }
}
