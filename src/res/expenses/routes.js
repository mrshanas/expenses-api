import express from "express";

import { checkAuth } from "../../middlewares/auth.js";
import { allExpenses, createExpense } from "./controllers.js";

const router = express.Router();

router.route("/").get(checkAuth, allExpenses).post(checkAuth, createExpense);

export default router;
