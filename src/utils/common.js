import mongoose from "mongoose";

export const schemaObject = {
  amount: {
    type: Number,
    required: [true, "Please provide an amount"],
  },
  description: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    enum: ["shopping", "food", "movies", "learning"],
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
};
