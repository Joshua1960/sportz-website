import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sportz server: alive");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
