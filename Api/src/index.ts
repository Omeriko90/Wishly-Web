import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import list from "@/routes/list";
import user from "@/routes/user";
import { default as PublicRouter } from "@/routes/public";
import bodyParser from "body-parser";
import path from "path";
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const uri: string =
  process.env.MONGODB_URI ||
  "mongodb+srv://omerdomb51:<Yarden5190!>@mygiftlistdb.tdwi6xc.mongodb.net/";

(async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
  } catch (error) {
    console.error(error);
  }
})();

app.use("/list", list);
app.use("/user", user);
app.use("/public", PublicRouter);
app.get("/*", (_req: Request, res: Response) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../../Client/index.html"));
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
