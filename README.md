# MatrixShell Web

> Schau dir die Live‑Demo an:
[https://LinoCasu.github.io/matrixshell-web/](https://LinoCasu.github.io/matrixshell-web/)

![Screenshot](images/screenshot.png)

A web-based Matrix-themed command shell with interactive dialogs. Run commands to see Matrix rain, quotes, hack simulations, and multi-character conversations.

## Features

* **Matrix Rain**: `rain` command starts/stops the falling code effect.
* **Quotes**: `quote` shows random Matrix quotes.
* **Hack**: `hack` simulates a terminal hack sequence.
* **Talk**: `talk <character>` interacts with characters (Neo, Trinity, Morpheus, Oracle, Smith) via branching dialog trees.
* **Help**: `help` lists available commands.

## Repository Structure

```
├── src/                # Source files
│   ├── main.js         # Entry point, sets up UI and command handling
│   ├── matrixshell.js  # Core shell logic
│   ├── rain.js         # Matrix rain effect
│   ├── quote.js        # Matrix quotes module
│   ├── hack.js         # Hack simulation
│   ├── talk.js         # Talk/dialog engine
│   ├── talk_db_*.json  # Dialog data for each character
│   └── ...
├── dist/               # Bundled output
│   └── index.bundle.js
├── css/                # Stylesheets
│   └── styles.css
├── index.html          # Main HTML page
├── commands.json       # Command definitions for help
├── chat_triggers.json  # Mappings for talk triggers
├── package.json        # NPM dependencies and scripts
├── rollup.config.js    # Rollup build configuration
└── README.md           # Project overview (this file)
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your‑username>/MatrixShellWeb.git
   cd MatrixShellWeb
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Build the bundle:

   ```bash
   npm run build
   ```
4. (Optional) Set up Python virtual environment for serving:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

## Running Locally

Serve the `dist/` folder via any HTTP server. For example:

```bash
npx http-server . -c-1
```

Then open [http://localhost:8080/index.html](http://localhost:8080/index.html) in your browser.

## Embedding in WordPress

1. Upload `dist/index.bundle.js`, `css/styles.css`, and any assets (e.g., `favicon.ico`) via FTP to your theme or plugin directory.
2. Copy the contents of `index.html` into a custom page template or use a shortcode/table block to include the HTML structure.
3. Enqueue the script and stylesheet in your theme's `functions.php`:

   ```php
   function enqueue_matrixshell() {
     wp_enqueue_style('matrixshell-css', get_stylesheet_directory_uri() . '/css/styles.css');
     wp_enqueue_script('matrixshell-js', get_stylesheet_directory_uri() . '/dist/index.bundle.js', [], null, true);
   }
   add_action('wp_enqueue_scripts', 'enqueue_matrixshell');
   ```

## Usage

Type commands into the shell prompt:

* `help` — list commands
* `rain` / `stop` — start/stop Matrix rain
* `quote` — random quote
* `hack` — hack simulation
* `talk neo`, `talk trinity`, etc. — character dialog
* `exit` or `CTRL+C` — close conversation

## Contributing

Feel free to open issues or pull requests. Ensure new dialog nodes follow the format in `talk_db_*.json`.

## License

ANTI-CAPITALIST SOFTWARE LICENSE (v 1.4) 2025 © Lino Casu
