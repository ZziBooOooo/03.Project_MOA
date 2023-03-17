import { connectToDatabase } from "@/database/connect";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { client } = await connectToDatabase();
  const database = client.db("DataMoa");
  const userCollection = database.collection("user");

  if (req.method === "POST") {
    try {
      const { currentUserEmail, title, type, style, url, imgId } = req.body;

      const cloudinary = require("cloudinary").v2;
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      const dirPath = path.join(process.cwd(), "public/images");
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const imagePath = path.join(dirPath, `${currentUserEmail}_${imgId}.jpg`);
      const imageBuffer = await fetch(url).then((res) => res.arrayBuffer());
      fs.writeFileSync(imagePath, Buffer.from(imageBuffer));

      const result = await cloudinary.uploader.upload(imagePath, {
        public_id: `user_${currentUserEmail}/${title}`,
        folder: `userId_${currentUserEmail}`,
        context: { type, style },
      });

      const currentUser = await userCollection.findOne({
        useremail: currentUserEmail,
      });
      // console.log(currentUser);

      const updateUserUrl = await userCollection.updateOne(
        { useremail: currentUserEmail },
        {
          $push: {
            imgUrl: {
              title: title,
              type: type,
              style: style,
              url: result.secure_url,
              like: 0,
              imgId,
            },
          },
        }
      );
      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
