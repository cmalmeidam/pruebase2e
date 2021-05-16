const { exec } = require("child_process");
const fs = require("fs");

const ARCHIVO_3_3_0 = "backstop3_3_0.json";
const ARCHIVO_3_42_5 = "backstop3_42_5.json";
const ARCHIVO_EJECUCION = "backstop.json";
const COMD_TEST = "backstop test"
const COMD_APPROVE = "backstop approve"

async function ejecucion() {
  await rename(ARCHIVO_3_3_0, ARCHIVO_EJECUCION);
  await ejecutarCmds(COMD_TEST);
  console.log("kugiua");
  await ejecutarCmds(COMD_APPROVE);
  console.log("kugiua");
  await rename(ARCHIVO_EJECUCION, ARCHIVO_3_3_0);
  console.log("kugiua");
  await rename(ARCHIVO_3_42_5, ARCHIVO_EJECUCION);
  console.log("kugiua");
  await ejecutarCmds(COMD_TEST);
  console.log("kugiua");
  await rename(ARCHIVO_EJECUCION,ARCHIVO_3_42_5);
}

function rename(nombreAntes, nombreDespues) {
  return new Promise((resolve, reject) => {
    fs.rename(nombreAntes, nombreDespues, () => {
      console.log("Se cambia nombre de : ", nombreAntes, " a: ", nombreDespues);
      setTimeout(function () {
        resolve("¡Éxito!");
      }, 250);
    });
  });
}

function ejecutarCmds(comando) {
  return new Promise((resolve, reject) => {
    exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        setTimeout(function () {
          resolve("¡Éxito!");
        }, 250);
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        setTimeout(function () {
          resolve("¡Éxito!");
        }, 250);
      }
      console.log(`stdout: ${stdout}`);
      setTimeout(function () {
        resolve("¡Éxito!");
      }, 250);
    });
  });
}

(async () => console.log(await ejecucion()))();
