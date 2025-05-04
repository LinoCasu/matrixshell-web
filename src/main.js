// src/main.js
import MatrixShell from "./matrixshell.js";

document.addEventListener("DOMContentLoaded", () => {
  const shellEl = document.getElementById("shell");
  const inputEl = document.getElementById("cmd");
  new MatrixShell(shellEl, inputEl);
});
