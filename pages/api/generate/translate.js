import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { source, target, text } = req.body;
    const client_id = "t8efNsy5ivFgLhkasKIr";
    const client_secret = "XU3nPVAzaA";
    const api_url = "https://openapi.naver.com/v1/papago/n2mt";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charSet=UTF-8",
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    };
    const params = new URLSearchParams();
    params.append("source", source);
    params.append("target", target);
    params.append("text", text);

    try {
      const { data } = await axios.post(api_url, params, { headers });
      res
        .status(200)
        .json({ translatedText: data.message.result.translatedText });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
