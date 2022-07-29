import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = () =>
  mongoose
    .connect(MONGO_URI)
    .then(console.log("connected to the db"))
    .catch((err) => process.exit(1));
