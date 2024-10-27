import express, { Request, Response } from "express";
import { Types } from "mongoose";
import User from "@/models/User";
import List from "@/models/List";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const body = req.body;
  if (!Object.keys(body || {}).length || !body.email || !body.password) {
    return res
      .status(400)
      .send("Bad request. Email and/or Password is missing");
  }
  const { fullName, email, password } = body;
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  if (!emailRegex.test(email)) {
    return res.status(400).send("Bad request. Invalid email address");
  }
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).send("Bad request. User is already exists.");
  }

  const newUser = await User.create({
    fullName,
    email,
    password,
    _id: new Types.ObjectId(),
  });

  res.status(201).send(newUser);
});

router.post("/login", async (req: Request, res: Response) => {
  const body = req.body;

  if (!Object.keys(body || {}).length || !body.email || !body.password) {
    return res
      .status(400)
      .send("Bad request. Email and/or Password is missing");
  }

  const user = await User.findOne({ email: body.email });
  if (!user) {
    return res.status(400).send("Bad request. User doesn't exists");
  }

  const isCorrectPassword = user?.password === body.password;

  if (!isCorrectPassword) {
    return res
      .status(400)
      .send("Bad request. Email and/or Password are incorrect");
  }

  return res.status(200).send(user);
});

router.get("/", async (req: Request, res: Response) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).send("Bad request. User ID is required");
  }

  const list = await User.findById(new Types.ObjectId(userId as string));

  res.status(201).send(list);
});

router.get("/:userId/lists", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const lists = await List.find({ user_id: new Types.ObjectId(userId) });

  res.status(200).send(lists);
});

export default router;
