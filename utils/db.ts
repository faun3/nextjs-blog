import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      console.log("MONGO key is not present  in local .env file");
      throw new Error("mongo key not present in .env");
    } else {
      await mongoose.connect(process.env.MONGO);
    }
  } catch (error) {
    throw new Error("connection failed");
  }
};

export default connect;
