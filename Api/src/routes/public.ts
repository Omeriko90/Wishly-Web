import List from "@/models/List";
import Wish from "@/models/Wish";
import express, { Request, Response } from "express";
import { Types } from "mongoose";

const router = express.Router();

router.put("/wish/:id/select", async (req: Request, res: Response) => {
  const wishId = req.params.id;
  const body = req.body;
  const wish = await Wish.findByIdAndUpdate(
    wishId,
    {
      giver: { fullName: body.fullName, email: body.email },
    },
    { new: true }
  );
  return res.status(200).send(wish);
});

router.get("/list/:id", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const list = await List.findById(new Types.ObjectId(listId));

  return res.status(200).send(list);
});

router.get("/list/:id/wishes", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const list = await Wish.find({ listId: new Types.ObjectId(listId) });

  return res.status(200).send(list);
});

export default router;
