import express from "express";

import {
  allUsers,
  createUser,
  getToken,
  getUser,
  updateUser,
  deleteUser,
} from "./controllers.js";
import { checkAuth } from "../../middlewares/auth.js";

const router = express.Router();

router.route("/token").post(getToken);

router.route("/").get(checkAuth, allUsers).post(createUser);
router
  .route("/:id")
  .get(checkAuth, getUser)
  .post(checkAuth, updateUser)
  .delete(checkAuth, deleteUser);

export default router;
