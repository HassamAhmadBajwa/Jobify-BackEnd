import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";

const app = express();
dotenv.config();

const jobs = [
  { id: nanoid(), company: "google", job: "front-end" },
  { id: nanoid(), company: "facebook", job: "back-end" },
];
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server Wroking on port ${port} ...`);
});
