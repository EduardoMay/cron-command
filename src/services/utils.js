const fsa = require("fs").promises;
const fs = require("fs");
const { execSync, exec } = require("child_process");
const dns = require("dns").promises;

/**
 * Verify file wpa_supplicant.conf is exists
 * @param {string} file
 * @return  {Boolean}  is exists
 */
export const fileExists = (file) => {
  const existsFile = fs.existsSync(file);

  if (existsFile) return true;
  else return false;
};

/**
 * Remove file wpa_supplicant
 * @param {String} pathFile path file
 * @return  {Promise<Boolean>}  Is remove
 */
export const removeFile = async (pathFile) => {
  try {
    await fsa.unlink(pathFile);

    console.log(`Remove: ${pathFile}`);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Run command bash
 * @param   {String}  command  command bash or console
 * @return  {Boolean}
 */
export const runCommand = (command) => {
  try {
    console.log(`Exec command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log(stdout);
    });

    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Verify access to internet
 * @param   {String}  dnsToConnect  url or ip
 * @return  {Promise<Boolean>} is connect to internet
 */
export const verifyInternet = async (dnsToConnect) => {
  try {
    await dns.lookup(dnsToConnect);

    console.log("Se establecido conexión a Internet ", dnsToConnect);

    return true;
  } catch (error) {
    console.log("Fallo la conexion a internet", dnsToConnect);
    return false;
  }
};
