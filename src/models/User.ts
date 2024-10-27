import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: String,
  _id: Schema.Types.ObjectId,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: String,
});

export default mongoose.model("User", userSchema);
