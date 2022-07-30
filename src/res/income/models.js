import mongoose from "mongoose";
import { Account } from "../accounts/models.js";

import { schemaObject } from "../../utils/common.js";

const incomeSchema = new mongoose.Schema(schemaObject, { timestamps: true });

incomeSchema.pre("save", async function (next) {
  const account = await Account.findById(this.account);
  account.balance += this.amount;
  account.incomes.push(this._id);
  account.save();
  next();
});

export const Income = mongoose.model("Income", incomeSchema);
