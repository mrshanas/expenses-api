import mongoose from "mongoose";

import { Account } from "../accounts/models.js";
import { schemaObject } from "../../utils/common.js";

const expenseSchema = new mongoose.Schema(schemaObject, {
  timestamps: true,
});

expenseSchema.pre("save", async function (next) {
  const account = await Account.findById(this.account);
  account.balance -= this.amount;
  account.expenses.push(this._id);
  account.save();
  next();
});

export const Expense = mongoose.model("Expense", expenseSchema);
