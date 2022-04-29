import { CronCommandService } from "../services/CronCommandService";

const autoRunApi = new CronCommandService();

/**
 * Start cron job
 * @param   {import("express").Request}  req
 * @param   {import("express").Response}  res
 * @returns {Promise}
 */
export const startCronCommand = async (req, res) => {
  const command = req.body.command + "";
  const timeCron = req.body.time + "";

  autoRunApi.startCommand(command, timeCron);

  res.json({ message: "Run cron", command, timeCron });
};

/**
 * Stop cron job
 * @param   {import("express").Request}  _req  request
 * @param   {import("express").Response}  res   response
 * @return  {Promise<*>}
 */
export const stopCron = async (_req, res) => {
  autoRunApi.stop();

  res.json({ message: "Stop cron" });
};
