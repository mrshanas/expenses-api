import express from "express";

import { allUsers, createUser, getToken } from "./controllers.js";
import { checkAuth } from "../../middlewares/auth.js";

const router = express.Router();

router.route("/").get(checkAuth, allUsers).post(createUser);

router.route("/token").post(getToken);

export default router;
