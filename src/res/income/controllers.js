import { Income } from "./models.js";

export const allIncomes = async (req, res, next) => {
  try {
    const incomes = await Income.find({});

    return res.status(200).json({ incomes });
  } catch (error) {}
};

export const createIncome = async (req, res, next) => {
  const { amount, description, category } = req.body;
  const { account } = req.query;

  try {
    const income = await Income.create({
      amount,
      description,
      category: category.toLowerCase(),
      account,
      user: req.user._id,
    });

    if (!income) return;

    return res.status(201).json({ income });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
