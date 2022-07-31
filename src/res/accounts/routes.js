import express from "express";

import { checkAuth } from "../../middlewares/auth.js";
import {
  allAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} from "./controllers.js";

const router = express.Router();

router.route("/").get(checkAuth, allAccounts).post(checkAuth, createAccount);

router
  .route("/:id")
  .get(checkAuth, getAccount)
  .post(checkAuth, updateAccount)
  .delete(checkAuth, deleteAccount);

export default router;
