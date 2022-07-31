import mongoose from "mongoose";

import { Expense } from "../expenses/models.js";
import { Income } from "../income/models.js";

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide an account name"],
      unique: true,
    },
    accountType: {
      type: String,
      enum: ["Bank", "Wallet", "Cash"],
    },
    balance: {
      type: Number,
      required: [true, "Please provide initial balance for your account"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expenses: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Expense",
      default: [],
    },
    incomes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Income",
      default: [],
    },
  },
  { timestamps: true }
);

accountSchema.post("deleteOne", async function (next) {
  try {
    await Expense.deleteMany({ _id: this.expenses });
    await Income.deleteMany({ _id: this.incomes });

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export const Account = mongoose.model("Account", accountSchema);
