import express from "express";
import morgan from "morgan";
import "dotenv/config";

import userRoutes from "./res/users/routes.js";
import accountRoutes from "./res/accounts/routes.js";
import expenseRoutes from "./res/expenses/routes.js";
import incomeRoutes from "./res/income/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/incomes", incomeRoutes);

export default app;
