import mongoose from "mongoose";
import { model } from "mongoose";

const { Schema } = mongoose;

export interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserInterface>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<UserInterface>("User", UserSchema);
