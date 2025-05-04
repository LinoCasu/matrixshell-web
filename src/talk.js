// src/talk.js

// 1) load each character’s dialog tree
import neoDb      from "./talk_db_neo.json";
import trinityDb  from "./talk_db_trinity.json";
import morpheusDb from "./talk_db_morpheus.json";
import smithDb    from "./talk_db_smith.json";
import oracleDb   from "./talk_db_orakel.json";

// 2) merge under keys matching intents
export const talkDb = {
  neo:      neoDb,
  trinity:  trinityDb,
  morpheus: morpheusDb,
  smith:    smithDb,
  oracle:   oracleDb
};

// 3) talkTo drives a conversation for any given character key
export function talkTo(character, print, db = talkDb) {
  const tree = db[character];
  if (!tree) {
    print(`No dialog tree for ${character}.`);
    return;
  }

  let current = Object.keys(tree)[0];        // start at first node

  function step() {
    const node = tree[current];
    if (!node) {
      print("…end of dialog.");
      window.nextTalkInput = null;
      return;
    }

    print(`${node.speaker}: ${node.text}`);

    const opts = node.options || {};
    const keys = Object.keys(opts);
    if (keys.length === 0) {
      bye(print);
      return;
    }

    for (let k of keys) {
      print(`  [${k}] ${opts[k].text}`);
    }

    // install one‑time global input handler
    window.nextTalkInput = (line) => {
      const choice = line.trim();
      const opt = opts[choice];
      if (!opt) {
        print("Invalid choice—please select one of the numbers above.");
        return step();
      }
      if (opt.next === null) {
        bye(print);
      } else {
        current = opt.next;
        step();
      }
    };
  }

  step();
}

// 4) simple bye
export function bye(print) {
  print("Conversation ended. (type help for other commands)");
  window.nextTalkInput = null;
}
