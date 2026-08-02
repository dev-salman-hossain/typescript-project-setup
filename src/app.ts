import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./app/routes/routes.js";
import notFound from "./app/middleware/notFound.js";
import globalError from "./app/middleware/globalError.js";

const app: Application = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.use(notFound);
app.use(globalError);

export default app;