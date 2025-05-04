// rollup.config.js
import resolve    from "@rollup/plugin-node-resolve";
import commonjs   from "@rollup/plugin-commonjs";
import json       from "@rollup/plugin-json";

export default {
  input:  "src/main.js",
  output: {
    file:      "dist/index.bundle.js",
    format:    "iife",
    name:      "MatrixShellWeb",
    sourcemap: true,
  },
  plugins: [
    // erst Auflösung von node_modules/browser‑imports
    resolve({ browser: true }),
    // dann JSON‑Imports ermöglichen
    json(),
    // dann CommonJS → ES umwandeln
    commonjs(),
  ],
};
