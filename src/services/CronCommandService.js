import cron from "node-cron";
import { runCommand } from "./utils";
import dayjs from "dayjs";

/**
 * Ejecutar cada cierto tiempo la API para que no se apague el servidor.
 */
export class CronCommandService {
  /**
   * @type {cron.ScheduledTask}
   */
  taskCommand;

  /**
   * @type {string}
   */
  command;

  /**
   * @type {string}
   */
  timeCron;

  /**
   * @param {string} command
   * @param {string} timeCron
   */
  startCommand(command, timeCron) {
    this.command = command;
    this.timeCron = timeCron;

    if (!this.taskCommand)
      this.taskCommand = cron.schedule(this.timeCron, () => {
        try {
          const time = dayjs().format("hh:mm:ss");
          const logDate = `Hora: ${time}`;

          console.log(logDate);
          console.log(this.command);
          runCommand(this.command);
        } catch (error) {
          console.log(error);
        }
      });
  }

  stop() {
    if (this.taskCommand) this.taskCommand.stop();
  }
}
