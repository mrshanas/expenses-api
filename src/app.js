import express from "express";
import morgan from "morgan";
import "dotenv/config";

import userRoutes from "./res/users/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/users", userRoutes);

export default app;
