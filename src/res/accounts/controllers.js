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

export const getAccount = async (req, res, next) => {
  const { id } = req.params;

  try {
    const account = await Account.find({ _id: id })
      .populate("expenses")
      .populate("incomes");
    console.log(account);
    if (!account)
      return res.status(404).json({ error: "Account doesn't exist" });

    return res.status(200).json({ account });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const updateAccount = async (req, res, next) => {};
export const deleteAccount = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Account.findByIdAndDelete(id, (err, account) => {
      if (!err) {
        return res.status(204).json({ error: "Successfully deleted" });
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
