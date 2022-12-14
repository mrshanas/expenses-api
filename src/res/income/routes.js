import express from "express";

import { checkAuth } from "../../middlewares/auth.js";
import { allIncomes, createIncome } from "./controllers.js";

const router = express.Router();

router.route("/").get(checkAuth, allIncomes).post(checkAuth, createIncome);

export default router;
