import mongoose from "mongoose";
import config from "./env";

const uri: string = config.mongodb_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongodb successfully connected ...");
  } catch (e) {
    console.error("mongodb connection failed :", e);
    process.exit(1);
  }
};

export default connectDB;
