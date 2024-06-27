import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { p } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    if (!p) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const response = await axios.post("https://api.openai.com/v1/images/generations", {
      prompt: p,
      n: 3,
      size: "256x256",
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_APIKEY}`,
      },
    });

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error("No data returned from OpenAI API");
    }

    res.status(200).json({ result: response.data.data });

  } catch (error) {
    console.error("Error generating image:", error.response);
    res.status(500).json({ error: "Failed to generate image" });
  }
}
