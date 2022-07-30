import { Account } from "./models.js";

export const allAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find({}).select(["-user", "-__v"]);
    if (!accounts) return;

    return res.status(200).json({ accounts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const createAccount = async (req, res, next) => {
  try {
    const { name, accountType, balance } = req.body;

    const account = await Account.create({
      name,
      accountType,
      balance,
      user: req.user._id,
    });

    if (!account)
      return res.status(500).json({ error: "Internal server error" });

    return res.status(201).json({ account });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
