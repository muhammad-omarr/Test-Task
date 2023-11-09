const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

app.get("/api/cards", async (req, res) => {
  const { name, pageSize, page } = req.query;

  try {
    const response = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${name}&pageSize=${pageSize}&page=${page}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
