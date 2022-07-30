import express from "express";
import morgan from "morgan";
import cors from "cors";
import CronRoutes from "./routes/cron";

const app = express();

// setting
const port = process.argv.slice(2)[0];
app.set("port", +port);

// middleware
app.use(
  cors({
    origin: "*",
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome Cron Command" });
});

app.use("/api/v1/cron", CronRoutes);

export default app;
