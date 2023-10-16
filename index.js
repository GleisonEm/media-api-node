import express, { json, urlencoded } from "express";
import cors from "cors";
import { TiktokController } from "./app/controllers/TiktokController";

const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/tiktok", (req, res) => { new TiktokController().getVideo(res, req) });


const PORT = process.env.PORT || 3025;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});