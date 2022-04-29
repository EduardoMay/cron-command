import { Router } from "express";
import {
  startCronCommand,
  stopCron,
} from "../controllers/cron.controller";

const router = Router();

router.post("/start-command", startCronCommand);
router.get("/stop", stopCron);

export default router;
