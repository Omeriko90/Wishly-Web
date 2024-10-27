import mongoose from "mongoose";
const { Schema } = mongoose;

const listSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  user_id: Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  date: Date,
  _id: Schema.Types.ObjectId,
  description: String,
});

export default mongoose.model("List", listSchema);
