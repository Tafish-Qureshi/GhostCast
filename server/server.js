require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 3000;

const cors = require("cors");
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Or restrict to specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-ttrs-date', 'x-ttrs-files-count', 'x-ttrs-filename', 'Request-Type'],
    credentials: true
}));


app.get("/api/streams", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=gaming&key=${process.env.YOUTUBE_API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});