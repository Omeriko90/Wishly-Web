import mongoose from "mongoose";
const { Schema } = mongoose;

const wishSchema = new Schema({
  url: String,
  price: String,
  title: String,
  description: String,
  listId: Schema.Types.ObjectId,
  giver: {
    fullName: String,
    email: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  _id: Schema.Types.ObjectId,
});

export default mongoose.model("Wish", wishSchema);
