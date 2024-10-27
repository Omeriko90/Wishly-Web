import express, { Request, Response } from "express";
import List from "@/models/List";
import { Types } from "mongoose";
import Wish from "@/models/Wish";
import { default as WishType } from "@/types/wish";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { list } = req.body;
  const { title, user_id, description, date } = list;

  const newList = await List.create({
    _id: new Types.ObjectId(),
    title,
    user_id,
    date: new Date(date).toISOString(),
    description,
  });

  return res.status(201).send(newList);
});

router.get("/:id", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const list = await List.findById(new Types.ObjectId(listId));

  return res.status(200).send(list);
});
router.get("/:id/wishes", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const list = await Wish.find({ listId: new Types.ObjectId(listId) });

  return res.status(200).send(list);
});
router.put("/:id/wishes", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const body = req.body;
  const wishes = body.wishes;
  const promises: Promise<any>[] = [];

  wishes.forEach((wish: WishType) => {
    console.log(wish);
    if (wish._id) {
      console.log("object");
      promises.push(
        Wish.findOneAndUpdate(
          { _id: new Types.ObjectId(wish._id) },
          { ...wish, listId },
          { upsert: true }
        )
      );
    } else {
      promises.push(
        Wish.create({ ...wish, _id: new Types.ObjectId(), listId })
      );
    }
  });
  const wishesObj = await Promise.all(promises);
  return res.status(200).send(wishesObj);
});

router.put("/:id", async (req: Request, res: Response) => {
  const listId = req.params.id;
  const { title, description, date } = req.body;
  const updateList = await List.findByIdAndUpdate(
    listId,
    { title, description, date },
    { new: true }
  );

  return res.status(200).send(updateList);
});

export default router;
