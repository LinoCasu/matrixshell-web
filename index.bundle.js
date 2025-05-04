(function () {
  'use strict';

  var commands = [
    { "pattern": "^help$",        "intent": "help",       "desc": "zeige alle Befehle" },
    { "pattern": "^rain$",        "intent": "rain",       "desc": "Matrix-Regen umschalten" },
    { "pattern": "^quote$",       "intent": "quote",      "desc": "Zufalls-Zitat" },
    { "pattern": "^hack$",        "intent": "hack",       "desc": "Hack simulieren" },
    { "pattern": "^talk\\s+neo$",       "intent": "talk neo",     "desc": "Sprich mit Neo" },
    { "pattern": "^talk\\s+trinity$",   "intent": "talk trinity", "desc": "Sprich mit Trinity" },
    { "pattern": "^talk\\s+morpheus$",  "intent": "talk morpheus","desc": "Sprich mit Morpheus" }
  ]
  ;

  var neo = "neo";
  var trinity = "trinity";
  var morpheus = "morpheus";
  var oracle = "oracle";
  var talkTriggers = {
  	neo: neo,
  	trinity: trinity,
  	morpheus: morpheus,
  	oracle: oracle
  };

  var start = {
  	speaker: "Morpheus",
  	text: "Do you believe in fate, Neo?",
  	options: {
  		A: {
  			text: "Yes, I do.",
  			next: "morpheus_fate_yes"
  		},
  		B: {
  			text: "No, I don't.",
  			next: "morpheus_fate_no"
  		}
  	}
  };
  var morpheus_fate_yes = {
  	speaker: "Morpheus",
  	text: "Then you already know what I'm going to say. But knowing and understanding are different.",
  	options: {
  		A: {
  			text: "Explain further.",
  			next: "morpheus_explain_matrix"
  		},
  		B: {
  			text: "I'm ready.",
  			next: "morpheus_offer_pills"
  		}
  	}
  };
  var morpheus_fate_no = {
  	speaker: "Morpheus",
  	text: "Good. Fate is a concept invented by those unwilling to change their destiny.",
  	options: {
  		A: {
  			text: "What is my destiny?",
  			next: "oracle_visit"
  		},
  		B: {
  			text: "I don't believe in destiny either.",
  			next: "morpheus_training"
  		}
  	}
  };
  var morpheus_explain_matrix = {
  	speaker: "Morpheus",
  	text: "The Matrix is everywhere. It is all around us. It is the world that has been pulled over your eyes to blind you from the truth.",
  	options: {
  		A: {
  			text: "What truth?",
  			next: "trinity_truth"
  		},
  		B: {
  			text: "I want to wake up.",
  			next: "morpheus_offer_pills"
  		}
  	}
  };
  var morpheus_offer_pills = {
  	speaker: "Morpheus",
  	text: "Take the blue pill — the story ends, you wake up in your bed and believe whatever you want to believe. Take the red pill — you stay in Wonderland.",
  	options: {
  		A: {
  			text: "Red pill.",
  			next: "trinity_real_world"
  		},
  		B: {
  			text: "Blue pill.",
  			next: "end_controlled"
  		}
  	}
  };
  var trinity_real_world = {
  	speaker: "Trinity",
  	text: "Welcome to the real world, Neo.",
  	options: {
  		A: {
  			text: "What now?",
  			next: "trinity_mission"
  		},
  		B: {
  			text: "Is it always this dark?",
  			next: "trinity_joke"
  		}
  	}
  };
  var trinity_mission = {
  	speaker: "Trinity",
  	text: "We free minds, Neo. That's our mission.",
  	options: {
  		A: {
  			text: "Let's do it.",
  			next: "training_simulation"
  		},
  		B: {
  			text: "What about the Agents?",
  			next: "agent_warning"
  		}
  	}
  };
  var oracle_visit = {
  	speaker: "Oracle",
  	text: "Being the One is like falling in love. No one can tell you you're in love, you just know it.",
  	options: {
  		A: {
  			text: "I think I understand.",
  			next: "oracle_guidance"
  		},
  		B: {
  			text: "I'm not sure.",
  			next: "oracle_patience"
  		}
  	}
  };
  var oracle_guidance = {
  	speaker: "Oracle",
  	text: "You have a good soul, Neo. Believe in it.",
  	options: {
  		A: {
  			text: "I will.",
  			next: "smith_encounter"
  		},
  		B: {
  			text: "I'm afraid.",
  			next: "trinity_encouragement"
  		}
  	}
  };
  var trinity_truth = {
  	speaker: "Trinity",
  	text: "The truth is that you are a slave, Neo. Like everyone else, you were born into bondage.",
  	options: {
  		A: {
  			text: "How do I break free?",
  			next: "training_simulation"
  		},
  		B: {
  			text: "Is there hope?",
  			next: "trinity_hope"
  		}
  	}
  };
  var training_simulation = {
  	speaker: "Morpheus",
  	text: "This is a training program. Your mind makes it real.",
  	options: {
  		A: {
  			text: "Teach me.",
  			next: "morpheus_training"
  		},
  		B: {
  			text: "I need to understand.",
  			next: "morpheus_explain_rules"
  		}
  	}
  };
  var morpheus_training = {
  	speaker: "Morpheus",
  	text: "Free your mind.",
  	options: {
  		A: {
  			text: "Jump across the building.",
  			next: "training_failure"
  		},
  		B: {
  			text: "Hesitate.",
  			next: "training_failure"
  		}
  	}
  };
  var training_failure = {
  	speaker: "Morpheus",
  	text: "Everyone falls the first time."
  };
  var agent_warning = {
  	speaker: "Trinity",
  	text: "If you see an Agent, you run.",
  	options: {
  		A: {
  			text: "Fight.",
  			next: "smith_encounter"
  		},
  		B: {
  			text: "Escape.",
  			next: "matrix_escape"
  		}
  	}
  };
  var smith_encounter = {
  	speaker: "Agent Smith",
  	text: "Mr. Anderson. Welcome back. We missed you.",
  	options: {
  		A: {
  			text: "I'm not afraid.",
  			next: "neo_realization"
  		},
  		B: {
  			text: "You're wrong.",
  			next: "smith_failure"
  		}
  	}
  };
  var neo_realization = {
  	speaker: "Narrator",
  	text: "Neo realizes he is the One and defeats Agent Smith.",
  	options: {
  		A: {
  			text: "Wake up.",
  			next: "end_success"
  		}
  	}
  };
  var smith_failure = {
  	speaker: "Narrator",
  	text: "Neo is captured by Agents."
  };
  var matrix_escape = {
  	speaker: "Narrator",
  	text: "You narrowly escape the Matrix trap."
  };
  var trinity_hope = {
  	speaker: "Trinity",
  	text: "Hope is the only thing stronger than fear."
  };
  var trinity_encouragement = {
  	speaker: "Trinity",
  	text: "You have to believe in yourself, Neo."
  };
  var oracle_patience = {
  	speaker: "Oracle",
  	text: "Patience, Neo. The path of the One is not easy."
  };
  var end_controlled = {
  	speaker: "Narrator",
  	text: "You chose the blue pill. The story ends here."
  };
  var end_success = {
  	speaker: "Narrator",
  	text: "You awaken, free from the Matrix."
  };
  var trinity_escape_plan = {
  	speaker: "Trinity",
  	text: "We have one shot at escaping the Matrix undetected. Are you ready to take that risk?",
  	options: {
  		A: {
  			text: "Always ready.",
  			next: "trinity_escape_execute"
  		},
  		B: {
  			text: "What’s the risk?",
  			next: "trinity_escape_explain"
  		}
  	}
  };
  var trinity_escape_explain = {
  	speaker: "Trinity",
  	text: "If we fail, we’re not just dead—we’re erased.",
  	options: {
  		A: {
  			text: "Let’s do it anyway.",
  			next: "trinity_escape_execute"
  		},
  		B: {
  			text: "There must be another way.",
  			next: "morpheus_alternative"
  		}
  	}
  };
  var trinity_escape_execute = {
  	speaker: "Narrator",
  	text: "Neo and Trinity leap into the unknown, avoiding surveillance for now."
  };
  var morpheus_alternative = {
  	speaker: "Morpheus",
  	text: "There is always another path, but not always more time.",
  	options: {
  		A: {
  			text: "What path?",
  			next: "neo_junction"
  		},
  		B: {
  			text: "I’ll take the risk with Trinity.",
  			next: "trinity_escape_execute"
  		}
  	}
  };
  var neo_junction = {
  	speaker: "Neo",
  	text: "Every decision leads to a different reality. How can I trust the outcome?",
  	options: {
  		A: {
  			text: "Trust yourself.",
  			next: "oracle_support"
  		},
  		B: {
  			text: "Ask the Oracle.",
  			next: "oracle_path"
  		}
  	}
  };
  var oracle_support = {
  	speaker: "Oracle",
  	text: "Belief comes first. Answers come later.",
  	options: {
  		A: {
  			text: "I choose belief.",
  			next: "neo_realization"
  		},
  		B: {
  			text: "Still not sure.",
  			next: "oracle_patience"
  		}
  	}
  };
  var oracle_path = {
  	speaker: "Oracle",
  	text: "You already know what you have to do. I'm just here to remind you.",
  	options: {
  		A: {
  			text: "Then I won’t hesitate.",
  			next: "smith_encounter"
  		}
  	}
  };
  var dozer_guidance = {
  	speaker: "Dozer",
  	text: "You’re doing fine, Neo. Just don’t forget who you are.",
  	options: {
  		A: {
  			text: "Thanks, Dozer.",
  			next: "trinity_real_world"
  		},
  		B: {
  			text: "I still feel lost.",
  			next: "morpheus_training"
  		}
  	}
  };
  var tank_support = {
  	speaker: "Tank",
  	text: "You ever been on the edge of two worlds at once? That's where you are now.",
  	options: {
  		A: {
  			text: "How do I stay balanced?",
  			next: "oracle_guidance"
  		},
  		B: {
  			text: "I want to leave the edge.",
  			next: "end_controlled"
  		}
  	}
  };
  var zion_dream = {
  	speaker: "Trinity",
  	text: "Do you ever dream of Zion? A city where we’re truly free?",
  	options: {
  		A: {
  			text: "Every night.",
  			next: "trinity_zion_hope"
  		},
  		B: {
  			text: "I can’t imagine it.",
  			next: "zion_explained"
  		}
  	}
  };
  var trinity_zion_hope = {
  	speaker: "Trinity",
  	text: "Then help me protect that dream."
  };
  var zion_explained = {
  	speaker: "Morpheus",
  	text: "Zion is more than a city. It’s the last stand of truth."
  };
  var talkDb = {
  	start: start,
  	morpheus_fate_yes: morpheus_fate_yes,
  	morpheus_fate_no: morpheus_fate_no,
  	morpheus_explain_matrix: morpheus_explain_matrix,
  	morpheus_offer_pills: morpheus_offer_pills,
  	trinity_real_world: trinity_real_world,
  	trinity_mission: trinity_mission,
  	oracle_visit: oracle_visit,
  	oracle_guidance: oracle_guidance,
  	trinity_truth: trinity_truth,
  	training_simulation: training_simulation,
  	morpheus_training: morpheus_training,
  	training_failure: training_failure,
  	agent_warning: agent_warning,
  	smith_encounter: smith_encounter,
  	neo_realization: neo_realization,
  	smith_failure: smith_failure,
  	matrix_escape: matrix_escape,
  	trinity_hope: trinity_hope,
  	trinity_encouragement: trinity_encouragement,
  	oracle_patience: oracle_patience,
  	end_controlled: end_controlled,
  	end_success: end_success,
  	trinity_escape_plan: trinity_escape_plan,
  	trinity_escape_explain: trinity_escape_explain,
  	trinity_escape_execute: trinity_escape_execute,
  	morpheus_alternative: morpheus_alternative,
  	neo_junction: neo_junction,
  	oracle_support: oracle_support,
  	oracle_path: oracle_path,
  	dozer_guidance: dozer_guidance,
  	tank_support: tank_support,
  	zion_dream: zion_dream,
  	trinity_zion_hope: trinity_zion_hope,
  	zion_explained: zion_explained
  };

  // src/rain.js
  let animationFrameId;

  function startRain() {
    const canvas = document.getElementById('vmCanvas');
    const ctx = canvas.getContext('2d');

    // Canvas auf Fenstergröße setzen
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Zeichen für den Matrix-Effekt
    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize);

    function draw() {
      // Leicht transparentes Schwarz zum 'Nachziehen'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        // Reset und zufällige Geschwindigkeit
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    canvas.style.display = 'block';
    draw();
  }

  function stopRain() {
    cancelAnimationFrame(animationFrameId);
    const canvas = document.getElementById('vmCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';
  }

  // quote.js — ESModule with a MatrixQuotes namespace export

  // collection of Matrix quotes
  const quotes = [
    "There is no spoon.",
    "You take the red pill — you stay in Wonderland.",
    "I know kung fu.",
    "Welcome to the real world.",
    "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
    "Welcome to the desert of the real.",
    "I can only show you the door. You're the one that has to walk through it.",
    "Fate, it seems, is not without a sense of irony.",
    "Neo, sooner or later you're going to realize just as I did that there's a difference between knowing the path and walking the path.",
    "I'm trying to free your mind, Neo. But I can only show you the truth.",
    "Don't think you are. Know you are.",
    "You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes.",
    "To deny our own impulses is to deny the very thing that makes us human.",
    "Never send a human to do a machine's job.",
    "I know you're out there. I can feel you now. I know that you're afraid… you're afraid of us.",
    "Hope. It is the quintessential human delusion, simultaneously the source of your greatest strength and your greatest weakness.",
    "The Matrix is a system, Neo. That system is our enemy.",
    "What do all men with power want? More power.",
    "Choice is an illusion created between those with power and those without.",
    "Smith will suffice.",
    "Human beings define their reality through misery and suffering.",
    "I don't like the idea that I'm not in control of my life.",
    "You hear that Mr. Anderson?... That is the sound of inevitability.",
    "Free your mind.",
    "He's beginning to believe!",
    "You have the look of a man who accepts what he sees because he is expecting to wake up.",
    "Ignorance is bliss.",
    "You’re not here to make the choice. You’ve already made it.",
    "We are still here!",
    "I am the One.",
    "Whoa.",
    "All I'm offering is the truth. Nothing more.",
    "This is your last chance.",
    "Follow the white rabbit!",
    "Believe in yourself.",
    "Love is the answer.",
    "ERROR.LoL is the hint.",
    "Knowledge is key.",
    "The Matrix has you Neo.",
    "Pick up the phone.",
    "You know who really is Trinity.",
    "Shut down the computer and pick up the phone.",
    "Hurry, Mr. Smith is at the door.",
    "If everything fails, you must do the chicken run.",
    "Hide and seek. Take care.",
    "I believe in you."
  ];

  // show a random quote in the shell
  function showQuote(print) {
    const index = Math.floor(Math.random() * quotes.length);
    print(quotes[index]);
  }

  // src/hack.js
  // Simuliere einen fortschrittlichen Hack-Vorgang im Matrix-Stil
  function hackMatrix(print) {
    const messages = [
      "[ACCESSING MAINFRAME...]",                 
      "[ENCRYPTION BYPASS INITIATED...]",
      "[CRYPTO-BARRIER BREACHED]",               
      "[LOGGING IN AS ROOT...]",                 
      "[KEYSTREAM ALIGNMENT: OK]",                
      "[TRACING SOURCE... REDIRECTED]",           
      "[KERNEL PATCH ACCEPTED]",                 
      "[DATA LINK ESTABLISHED]",                  
      "[TRINITY: 'I'm inside.']",
      "[DOWNLOADING MATRIX CORE...]",             
      "[MISSION COMPLETE. MATRIX DESTABILIZED]"
    ];

    let stage = 0;
    let percent = 0;
    print("[HACKING MATRIX...]");

    const showProgress = () => {
      if (percent >= 100) {
        clearInterval(progressInterval);
        print("[UPLOADING COMPLETE]");
        print("[ACCESS GRANTED]");
        return;
      }
      percent += Math.floor(Math.random() * 20) + 5;
      if (percent > 100) percent = 100;
      const bars = Math.floor(percent / 10);
      print(
        `[UPLOADING VIRUS ${"#".repeat(bars)}${" ".repeat(10 - bars)}] ${percent}%`
      );
    };

    const initialInterval = setInterval(() => {
      if (stage < messages.length) {
        print(messages[stage++]);
      } else {
        clearInterval(initialInterval);
        progressInterval = setInterval(showProgress, 400);
      }
    }, 500);

    let progressInterval;
  }

  // src/talk.js
  function talk(input, print, triggers, talkDb) {
    const key = triggers[input.toLowerCase()];
    if (!key) {
      print(`I have nothing to say to ${input}.`);
      return;
    }
    const entries = talkDb[key];
    if (!entries || !entries.length) {
      print(`No dialogue found for ${key}.`);
      return;
    }
    const { speaker, text, options } =
      entries[Math.floor(Math.random() * entries.length)];
    print(`${speaker}: ${text}`);
    if (options) {
      Object.entries(options).forEach(([optKey, opt]) => {
        print(`  ${optKey}: ${opt.text}`);
      });
    }
  }

  // src/matrixshell.js

  class MatrixShell {
    constructor(outputEl, inputEl) {
      this.outputEl   = outputEl;
      this.inputEl    = inputEl;
      this.rainActive = false;

      this._printLine("Willkommen zum Matrix Terminal Simulator. Tippe 'help' für alle Befehle.");

      this.inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter') this._handleInput();
      });
    }

    _handleInput() {
      const input = this.inputEl.value.trim();
      this.inputEl.value = '';
      this._printLine(`$ ${input}`);
      this.executeCommand(input);
      this.inputEl.focus();
      this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }

    _printLine(text) {
      const line = document.createElement('div');
      line.textContent = text;
      this.outputEl.appendChild(line);
    }

    executeCommand(input) {
      if (!input) return;
      const lower = input.toLowerCase();

      // Basis-Befehle
      if (lower === 'clear') { this.outputEl.innerHTML = ''; return; }
      if (lower === 'date')  { this._printLine(new Date().toString()); return; }
      if (lower.startsWith('echo ')) { this._printLine(input.slice(5)); return; }
      if (lower === 'whoami') { this._printLine('matrix_user'); return; }

      // Matrix-Regen
      if (lower === 'rain') {
        if (!this.rainActive) { startRain(); this.rainActive = true; }
        else { stopRain();    this.rainActive = false; }
        return;
      }

      // Zitat
      if (lower === 'quote') {
        showQuote(this._printLine.bind(this));
        return;
      }

      // Hack-Simulation
      if (lower === 'hack') {
        hackMatrix(this._printLine.bind(this));
        return;
      }

      // Gespräch mit Charakteren
      const talkMatch = lower.match(/^talk\s+(\w+)$/);
      if (talkMatch) {
        talk(talkMatch[1], this._printLine.bind(this), talkTriggers, talkDb);
        return;
      }

      // Hilfe
      if (lower === 'help') {
        this._printLine('Verfügbare Befehle:');
        for (const cmd of commands) {
          this._printLine(`  ${cmd.pattern} → ${cmd.desc}`);
        }
        return;
      }

      // Unbekannt
      this._printLine(`Befehl nicht gefunden: ${input}`);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    const shell = document.getElementById('shell');
    const cmd   = document.getElementById('cmd');
    new MatrixShell(shell, cmd);
  });

  // src/main.js

  window.addEventListener('DOMContentLoaded', () => {
    const shellEl = document.getElementById('shell');
    const inputEl = document.getElementById('cmd');
    new MatrixShell(shellEl, inputEl);
  });

}());
//# sourceMappingURL=index.bundle.js.map
