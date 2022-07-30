import { Expense } from "./models.js";

export const allExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find({});

    return res.status(200).json({ expenses });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// endpoint:POST - api/accounts/?account=<MongoDbId>
export const createExpense = async (req, res, next) => {
  // query params the account id
  const { amount, description, category } = req.body;
  const { account } = req.query;

  try {
    const expense = await Expense.create({
      amount,
      description,
      category: category.toLowerCase(),
      account,
      user: req.user._id,
    });

    if (!expense) return;

    return res.status(201).json({ expense });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
