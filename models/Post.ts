import mongoose from "mongoose";
import { model } from "mongoose";

const { Schema } = mongoose;

export interface PostInterface {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

const PostSchema = new Schema<PostInterface>(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

// prevents ModelOverride error
export default mongoose.models.Post || model<PostInterface>("Post", PostSchema);
