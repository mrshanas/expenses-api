import express from "express";

import { checkAuth } from "../../middlewares/auth.js";
import { allAccounts, createAccount } from "./controllers.js";

const router = express.Router();

router.route("/").get(checkAuth, allAccounts).post(checkAuth, createAccount);

export default router;
