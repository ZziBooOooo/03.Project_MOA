export default async function handler(req, res) {
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_APIKEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.query.p,
    n: parseInt(req.query.n),
    size: "256x256",
  });
  console.log(req.query.p);
  // console.log(response.data.data);
  res.status(200).json({ result: response.data.data });

  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
}
