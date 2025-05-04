// src/matrixshell.js

import commands      from "../commands.json";
import talkTriggers  from "../chat_triggers.json";
import { talkTo, bye } from "./talk.js";
import { startRain, stopRain } from "./rain.js";
import { showQuote }  from "./quote.js";
import { hackMatrix } from "./hack.js";

export default class MatrixShell {
  constructor(outputEl, inputEl) {
    this.outputEl   = outputEl;
    this.inputEl    = inputEl;
    this.rainActive = false;

    this._printLine("Welcome to the Matrix Terminal Simulator. Type 'help' for commands.");
    this.inputEl.addEventListener("keydown", e => {
      if (e.key === "Enter") this._handleInput();
    });
  }

  _handleInput() {
    const raw = this.inputEl.value.trim();
    this.inputEl.value = "";
    this._printLine(`$ ${raw}`);

    // If a talk-session is active, route input there first
    if (window.nextTalkInput) {
      window.nextTalkInput(raw);
    } else {
      this._dispatch(raw);
    }

    this.inputEl.focus();
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }

  _printLine(text) {
    const line = document.createElement("div");
    line.textContent = text;
    this.outputEl.appendChild(line);
  }

  _dispatch(input) {
    if (!input) return;
    const lower = input.toLowerCase();

    // -- Utilities --
    if (lower === "clear") {
      this.outputEl.innerHTML = "";
      return;
    }
    if (lower === "date") {
      this._printLine(new Date().toString());
      return;
    }
    if (lower.startsWith("echo ")) {
      this._printLine(input.slice(5));
      return;
    }
    if (lower === "whoami") {
      this._printLine("matrix_user");
      return;
    }

    // -- Help --
    if (lower === "help") {
      this._printLine("Available commands:");
      commands.forEach(c => {
        this._printLine(`  ${c.pattern} → ${c.desc}`);
      });
      return;
    }

    // -- Rain Toggle --
    if (lower === "rain") {
      this.rainActive = !this.rainActive;
      if (this.rainActive) startRain();
      else                stopRain();
      return;
    }

    // -- Random Quote --
    if (lower === "quote") {
      showQuote(this._printLine.bind(this));
      return;
    }

    // -- Hack Simulation --
    if (lower === "hack") {
      hackMatrix(this._printLine.bind(this));
      return;
    }

    // -- Talk with Characters --
    for (let trig of talkTriggers) {
      if (new RegExp(`^${trig.pattern}$`).test(lower)) {
        const character = trig.intent.replace("talk ", "");
        talkTo(character, this._printLine.bind(this));
        return;
      }
    }

    // -- Exit / Bye --
    if (lower === "exit" || lower === "bye") {
      bye(this._printLine.bind(this));
      return;
    }

    // -- Fallback --
    this._printLine(`Unknown command: ${input}`);
  }
}
